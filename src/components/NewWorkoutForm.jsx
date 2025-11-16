import { useTemplates } from "../contexts/TemplatesContext";
import TemplateExercises from "./TemplateExercises";

function NewWorkoutForm() {
  const { dispatch } = useTemplates();

  return (
    <div className="new-template-form">
      <button
        className="button"
        onClick={() => {
          dispatch({
            type: "toggleOverlay",
            payload: "isCreateWorkoutTemplateOpen",
          });
        }}
      >
        x
      </button>
      <h2>💪 Choose your exercises for this template</h2>
      <TemplateExercises />
    </div>
  );
}

export default NewWorkoutForm;
