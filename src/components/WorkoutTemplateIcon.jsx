import { useExercises } from "../contexts/ExercisesContext";

function WorkoutTemplateIcon({ template, id, displayNumber }) {
  const {
    deleteWorkoutTemplateFromList,
    handleEditWorkoutTemplate,
    toggleEditWorkoutForm,
  } = useExercises();

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
          onClick={() => toggleEditWorkoutForm(template)}
        >
          ✍️
        </button>
      </div>
      <h3>{template.workoutName}</h3>
      <div className="workout-template-icon-exercises">
        {template.exercises.map((exercise) => (
          <p key={exercise}>💪 {exercise}</p>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTemplateIcon;
