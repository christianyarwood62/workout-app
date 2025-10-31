import { useEffect, useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateIcon from "./WorkoutTemplateIcon";

function EditWorkoutTemplate() {
  const {
    isEditTemplateOverlayOpen,
    setIsEditTemplateOverlayOpen,
    selectedTemplateToEdit,
    setTemplateNameInput,
    saveNewTemplate,
    setSelectedTemplateToEdit,
    templateNameInput,
  } = useExercises();

  if (!isEditTemplateOverlayOpen) return null;

  return (
    <div
      onClick={() => setIsEditTemplateOverlayOpen(!isEditTemplateOverlayOpen)}
      className="overlay-backdrop"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <div className="workout-template-icon">
          <div className="icon-buttons">
            <button
              onClick={() =>
                setIsEditTemplateOverlayOpen(!isEditTemplateOverlayOpen)
              }
              className="icon-x button"
            >
              X
            </button>
            <button
              className="icon-edit-button button"
              onClick={() =>
                saveNewTemplate(selectedTemplateToEdit.id, templateNameInput)
              }
            >
              ☑️ Save
            </button>
          </div>
          <input
            placeholder={`${templateNameInput}...`}
            onChange={(e) => setTemplateNameInput(e.target.value)}
          ></input>
          <div className="workout-template-icon-exercises">
            {selectedTemplateToEdit?.exercises.map((exercise) => (
              <p key={exercise}>💪 {exercise}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWorkoutTemplate;
