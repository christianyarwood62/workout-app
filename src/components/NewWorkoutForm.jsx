import { useExercises } from "../contexts/ExercisesContext";
import TemplateExercises from "./TemplateExercises";

function NewWorkoutForm() {
  const { dispatch } = useExercises();

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
