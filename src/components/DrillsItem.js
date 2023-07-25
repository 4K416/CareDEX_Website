import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function DrillsItem({ image, name }) {
  return (
    <div className="drillsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> <Link to="/firedrill">{name}</Link></h1>
      {/* `url(${image})` */}
    </div>
  );
}

export default DrillsItem;
