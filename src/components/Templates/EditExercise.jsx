import { useState } from "react";

function EditExercise({ exercise, onEditExercise }) {
  function handleSetsUpdate(e) {
    onEditExercise({
      ...exercise,
      sets: e.target.value,
    });
  }
  return (
    <div key={exercise.id} className="flex-row">
      <span style={{ color: "white" }}>Delete</span>
      <p>{exercise.exerciseName}</p>
      <input
        defaultValue={exercise.sets}
        onChange={handleSetsUpdate}
        style={{ width: "50px" }}
      />
      <input defaultValue={exercise.reps} style={{ width: "50px" }} />
    </div>
  );
}

export default EditExercise;
