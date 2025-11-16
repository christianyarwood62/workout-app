import { useTemplates } from "../contexts/TemplatesContext";

function TemplateExerciseErrorComponent() {
  const { handleToggleTemplateExerciseErrorOpen } = useTemplates();

  return (
    <div
      onClick={handleToggleTemplateExerciseErrorOpen}
      className="overlay-backdrop "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        This exercise is already in the component, choose a different exercise!
      </div>
    </div>
  );
}

export default TemplateExerciseErrorComponent;
