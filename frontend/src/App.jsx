import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import dinoImg from '../img/dinocorn.jpg';

const HelloWorldApp = props => (
  <Fragment>
    <h1>Hello World from React and Django</h1>
    <div>
      <span>Passed props:</span>
      {JSON.stringify(props)}
    </div>
    <img src={dinoImg} />
  </Fragment>
);

window.renderApp = props =>
  ReactDOM.render(
    <HelloWorldApp {...props} />,
    document.getElementById('react-container'),
  );
