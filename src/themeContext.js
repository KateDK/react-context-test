import React from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
  state = { value: 'dark' };
  render() {
    return <Provider value={this.state.value}>{this.props.children}</Provider>;
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
