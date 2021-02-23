import React from 'react';
import Header from './Header';
import Button from './Button';
import { ThemeContextConsumer } from './themeContext';

function App() {
  return (
    <div>
      <Header />
      <ThemeContextConsumer>
        {(context) => (
          <Button theme={context.theme} onClick={context.toggleTheme} />
        )}
      </ThemeContextConsumer>
      <Button theme="light" />
      <Button />
    </div>
  );
}

export default App;
