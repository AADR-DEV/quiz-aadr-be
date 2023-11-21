import express from 'express';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 5001;
const ADMIN = 'Admin';

const app = express();

const expressServer = app.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});

type UserAnswer = {
  questionId: string;
  questionAnswer: string;
};

type User = {
  id: string;
  name: string;
  room: string;
  answers?: UserAnswer[];
};

type UsersState = {
  users: User[];
  setUsers: (newUsersArray: User[]) => void;
};

// state
const UsersState: UsersState = {
  users: [],
  setUsers: function (newUsersArray) {
    this.users = newUsersArray;
  },
};

const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? false
        : ['http://localhost:5001', 'http://127.0.0.1:5001'],
  },
});

io.on('connection', socket => {
  console.log(`User ${socket.id} connected`);

  // Upon connection - only to user
  socket.emit('message', buildMsg(ADMIN, 'Welcome to Chat App!'));

  socket.on('enterRoom', ({ name, room }) => {
    // leave previous room
    const prevRoom = getUser(socket.id)?.room;

    if (prevRoom) {
      socket.leave(prevRoom);
      io.to(prevRoom).emit(
        'message',
        buildMsg(ADMIN, `${name} has left the room`),
      );
    }

    const user = activateUser(socket.id, name, room);

    // Cannot update previous room users list until after the state update in activate user
    if (prevRoom) {
      io.to(prevRoom).emit('userList', {
        users: getUsersInRoom(prevRoom),
      });
    }

    // join room
    const rooms = io.sockets.adapter.rooms;
    const currentRoom = rooms.get(user.room);

    if (currentRoom === undefined) {
      socket.join(user.room);
      socket.emit(
        'message',
        buildMsg(ADMIN, `You have joined the ${user.room} chat room`),
      );
    } else if (currentRoom.size < 5) {
      socket.join(user.room);
      socket.emit(
        'message',
        buildMsg(ADMIN, `You have joined the ${user.room} chat room`),
      );
    } else {
      socket.emit(
        'message',
        buildMsg(ADMIN, `You cannot join the ${user.room}`),
      );
    }

    // To everyone else
    socket.broadcast
      .to(user.room)
      .emit('message', buildMsg(ADMIN, `${user.name} has joined the room`));

    // Update user list for room
    io.to(user.room).emit('userList', {
      users: getUsersInRoom(user.room),
    });

    // Update rooms list for everyone
    io.emit('roomList', {
      rooms: getAllActiveRooms(),
    });
  });

  // When user disconnects - to all others
  socket.on('disconnect', () => {
    const user = getUser(socket.id);
    userLeavesApp(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        buildMsg(ADMIN, `${user.name} has left the room`),
      );

      io.to(user.room).emit('userList', {
        users: getUsersInRoom(user.room),
      });

      io.emit('roomList', {
        rooms: getAllActiveRooms(),
      });
    }

    console.log(`User ${socket.id} disconnected`);
  });

  // Listening for a message event
  socket.on('message', ({ name, text }) => {
    const room = getUser(socket.id)?.room;

    console.log(text);

    if (room) {
      io.to(room).emit('message', buildMsg(name, text));
    }
  });

  // Listen for activity
  socket.on('activity', name => {
    const room = getUser(socket.id)?.room;
    if (room) {
      socket.broadcast.to(room).emit('activity', name);
    }
  });

  // Listen for game
  socket.on('startGame', () => {
    const room = getUser(socket.id)?.room;

    console.log(room);

    if (room) {
      io.to(room).emit('message', buildMsg(ADMIN, `Let's get started!`));
    }
  });
});

function buildMsg(name: string, text: string) {
  return {
    name,
    text,
    time: new Intl.DateTimeFormat('default', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date()),
  };
}

// User functions
function activateUser(id: string, name: string, room: string) {
  const user = { id, name, room };
  UsersState.setUsers([
    ...UsersState.users.filter(user => user.id !== id),
    user,
  ]);
  return user;
}

function userLeavesApp(id: string) {
  UsersState.setUsers(UsersState.users.filter(user => user.id !== id));
}

function getUser(id: string) {
  return UsersState.users.find(user => user.id === id);
}

function getUsersInRoom(room: string) {
  return UsersState.users.filter(user => user.room === room);
}

function getAllActiveRooms() {
  return Array.from(new Set(UsersState.users.map(user => user.room)));
}
