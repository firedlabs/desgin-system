import styled from 'styled-components'
import { palette } from '../../index'

const Section = styled.section`
  width: 100%;
  height: 400px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? palette[backgroundColor] : 'var(--color-first)'};
  border-bottom: 10px solid
    ${({ borderColor }) =>
      borderColor ? palette[borderColor] : 'var(--color-black-first)'};
`

export default Section