export const formatWeb3Address = (
  address: string,
  sliceStart: number = 4,
  sliceEnd: number = 2,
): string => `${address.slice(0, sliceStart)}...${address.slice(-sliceEnd)}`;
