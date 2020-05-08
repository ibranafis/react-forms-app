import React from 'react';

import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
   
      <div className="toolbar_logo">
	  <img src={require('./user.png')}/>
        <a href="/">USER</a>
      </div>
  </header>
)

export default toolbar