import { default as _TextField } from '@material-ui/core/TextField';
import * as React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import './App.css';
import logo from './logo.svg';

const TextField = onlyUpdateForKeys(['value'])(_TextField);

interface IState {
  [index: number]: string;
}

const x = Array.from(Array(50)).map((v, idx) => idx);

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = x.reduce((prev, current) => ({ ...prev, [current]: 0 }), {});
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">›
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.createElements()}
      </div>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      this.setState({ [e.target.getAttribute('data-idx')!]: e.target.value })

  private createElement = (i: number) =>
    <TextField
      key={i}
      inputProps={{ 'data-idx': i }}
      value={this.state[i]}
      onChange={this.onChange}
    />

  private createElements = () => x.map(this.createElement);
}

export default App;
