import { useState } from "react";
import { useWorkout } from "../contexts/WorkoutContext";

function NewWorkoutForm({
  exercises,
  onAddChosenExercisesList,
  chosenExercise,
  onHandleChosenExercise,
  onSetIsAddExerciseInputOpen,
  onSetChosenExerciseList,
  onShowCreateWorkoutTemplate,
}) {
  const {
    isAddExerciseInputOpen,
    handleShowAddExerciseSelectBoxes,
    handleShowNewWorkoutForm,
  } = useWorkout();

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
          {isAddExerciseInputOpen ? (
            ""
          ) : (
            <button onClick={handleShowAddExerciseSelectBoxes}>
              Add an exercise
            </button>
          )}
          {/* <AddExercisetoTemplateInput
            exercises={exercises}
            chosenExercise={chosenExercise}
            onAddChosenExercisesList={onAddChosenExercisesList}
            onHandleChosenExercise={onHandleChosenExercise}
            isAddExerciseInputOpen={isAddExerciseInputOpen}
            onSetIsAddExerciseInputOpen={onSetIsAddExerciseInputOpen}
            onSetChosenExerciseList={onSetChosenExerciseList}
          /> */}
        </form>
      </div>
    </div>
  );
}

export default NewWorkoutForm;
