import { useExercises } from "../contexts/ExercisesContext";
import AddExercisetoTemplateInput from "./AddExerciseToTemplateInput";

function NewWorkoutForm() {
  const {
    isAddExerciseInputOpen,
    handleShowAddExerciseSelectBoxes,
    handleShowNewWorkoutForm,
  } = useExercises();

  return (
    <div className="container">
      <div>
        <button
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
          <AddExercisetoTemplateInput
          // exercises={exercises}
          // chosenExercise={chosenExercise}
          // onAddChosenExercisesList={onAddChosenExercisesList}
          // onHandleChosenExercise={onHandleChosenExercise}
          // isAddExerciseInputOpen={isAddExerciseInputOpen}
          // onSetIsAddExerciseInputOpen={onSetIsAddExerciseInputOpen}
          // onSetChosenExerciseList={onSetChosenExerciseList}
          />
        </form>
      </div>
    </div>
  );
}

export default NewWorkoutForm;
