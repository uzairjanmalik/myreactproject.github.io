import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Popular Recipes</h2>
      <ul>
        <li><Link to="/video/1">Spaghetti Carbonara</Link></li>
        <li><Link to="/video/2">Chicken Alfredo</Link></li>
        <li><Link to="/video/3">Beef Stroganoff</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
