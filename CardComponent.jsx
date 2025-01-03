import { useEffect, useState } from "react";
import "./App.css";

function CardComponent({ title, description, progress }) {
  const [value, setValue] = useState(0);
  function Update(value) {
    setValue(value);
  }

  function Edit() {}

  function deleteProgress() {}
  return (
    <>
      <div id="awardsContainer">
        <div class="award-card" id="award-1">
          <span class="delete-icon">&times;</span>
          <h3>Fitness Champion</h3>
          <p>Complete 10 workouts.</p>
          <div class="progress-bar">
            <div class="progress" style="width: 50%;"></div>
          </div>
          <button class="update-button" onClick={() => Update(value)}>
            Update Progress
          </button>
          <button class="Edit" onClick={() => Edit}>
            Edit
          </button>
          <button className="delete" onClick={deleteProgress}>
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
