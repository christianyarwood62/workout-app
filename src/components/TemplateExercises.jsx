import { useTemplates } from "../contexts/TemplatesContext";
import TemplateExercise from "./TemplateExercise";

function TemplateExercises() {
  const { handleToggleTemplateFormOverlay, handleSaveTemplate, exercises } =
    useTemplates();

  return (
    <div className="flex-columns">
      <div className="template-exercises ">
        {exercises.map((exercise) => (
          <TemplateExercise key={exercise.exerciseName} value={exercise} />
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
