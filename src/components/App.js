// dump component who don't see redux

import React from 'react';
import Header from './Header';
import Taskbar from './Taskbar';
import Tasklist from './Tasklist';

const App = () => (
    <div>
        <Header />
        <Taskbar />
        <Tasklist />
    </div>
)

export default App