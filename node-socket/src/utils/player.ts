export type Player = {
  id: string;
  playerName: string;
  room: string;
};

type Point = {
  playerId: string;
  playerName: string;
  point: number;
};

export const players: Player[] = [];
export const points: Point[] = [];

export const addPlayer = ({ id, playerName, room }: Player) => {
  if (!playerName || !room) {
    return {
      error: new Error('Please enter a player name and room!'),
    };
  }

  playerName = playerName.trim();
  room = room.trim();

  const existingPlayer = players.length
    ? players.find(
        player => player.playerName.toLowerCase() === playerName.toLowerCase(),
      )
    : null;

  if (existingPlayer) {
    return {
      error: new Error('Player name is in use'),
    };
  } else {
    const newPlayer = { id, playerName, room };
    players.push(newPlayer);

    if (!points.find(item => item.playerName === playerName)) {
      const newPlayerPoint: Point = { playerName, playerId: id, point: 0 };
      points.push(newPlayerPoint);
    }

    return { newPlayer };
  }
};

export const getPlayer = (id: string) => {
  const player = players.find(player => player.id === id);

  if (!player) {
    return {
      error: new Error('Player not found!'),
    };
  }

  return { player };
};

export const getPlayersByRoom = (room: string) => {
  const playersByRoom = players.filter(player => player.room === room);

  if (playersByRoom.length) {
    return playersByRoom;
  }

  return {
    error: new Error('No player in this room!'),
  };
};

export const removePlayer = (id: string) => {
  const playerToRemove = players.find(player => player.id === id);

  if (playerToRemove) {
    players.splice(players.indexOf(playerToRemove), 1);

    return { playerName: playerToRemove.playerName, room: playerToRemove.room };
  }

  return {
    error: new Error('Player not found!'),
  };
};
