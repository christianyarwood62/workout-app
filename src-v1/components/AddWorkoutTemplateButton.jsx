import { useExercises } from "../contexts/ExercisesContext";

function AddWorkoutTemplateButton() {
  const {
    handleShowNewWorkoutForm,
    workoutTemplates,
    showCreateWorkoutTemplate,
  } = useExercises();

  return (
    <>
      {!showCreateWorkoutTemplate && (
        <div className="add-template-button">
          <button className="button" onClick={() => handleShowNewWorkoutForm()}>
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
