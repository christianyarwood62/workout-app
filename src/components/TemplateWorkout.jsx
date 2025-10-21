function TemplateWorkout({ onShowCreateWorkoutTemplate }) {
  return (
    <div className="container">
      <button onClick={() => onShowCreateWorkoutTemplate()}>
        Add a new workout
      </button>
    </div>
  );
}

export default TemplateWorkout;
