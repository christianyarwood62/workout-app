import { useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import NewTemplateExercise from "./NewTemplateExercise";

function NewTemplateExercises() {
  const [templateName, setTemplateName] = useState("");
  const { handleToggleTemplateFormOverlay, handleSaveTemplate, exercises } =
    useTemplates();

  return (
    <form
      className="flex-column"
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveTemplate(templateName);
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
          <NewTemplateExercise key={exercise.id} value={exercise} />
        ))}
        <button
          type="button"
          className="add-template-exercise-button button"
          onClick={handleToggleTemplateFormOverlay}
        >
          <p>Add an exercise</p>
        </button>
      </div>
      <div className="save-template-button-container">
        <button type="submit" className="button save-template-button">
          Save template
        </button>
      </div>
    </form>
  );
}

export default NewTemplateExercises;
