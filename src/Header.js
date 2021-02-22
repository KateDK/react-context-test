import React, { Component } from 'react';
import ThemeContext from './themeContext';

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <header className={`${theme}-theme`}>
            <h2>{theme} Theme</h2>
          </header>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Header;
