function EditExercise({ exercise }) {
  return (
    <div key={exercise.id} className="flex-row">
      <span style={{ color: "white" }}>Delete</span>
      <p>{exercise.exerciseName}</p>
      <input
        defaultValue={exercise.sets}
        // onChange={(e) => setNewSets(e.target.value)}
        // onChange={(e) =>
        //   dispatch({
        //     type: "editedTemplate/updateSets",
        //     payload: { sets: Number(e.target.value), index: i },
        //   })
        // }
        style={{ width: "50px" }}
      />
      <input defaultValue={exercise.reps} style={{ width: "50px" }} />
    </div>
  );
}

export default EditExercise;
