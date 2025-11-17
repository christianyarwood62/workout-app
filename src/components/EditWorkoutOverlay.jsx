import { useEffect, useState } from "react";
import { useTemplates } from "../contexts/TemplatesContext";
import EditTemplateExercise from "./EditTemplateExercise";

function EditWorkoutOverlay() {
  const { isEditTemplateOverlayOpen, selectedTemplateToEdit, dispatch } =
    useTemplates("");
  const [editableTemplate, setEditableTemplate] = useState(
    selectedTemplateToEdit
  );

  const templateIdToEdit = selectedTemplateToEdit.id;
  console.log(templateIdToEdit);

  // console.log(editableTemplate);

  if (!isEditTemplateOverlayOpen) return null;

  function handleCloseEditTemplateButton() {
    dispatch({
      type: "toggleOverlay",
      payload: "isEditTemplateOverlayOpen",
    });
  }

  return (
    <div
      onClick={() =>
        dispatch({
          type: "toggleOverlay",
          payload: "isEditTemplateOverlayOpen",
        })
      }
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
                dispatch({
                  type: "template/saveEditedTemplate",
                  payload: "test",
                })
              }
            >
              ☑️ Save
            </button>
          </div>
          <div>
            {selectedTemplateToEdit?.exercises.map((exercise, i) => (
              <EditTemplateExercise
                exercise={exercise}
                key={crypto.randomUUID()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWorkoutOverlay;
