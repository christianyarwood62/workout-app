import { useExercises } from "../contexts/ExercisesContext";
import TemplateExercise from "./TemplateExercise";

function TemplateExercises() {
  const {
    handleToggleTemplateFormOverlay,
    selectedExercisesForTemplate,
    handleSaveTemplate,
    deleteExerciseFromTemplate,
  } = useExercises();

  return (
    <div className="flex-columns">
      <div className="template-exercises ">
        {selectedExercisesForTemplate?.map((exercise) => (
          <TemplateExercise key={exercise}>{exercise}</TemplateExercise>
        ))}
        <button
          className="add-template-exercise-button button"
          onClick={handleToggleTemplateFormOverlay}
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
