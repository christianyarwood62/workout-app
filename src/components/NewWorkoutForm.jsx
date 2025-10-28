import { useExercises } from "../contexts/ExercisesContext";
import AddExercisetoTemplateInput from "./AddExerciseToTemplateInput";

function NewWorkoutForm() {
  const {
    isAddExerciseInputOpen,
    handleShowAddExerciseSelectBoxes,
    handleShowNewWorkoutForm,
  } = useExercises();

  return (
    <div className="element-container">
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
      <h2>New Workout Template!</h2>
      <form>
        <button onClick={(e) => handleShowAddExerciseSelectBoxes(e, true)}>
          Choose the exercises
        </button>
        <AddExercisetoTemplateInput />
      </form>
    </div>
  );
}

export default NewWorkoutForm;
