import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className={`${props.theme}-theme`} onClick={props.onClick}>
      Switch Theme
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  theme: 'light',
  onClick: () => console.log('Click'),
};

export default Button;
