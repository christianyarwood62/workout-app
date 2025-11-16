import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutTemplateIcon({ template, id }) {
  const { toggleEditWorkoutForm, handleDeleteTemplate } = useTemplates();

  return (
    <div className="workout-template-icon">
      <div className="icon-buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteTemplate(template.id);
          }}
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
        {template.template.map((exercise) => (
          <div key={template.id}>
            <p>
              💪 {exercise.exerciseName}: {exercise.sets} Sets x {exercise.reps}
              reps
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTemplateIcon;
