import { useEffect, useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateIcon from "./WorkoutTemplateIcon";

function EditWorkoutTemplate() {
  const {
    isEditTemplateOverlayOpen,
    setIsEditTemplateOverlayOpen,
    // selectedTemplateToEdit,
    setTemplateNameInput,
    templateNameInput,
    saveNewTemplate,
    dispatch,
    workoutTemplates,
    selectedTemplateIDToEdit,
    setWorkoutTemplates,
  } = useExercises();

  const selectedTemplateToEdit = workoutTemplates.find(
    (template) => template.id === selectedTemplateIDToEdit
  );

  if (!isEditTemplateOverlayOpen) return null;

  function setNewNameForTemplate(e) {
    const newName = e.target.value;
    setTemplateNameInput(newName);
  }

  function handleCloseEditTemplateButton() {
    dispatch({
      type: "toggleOverlay",
      payload: "isEditTemplateOverlayOpen",
    });
    setTemplateNameInput("");
  }

  return (
    <div
      onClick={() =>
        dispatch({
          type: "toggleOverlay",
          payload: "isEditTemplateOverlayOpen",
        })
      }
      // onClick={() => setIsEditTemplateOverlayOpen(!isEditTemplateOverlayOpen)}
      className="overlay-backdrop"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <div className="workout-template-icon">
          <div className="icon-buttons">
            <button
              onClick={handleCloseEditTemplateButton}
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
            value={templateNameInput || selectedTemplateToEdit?.workoutName}
            onChange={setNewNameForTemplate}
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
