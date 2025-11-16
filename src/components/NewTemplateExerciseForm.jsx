import { useExercises } from "../contexts/ExercisesContext";
import { useTemplates } from "../contexts/TemplatesContext";

function NewTemplateExerciseForm() {
  const {
    isTemplateOverlayOpen,
    handleToggleTemplateFormOverlay,
    handleAddExerciseToTemplate,
  } = useTemplates();

  const { exercises } = useExercises();

  if (!isTemplateOverlayOpen) return null;

  return (
    <div onClick={handleToggleTemplateFormOverlay} className="overlay-backdrop">
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <select onChange={handleAddExerciseToTemplate} className="button">
          <option>Choose an exercise</option>
          {exercises.map((exercise, i) => (
            <option key={`exercise-${i}`}>{exercise.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default NewTemplateExerciseForm;
