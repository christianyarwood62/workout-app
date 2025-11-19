function EditExercise({ exercise, onEditExercise }) {
  function handleSetsUpdate(e) {
    onEditExercise({
      ...exercise,
      sets: e.target.value,
    });
  }

  function handleRepsUpdate(e) {
    onEditExercise({ ...exercise, reps: e.target.value });
  }

  return (
    <div key={exercise.id} className="flex-row">
      <span style={{ color: "white" }}>Delete</span>
      <p>{exercise.exerciseName}</p>
      <input
        value={exercise.sets}
        onChange={handleSetsUpdate}
        style={{ width: "50px" }}
      />
      <input
        value={exercise.reps}
        onChange={handleRepsUpdate}
        style={{ width: "50px" }}
      />
    </div>
  );
}

export default EditExercise;
