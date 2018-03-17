import * as React from 'react';
import './App.less';
import { Hello } from './components/Hello';

export class App extends React.Component<{},{}> {
  render():JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello compiler="typescript" framework = "react" />
      </div>
    );
  }
}
