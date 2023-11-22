type Response = {
  category: object;
};

export const filteredParams = (params: string) => {
  const splitter = '@';
  return params.split(splitter)[0];
};

export const convertResponse = <TResponse extends Response>(
  response: TResponse[],
) => {
  return response.map(response => response.category);
};
