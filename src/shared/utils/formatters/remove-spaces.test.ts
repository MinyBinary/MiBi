import { removeSpaces } from './remove-spaces';

describe('remove-all-spaces', () => {
  it('remove-all-spaces', () => {
    expect(removeSpaces('abc')).toBe('abc');
  });

  it('remove-all-spaces', () => {
    expect(removeSpaces(' ')).toBe('');
  });

  it('remove-all-spaces', () => {
    expect(removeSpaces('abc abc')).toBe('abcabc');
  });
});
