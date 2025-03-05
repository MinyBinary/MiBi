import { css } from 'styled-components'
import { fadeInBackground, scaleInPopup } from '../keyframes/keyframes'
import { Durations } from '../style-variables/durations'

const fadeIn = css`${fadeInBackground} ${Durations.Fast} ease-out forwards`
const scaleIn = css`${scaleInPopup} ${Durations.Fast} ease-out forwards`

export const Animations = {
  fadeIn,
  scaleIn
}


