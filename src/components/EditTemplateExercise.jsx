import { useState } from "react";

function EditTemplateExercise({ exercise }) {
  const [setsInput, setSetsInput] = useState("");
  return (
    <div className="flex-row">
      <span style={{ color: "white" }}>Delete</span>
      <p>{exercise.exerciseName}</p>
      <input
        defaultValue={exercise.sets}
        // value={setsInput || exercise.sets}
        onChange={(e) => setSetsInput(e.target.value)}
        // value={setsInput || exercise.sets}
        style={{ width: "50px" }}
      />
      <input defaultValue={exercise.reps} style={{ width: "50px" }} />
    </div>
  );
}

export default EditTemplateExercise;
