export const filteredParams = (params: string) => {
  const splitter = '@';
  return params.split(splitter)[0];
};
