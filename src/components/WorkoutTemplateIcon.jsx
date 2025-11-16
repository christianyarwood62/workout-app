import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutTemplateIcon({ template, id }) {
  const { deleteWorkoutTemplateFromList, toggleEditWorkoutForm } =
    useTemplates();

  return (
    <div className="workout-template-icon">
      <div className="icon-buttons">
        <button
          onClick={(e) => deleteWorkoutTemplateFromList(e, id)}
          className="icon-x button"
        >
          🗑️
        </button>
        <button
          className="icon-edit-button button"
          onClick={() => toggleEditWorkoutForm(id)}
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
