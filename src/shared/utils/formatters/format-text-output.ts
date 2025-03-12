import { removeEmojis } from './remove-emojis';

export const formatTextOutput = (text: string): string => {
  return removeEmojis(text);
};
