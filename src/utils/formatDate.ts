const formatDate = (timestamp: Date): string => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDay()}`.slice(-2);

  return `${day}/${month}/${year}`;
};

export default formatDate;
