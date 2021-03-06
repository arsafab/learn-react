import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ButtonSandbox from './components/button/sandBox';
import ButtonGroupSandbox from './components/button-group/sandBox';
import IconSandbox from './components/icon/sandBox';
import ImageSandbox from './components/image/sandBox';
import ChipSandbox from './components/chip/sandBox';
import BadgeSandbox from './components/badge/sandbox';
import ListGroupSandbox from './components/list-group/sandbox';
import InputSandbox from './components/input/sandbox';
import TabbarSandbox from './components/tabbar/sandbox';
import TooltipSandbox from './components/tooltip/sandbox';
import ModalSandbox from './components/modal/sandbox';

ReactDOM.render((
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/button" component={ButtonSandbox} />
          <Route path="/button-group" component={ButtonGroupSandbox} />
          <Route path="/icon" component={IconSandbox} />
          <Route path="/image" component={ImageSandbox} />
          <Route path="/chip" component={ChipSandbox} />
          <Route path="/badge" component={BadgeSandbox} />
          <Route path="/list-group" component={ListGroupSandbox} />
          <Route path="/input" component={InputSandbox} />
          <Route path="/tabbar" component={TabbarSandbox} />
          <Route path="/tooltip" component={TooltipSandbox} />
          <Route path="/modal" component={ModalSandbox} />
        </Switch>
      </App>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
