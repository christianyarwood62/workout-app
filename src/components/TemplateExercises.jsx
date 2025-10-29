import { useExercises } from "../contexts/ExercisesContext";

function TemplateExercises() {
  const {
    handleToggleOverlay,
    selectedExercisesForTemplate,
    handleSaveTemplate,
    deleteExerciseFromTemplate,
  } = useExercises();

  return (
    <div className="flex-columns">
      <div className="template-exercises ">
        {selectedExercisesForTemplate?.map((exercise) => (
          <div className="exercise-in-template">
            <div className="icon-top-area">
              <button
                onClick={deleteExerciseFromTemplate}
                class="button icon-x"
              >
                X
              </button>
            </div>
            <div className="icon-lower-area">
              <p className="text-in-icon">{exercise}</p>
            </div>
          </div>
        ))}
        <button
          className="add-template-exercise-button button"
          onClick={handleToggleOverlay}
        >
          <p>Add an exercise</p>
        </button>
      </div>
      <div className="save-template-button-container">
        <button
          className="button save-template-button"
          onClick={handleSaveTemplate}
        >
          Save template
        </button>
      </div>
    </div>
  );
}

export default TemplateExercises;
