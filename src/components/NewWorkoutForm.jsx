import { useState } from "react";

function NewWorkoutForm({
  exercises,
  onAddChosenExercisesList,
  chosenExercise,
  onHandleChosenExercise,
  onSetIsAddExerciseInputOpen,
  onSetChosenExerciseList,
  onShowCreateWorkoutTemplate,
}) {
  const [isAddExerciseInputOpen, setIsAddExerciseInputOpen] = useState(false);

  function handleShowAddExerciseSelectBoxes() {
    setIsAddExerciseInputOpen(true);
  }

  return (
    <div className="container">
      <div>
        <button
          onClick={() => {
            onShowCreateWorkoutTemplate();
            onSetIsAddExerciseInputOpen(false);
            onSetChosenExerciseList([]);
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
