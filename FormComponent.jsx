import { useState } from "react";
import "./App.css";
function FormComponent() {
  const [add, setAdd] = useState(0);
  const [update, setUpdate] =useState();

function handleClick(){
    setAdd(add+1);
    setUpdate(update+1);
}

function reset(e){
    e.target.clear;
}
  return (
    <>
    
      <h1>hello</h1>
      <div class="container">
      <div class="form-container" id="awardForm">
      <h3>Add/Edit Award</h3>
      <input type="text" id="awardTitle" placeholder="Award Title" value="Fitness Champion">
      <input type="text" id="awardDescription" placeholder="Award Description" value="Complete 10 workouts.">
      <input type="number" id="awardRequirement" placeholder="Requirements (e.g., 10)" value="10">
      <button onClick={handleClick}>Submit</button>
      <button class="clear-button" onChange={()=>reset(e)}>Clear</button>
</div>

   </div>
    </>
  );
}

export default FormComponent ;
