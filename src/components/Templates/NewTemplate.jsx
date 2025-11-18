import { useTemplates } from "../../contexts/TemplatesContext";
import NewTemplateExercises from "./NewTemplateExercises";

function NewTemplate() {
  const { toggleNewTemplateExerciseOverlay } = useTemplates();

  return (
    <div className="new-template-form">
      <button className="button" onClick={toggleNewTemplateExerciseOverlay}>
        x
      </button>
      <h2>💪 Choose your exercises for this template</h2>
      <NewTemplateExercises />
    </div>
  );
}

export default NewTemplate;
