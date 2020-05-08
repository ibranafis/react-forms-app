import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const Navigation= props => {
  return (
  <div className="backdrawer">
    <nav className="side-drawer">
      <ul>
          <li>
            <NavLink to="/">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
			<ul>
		  <li>
            <NavLink to="/settings">Notifications</NavLink>
          </li>
		  </ul>
          </li>
		  <li>
            <NavLink to="/tasks">Tasks</NavLink>
          <ul>
		  <li>
            <NavLink to="/tasks">Task 1</NavLink>
          </li>
		  <li>
            <NavLink to="/tasks">Task 2</NavLink>
          </li>
		  </ul>
		  </li>
        </ul>
    </nav>
	</div>
  )
}

export default Navigation