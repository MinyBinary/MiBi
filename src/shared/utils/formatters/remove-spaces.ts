export const removeSpaces = (text: string): string => {
  return text.replace(/[\s\u200b-\u200d\u2060\ufeff]|[\ufe0f\ufe0e]+/g, '');
};
