import { fadeInBackground, scaleInPopup } from 'shared/styles/keyframes/keyframes';
import { Durations } from 'shared/styles/style-variables/durations';

const fadeIn = `
  ${fadeInBackground} ${Durations.Fast} ease-out forwards
`;
const scaleIn = `
  ${scaleInPopup} ${Durations.Fast} ease-out forwards
`;

export const Animations = {
  fadeIn,
  scaleIn,
};
