import { formatTextOutput } from './format-text-output';

describe('format-text-output', () => {
  it('format-text-output', () => {
    expect(formatTextOutput('abc')).toBe('abc');
  });

  it('format-text-output-with-spaces', () => {
    expect(formatTextOutput(' ')).toBe('');
  });

  it('format-text-output-with-duplicated-spaces', () => {
    expect(formatTextOutput('abc abc')).toBe('abc abc');
  });
});
