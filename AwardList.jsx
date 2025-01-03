import { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent";

function AwardList({ title, description, progress }) {
  function Update() {}
  return (
    <>
      <div>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </div>
    </>
  );
}

export default AwardList;
