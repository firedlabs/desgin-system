import React from 'react'
import PropTypes from 'prop-types'
import { Image, ActionImageStyle } from './styles'
import { palette } from '../../Styles/Settings/Colors/palette'

function ActionImage({
  href,
  src,
  alt,
  target,
  backgroundColor,
  size,
  isPadding,
  boxShadow,
  as,
  to
}) {
  return (
    <ActionImageStyle
      href={href}
      backgroundColor={backgroundColor}
      size={size}
      isPadding={isPadding}
      boxShadow={boxShadow}
      as={as}
      to={to}
      target={target}
    >
      <Image src={src} alt={alt} />
    </ActionImageStyle>
  )
}

ActionImage.defaultProps = {
  href: '#',
  backgroundColor: palette.colorFirst,
  size: 'small',
  isPadding: true,
  boxShadow: false,
  as: 'a',
  to: '',
  target: '_self'
}

ActionImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string,
  isPadding: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  boxShadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  as: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string
}

export default ActionImage
