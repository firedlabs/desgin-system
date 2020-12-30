import styled from 'styled-components'
import color from '../../src/lib/components/VideoPlayer/VideoPlayerProgressBar/node_modules/styles/settings/color'
import size from 'styles/settings/size'

const TimerStyles = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: ${size.small};
  color: ${color.first};
`

export default TimerStyles
