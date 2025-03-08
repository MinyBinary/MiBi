export const formatWeb3Address = (
  address: string,
  sliceStart: number = 6,
  sliceEnd: number = 4,
): string => `${address.slice(0, sliceStart)}...${address.slice(-sliceEnd)}`;
