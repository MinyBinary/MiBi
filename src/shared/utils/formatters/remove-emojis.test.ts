import { removeEmojis } from './remove-emojis';

describe('remove-emojis', () => {
  const emojis = '😆😀🥲😊👅🦸👢👨🏻‍⚖️👴🏼🧑🏼‍🦽✋🏽🛌🏽';

  it('remove-emojis-with-text', () => {
    expect(removeEmojis(emojis + '123')).toBe('123');
  });

  it('remove-emojis', () => {
    expect(removeEmojis(emojis)).toBe('');
  });

  it('remove-emojis-with-symbols', () => {
    expect(removeEmojis(emojis + '123!@#')).toBe('123!@#');
  });

  it('remove-emojis-with-spaces', () => {
    expect(removeEmojis('    ' + emojis)).toBe('');
  });
});
