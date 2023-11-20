import { format } from 'date-fns';

const formatMessage = (playerName: string, text: string) => {
  return {
    playerName,
    text,
    createdAt: format(new Date(), 'hh:mm a'),
  };
};

export default formatMessage;
