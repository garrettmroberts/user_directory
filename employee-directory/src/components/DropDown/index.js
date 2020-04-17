import React from "react";

function DropDown(props) {
  return <div>
    <button type="button" className={`btn btn-${props.type} dropdown-toggle btn-lg btn-block`} data-toggle="dropdown">
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </button>
      <div className="dropdown-menu">
        {props.keys.map(key => {
          return <button className="dropdown-item" type="button">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        })}
       
      </div>
    </div>
};

export default DropDown;