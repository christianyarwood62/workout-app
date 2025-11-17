import { useState } from "react";
import { useTemplates } from "../contexts/TemplatesContext";
import TemplateExercise from "./TemplateExercise";

function TemplateExercises() {
  const [templateName, setTemplateName] = useState("");
  const { handleToggleTemplateFormOverlay, handleSaveTemplate, exercises } =
    useTemplates();

  return (
    <div className="flex-column">
      <div>
        <input
          type="test"
          required
          placeholder="Template Name..."
          onChange={(e) => setTemplateName(e.target.value)}
        />
      </div>
      <div className="template-exercises ">
        {exercises.map((exercise) => (
          <TemplateExercise key={exercise.exerciseName} value={exercise} />
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
          onClick={(e) => {
            e.preventDefault();
            handleSaveTemplate(templateName);
          }}
        >
          Save template
        </button>
      </div>
    </div>
  );
}

export default TemplateExercises;
