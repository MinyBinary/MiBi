import { formatTextOutput } from './format-text-output';

describe('format-text-output', () => {
  it('format-text-output', () => {
    expect(formatTextOutput('abc')).toBe('abc');
  });

  const emojis = '😆😀🥲😊👅🦸👢👨🏻‍⚖️👴🏼🧑🏼‍🦽✋🏽🛌🏽';

  it('format-text-output-with-emoji', () => {
    expect(formatTextOutput(emojis)).toBe('');
  });

  it('format-text-output-with-emoji-and-numbers', () => {
    expect(formatTextOutput(emojis + '123')).toBe('123');
  });

  it('format-text-output-with-emoji-and-symbols', () => {
    expect(formatTextOutput(emojis + '123!@#')).toBe('123!@#');
  });
});
