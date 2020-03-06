import React, { Fragment } from 'react';

import Navigation from './layout/navigation/navigation';
import Main from './layout/main/main';

interface props {
    children: any
}

const App: React.FC<props> = ({ children }) => (
    <Fragment>
        <Navigation key="navigation" />,
        <Main key="main">{ children }</Main>
    </Fragment>
)

export default App;
