import React from 'react';
import ThemeContext from './themeContext';

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button className={`${context}-theme`}>Switch Theme</button>
      )}
    </ThemeContext.Consumer>
  );
};
export default Button;
