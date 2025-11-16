import { useTemplates } from "../contexts/TemplatesContext";
import TemplateExercise from "./TemplateExercise";

function TemplateExercises() {
  const {
    handleToggleTemplateFormOverlay,
    selectedExercisesForTemplate,
    handleSaveTemplate,
    exercises,
  } = useTemplates();

  console.log(exercises);
  return (
    <div className="flex-columns">
      <div className="template-exercises ">
        {exercises?.map((exercise) => (
          <TemplateExercise
            name={exercise.exerciseName}
            key={exercise.exerciseName}
            sets={exercise.sets}
            reps={exercise.reps}
          />
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
