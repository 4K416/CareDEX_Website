import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function DrillsItem({ image, name, link }) {
  return (
    <div className="drillsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> <Link to={link}>{name}</Link></h1>
</div>
  );
  }

  


export default DrillsItem;
