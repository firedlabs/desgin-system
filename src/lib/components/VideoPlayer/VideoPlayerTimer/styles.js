import styled from 'styled-components'
import { transparentize } from 'polished'
import { Caption } from '../../../Styles/Tools'
import { palette } from '../../../Styles/Settings/Colors/palette'

const VideoPlayerTimerStyles = styled.p`
  ${Caption};
  text-align: center;
  color: var(--color-third);
  background-color: ${transparentize(0.7, palette.colorSecond)};
  padding: calc(var(--gap-smallest) / 2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default VideoPlayerTimerStyles
