import { useExercises } from "../contexts/ExercisesContext";

function TemplateExerciseErrorComponent() {
  const { handleToggleTemplateExerciseErrorOpen } = useExercises();

  return (
    <div
      onClick={handleToggleTemplateExerciseErrorOpen}
      className="overlay-backdrop "
    >
      <div onClick={(e) => e.stopPropagation()} className="element-container">
        This exercise is already in the component, choose a different exercise!
      </div>
    </div>
  );
}

export default TemplateExerciseErrorComponent;
