import { useExercises } from "../contexts/ExercisesContext";

function TemplateExercises() {
  const { handleToggleOverlay, selectedExercisesForTemplate } = useExercises();

  const context = useExercises();
  console.log("context in TemplateExercise:", context);

  return (
    <div className="templates-exercise">
      {selectedExercisesForTemplate?.map((element) => (
        <div className="add-template-exercise-button button">{element}</div>
      ))}
      <button
        className="add-template-exercise-button button"
        onClick={handleToggleOverlay}
      >
        Add an exercise
      </button>
    </div>
  );
}

export default TemplateExercises;
