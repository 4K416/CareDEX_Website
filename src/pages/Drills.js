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
        DrillsList.map((item) => {
          return (
            <DrillsItem
              key = {item.key}
              image={item.image}
              name={item.name}
              link={item.link}
            />
          );
        })
      }
      </div>
    </div>
  );
}

export default Drills;
