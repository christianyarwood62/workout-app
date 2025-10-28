import { useExercises } from "../contexts/ExercisesContext";

function NewTemplateExerciseForm() {
  const {
    isTemplateOverlayOpen,
    handleToggleOverlay,
    exercises,
    handleAddExerciseToTemplate,
  } = useExercises();

  if (!isTemplateOverlayOpen) return null;

  return (
    <div onClick={handleToggleOverlay} className="overlay-backdrop">
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container"
      >
        <select
          onChange={handleAddExerciseToTemplate}
          className="button"
          // value={chosenExercise}
          // onChange={(e) => onHandleChosenExercise(e)}
        >
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
