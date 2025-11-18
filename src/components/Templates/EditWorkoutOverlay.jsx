import { useReducer, useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import EditTemplateExercise from "../EditTemplateExercise";

const tempInitialState = {
  exercises: [
    {
      exerciseName: "",
      id: "",
      reps: null,
      sets: null,
    },
  ],
  id: "",
  templateName: "",
};

function EditWorkoutOverlay() {
  const {
    isEditTemplateOverlayOpen,
    selectedTemplateToEdit,
    handleSaveEditedTemplate,
    handleCloseEditTemplateButton,
  } = useTemplates();

  const [editableTemplate, setEditableTemplate] = useState(
    selectedTemplateToEdit
  );

  const [{ exercises, id, templateName }, dispatch] = useReducer(
    useReducer,
    tempInitialState
  );

  console.log(selectedTemplateToEdit);

  if (!isEditTemplateOverlayOpen) return null;

  return (
    <div onClick={handleCloseEditTemplateButton} className="overlay-backdrop">
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <form>
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
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("template saved");
                }}
              >
                ☑️ Save
              </button>
            </div>
            <div>
              <h3>{selectedTemplateToEdit.templateName}</h3>
              {selectedTemplateToEdit?.exercises.map((exercise, i) => (
                <div key={exercise.id} className="flex-row">
                  <span style={{ color: "white" }}>Delete</span>
                  <p>{exercise.exerciseName}</p>
                  <input
                    defaultValue={exercise.sets}
                    // value={setsInput || exercise.sets}
                    onChange={(e) => {
                      setSetsInput((cur) => {
                        const newArray = [...cur];
                        newArray[i] = e.target.value;
                        return newArray;
                      });
                    }}
                    // value={setsInput || exercise.sets}
                    style={{ width: "50px" }}
                  />
                  <input
                    defaultValue={exercise.reps}
                    style={{ width: "50px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditWorkoutOverlay;
