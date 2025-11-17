import { useTemplates } from "../contexts/TemplatesContext";
import EditButton from "./EditButton";
import { Trash } from "lucide-react";

function WorkoutTemplateIcon({ template }) {
  const { toggleEditWorkoutForm, handleDeleteTemplate } = useTemplates();

  return (
    <div className="workout-template-icon">
      <div className="icon-buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteTemplate(template.id);
          }}
          className="delete-button"
        >
          <p>Delete</p>
          <Trash width={"18px"} />
        </button>

        <EditButton
          className="icon-edit-button button"
          onClick={() => toggleEditWorkoutForm(template.id)}
        />
      </div>
      <div className="template-icon-header">
        <h3>{template.templateName}</h3>
      </div>
      <div className="workout-template-icon-exercises">
        {template.exercises.map((exercise) => (
          <div key={crypto.randomUUID()}>
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
