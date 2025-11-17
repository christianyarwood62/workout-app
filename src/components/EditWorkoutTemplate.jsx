import { useTemplates } from "../contexts/TemplatesContext";

function EditWorkoutTemplate() {
  const {
    isEditTemplateOverlayOpen,
    setTemplateNameInput,
    templateNameInput,
    saveNewTemplate,
    dispatch,
    templates,
    selectedTemplateIDToEdit,
  } = useTemplates();

  const selectedTemplateToEdit = templates.find(
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
