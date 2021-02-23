import React, { Component } from 'react';
import { ThemeContextConsumer } from './themeContext';

class Header extends Component {
  render() {
    return (
      <ThemeContextConsumer>
        {(context) => (
          <header className={`${context.theme}-theme`}>
            <h2>{context.theme} Theme</h2>
          </header>
        )}
      </ThemeContextConsumer>
    );
  }
}
export default Header;
