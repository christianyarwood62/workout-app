function Exercise({ exercise, children, onSelection, selectedExercise }) {
  const isSelected = selectedExercise?.name === exercise.name;

  return (
    <div className="exercise">
      <p>{children}</p>
      <button onClick={() => onSelection(exercise)}>
        {isSelected ? "Hide details" : "Show details"}
      </button>
    </div>
  );
}

export default Exercise;
