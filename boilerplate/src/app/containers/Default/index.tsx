import React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { STORE_ROUTER } from 'app/constants';
import { Placeholder } from 'app/components';

export interface DefaultAppProps extends RouteComponentProps {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
}

export interface DefaultAppState {}

@inject(STORE_ROUTER)
@observer
export class DefaultApp extends React.Component<
  DefaultAppProps,
  DefaultAppState
> {
  render() {
    return (
      <div className={style.normal}>
        <Placeholder />
      </div>
    );
  }
}
