import { useExercises } from "../contexts/ExercisesContext";
import AddExercisetoTemplateInput from "./AddExerciseToTemplateInput";
import TemplateExercises from "./TemplateExercises";

function NewWorkoutForm() {
  const {
    isAddExerciseInputOpen,
    handleShowAddExerciseSelectBoxes,
    handleShowNewWorkoutForm,
  } = useExercises();

  return (
    <div className="new-template-form">
      <button
        className="button"
        onClick={() => {
          handleShowNewWorkoutForm();
          // onSetIsAddExerciseInputOpen(false);
          // onSetChosenExerciseList([]);
        }}
      >
        x
      </button>
      <h2>💪 Choose your exercises for this template</h2>
      <form>
        {/* <button
          className="button"
          onClick={(e) => handleShowAddExerciseSelectBoxes(e, true)}
        >
          Choose the exercises
        </button> */}
        {/* <AddExercisetoTemplateInput /> */}
        <TemplateExercises />
      </form>
    </div>
  );
}

export default NewWorkoutForm;
