function ExerciseDetails({ selectedExercise, onSelection }) {
  return (
    <div>
      <div className="exercise-details backgroundContainer">
        <h2>{selectedExercise.name}</h2>
        <button onClick={() => onSelection(selectedExercise)}>X</button>
        <button>History</button>
        <button>Records</button>
        {selectedExercise.instructions.map((instruction, step) => (
          <div key={step + 1}>
            Step {step + 1}: {instruction}
          </div>
        ))}
        <div>
          <h3>Exercise Difficulty</h3>
          <span>{selectedExercise.difficulty}</span>
        </div>
        <div>
          <h3>Exercise Equipment</h3>
          <span>{selectedExercise.equipment}</span>
        </div>
        <div>
          <h3>Exercise Instructions</h3>
          <span>{selectedExercise.instructions}</span>
        </div>
        <div>
          <h3>Exercise Target Muscle</h3>
          <span>{selectedExercise.muscle}</span>
        </div>
        <div>
          <h3>Exercise Type</h3>
          <span>{selectedExercise.type}</span>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;
