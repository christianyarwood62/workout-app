import { useTemplates } from "../../contexts/TemplatesContext";
import NewTemplateExercises from "./NewTemplateExercises";

function NewTemplate() {
  const { handleShowingNewTemplate } = useTemplates();
  return (
    <div className="new-template-form">
      <button className="button" onClick={() => handleShowingNewTemplate()}>
        x
      </button>
      <h2>💪 Choose your exercises for this template</h2>
      <NewTemplateExercises />
    </div>
  );
}

export default NewTemplate;
