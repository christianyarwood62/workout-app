import { useTemplates } from "../contexts/TemplatesContext";
import TemplateExercise from "./TemplateExercise";

function TemplateExercises() {
  const {
    handleToggleTemplateFormOverlay,
    selectedExercisesForTemplate,
    handleSaveTemplate,
  } = useTemplates();

  return (
    <div className="flex-columns">
      <div className="template-exercises ">
        {selectedExercisesForTemplate?.map((exercise) => (
          <TemplateExercise value={exercise} key={exercise}>
            {exercise}
            <p>Sets</p>
            <p>Reps</p>
          </TemplateExercise>
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
