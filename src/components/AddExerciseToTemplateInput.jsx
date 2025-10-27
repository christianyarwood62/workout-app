import { useExercises } from "../contexts/ExercisesContext";
import { useWorkout } from "../contexts/WorkoutContext";

function AddExercisetoTemplateInput({}) {
  const { isAddExerciseInputOpen } = useWorkout();
  const { exercises } = useExercises();

  function handleSetIsAddExerciseOpen(e) {
    e.preventDefault();
    onSetIsAddExerciseInputOpen(false);
  }

  return (
    <div>
      {" "}
      {isAddExerciseInputOpen ? (
        <div>
          <button
          // onClick={(e) => {
          //   handleSetIsAddExerciseOpen(e);
          //   onSetChosenExerciseList([]);
          // }}
          >
            Cancel new template
          </button>
          <select
          // value={chosenExercise}
          // onChange={(e) => onHandleChosenExercise(e)}
          >
            <option>Choose an exercise</option>
            {exercises.map((exercise, i) => (
              <option key={`exercise-${i}`}>{exercise.name}</option>
            ))}
          </select>
          {/* <button
            onClick={(e) => {
              onAddChosenExercisesList(e, { chosenExercise });
              onSetIsAddExerciseInputOpen(true);
            }}
          >
            Add
          </button> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AddExercisetoTemplateInput;
