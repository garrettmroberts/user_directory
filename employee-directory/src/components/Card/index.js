import React from "react";

function Card(props) {
  return(
    <div class="card">
      <div class="card-body">
        <div class="card-body">
          <h5 class="card-title">
            {props.firstName} {props.lastName}
          </h5>
          <ul class="list-group">
            <li class="list-group-item">
              Job Title: {props.title}
            </li>
            <li class="list-group-item">
              Department: {props.department}
            </li>
            <li class="list-group-item">
              Salary: ${props.salary}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Card;