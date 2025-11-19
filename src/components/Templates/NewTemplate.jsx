import { useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import NewTemplateExercise from "./NewTemplateExercise";
import AddExerciseTile from "./AddExerciseTile";

function NewTemplate() {
  const [templateName, setTemplateName] = useState("");

  const { handleSaveTemplate, exercises, handleShowingNewTemplate } =
    useTemplates();

  return (
    <div className="new-template-form">
      <button className="button" onClick={() => handleShowingNewTemplate()}>
        x
      </button>
      <h2>💪 Choose your exercises for this template</h2>
      <form
        className="flex-column"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveTemplate(templateName, exercises);
          handleShowingNewTemplate();
        }}
      >
        <div>
          <input
            required
            placeholder="Template Name..."
            onChange={(e) => setTemplateName(e.target.value)}
          />
        </div>
        <div className="template-exercises">
          {exercises.map((exercise) => (
            <NewTemplateExercise
              key={exercise.id}
              proposedExercise={exercise}
            />
          ))}
          <AddExerciseTile />
        </div>
        <div className="save-template-button-container">
          <button type="submit" className="button save-template-button">
            Save template
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTemplate;
