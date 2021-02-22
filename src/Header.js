import React, { Component } from 'react';
import { ThemeContextConsumer } from './themeContext';

class Header extends Component {
  render() {
    return (
      <ThemeContextConsumer>
        {(theme) => (
          <header className={`${theme}-theme`}>
            <h2>{theme} Theme</h2>
          </header>
        )}
      </ThemeContextConsumer>
    );
  }
}
export default Header;
