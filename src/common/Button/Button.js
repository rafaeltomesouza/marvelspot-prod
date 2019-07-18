import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, alt, className, text } = props;
  return (
    <div
      key={text}
      onClick={onClick}
      alt={alt}
      className={className}
    >
      {text}
    </div>
  )
}

export default Button;

Button.defaultProps = {
  className: ''
}

Button.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

