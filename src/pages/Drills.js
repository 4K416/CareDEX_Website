import React from "react";
import { DrillsList } from "../helpers/DrillsList";
import DrillsItem from "../components/DrillsItem";
import "../styles/Drills.css";

function Drills() {
  return (
    <div className="drills">
      <h1 className="drillsTitle">CareDEX Drill Information</h1>
      <div className="drillsList">
      {
        DrillsList.map((x) => {
          return (
            <DrillsItem
              key = {x.key}
              image={x.image}
              name={x.name}
            />
          );
        })
      }
      </div>
    </div>
  );
}

export default Drills;
