import React from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
  state = { theme: 'dark' };
  toggleTheme = () => {
    this.setState((prevState) => {
      const theme = prevState.theme === 'light' ? 'dark' : 'light';
      return { theme };
    });
  };
  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
