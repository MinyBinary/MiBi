import { formatWeb3Address } from './format-web3-address';

describe('format-web3-address', () => {
  it('format-web3-address-with-slice-default', () => {
    expect(formatWeb3Address('0x1234567890123456789012345678901234567890')).toBe('0x12...90');
  });

  it('format-web3-address-with-slice-custom', () => {
    expect(formatWeb3Address('0x1234567890123456789012345678901234567890', 2, 2)).toBe('0x...90');
  });
});
