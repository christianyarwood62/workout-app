import { useExercises } from "../contexts/ExercisesContext";

function WorkoutTemplateIcon({ workout, id, displayNumber }) {
  const { deleteWorkoutTemplateFromList, handleEditWorkoutTemplate } =
    useExercises();

  return (
    <div className="workout-template-icon">
      <div className="icon-buttons">
        <button
          onClick={(e) => deleteWorkoutTemplateFromList(e, id)}
          className="icon-x button"
        >
          X
        </button>
        <button
          className="icon-edit-button button"
          onClick={(e) => handleEditWorkoutTemplate(e, id)}
        >
          ✍️
        </button>
      </div>
      <h3>{`Template ${displayNumber}`}</h3>
      <div className="workout-template-icon-exercises">
        {workout.exercises.map((exercise) => (
          <p key={exercise}>💪 {exercise}</p>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTemplateIcon;
