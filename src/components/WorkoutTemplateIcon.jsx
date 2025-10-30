import { useExercises } from "../contexts/ExercisesContext";

function WorkoutTemplateIcon({ value, id, displayNumber }) {
  const { deleteWorkoutTemplateFromList } = useExercises();

  return (
    <div className="workout-template-icon">
      <button
        onClick={(e) => deleteWorkoutTemplateFromList(e, id)}
        className="icon-x button"
      >
        X
      </button>
      <h3>{`Template ${displayNumber}`}</h3>
      <div className="workout-template-icon-exercises">
        {value.exercises.map((exercise) => (
          <p key={exercise}>💪 {exercise}</p>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTemplateIcon;
