import { useExercises } from "../contexts/ExercisesContext";

function AddWorkoutTemplateButton() {
  const { isCreateWorkoutTemplateOpen, workoutTemplates, dispatch } =
    useExercises();

  return (
    <>
      {!isCreateWorkoutTemplateOpen && (
        <div className="add-template-button">
          <button
            className="button"
            onClick={() =>
              dispatch({
                type: "toggleOverlay",
                payload: "isCreateWorkoutTemplateOpen",
              })
            }
          >
            {workoutTemplates.length === 0 ? (
              <h3>Create your first template! 🏋️‍♀️</h3>
            ) : (
              <h3>Add another template!</h3>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default AddWorkoutTemplateButton;
