import { useReducer, useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import EditTemplateExercise from "../EditTemplateExercise";

const tempInitialState = {
  exercises: [
    {
      exerciseName: "",
      id: "",
      reps: "",
      sets: "",
    },
  ],
  id: "",
  templateName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "editedTemplate/updateSets": {
      const editedExercises = state.exercises.map((exercise, i) => {
        if (i === action.payload.index)
          return { ...exercise, sets: action.payload.sets };

        return exercise;
      });
      console.log(state);
      return {
        ...state,
        exercises: editedExercises,
      };
    }

    default:
      return state;
  }
}

function EditWorkoutOverlay() {
  const {
    selectedTemplateToEdit,
    handleSaveEditedTemplate,
    handleCloseEditTemplateButton,
  } = useTemplates();

  const selectedTemplateId = selectedTemplateToEdit.id;

  function initializer() {
    return {
      exercises: selectedTemplateToEdit.exercises,
      id: selectedTemplateToEdit.id,
      templateName: selectedTemplateToEdit.templateName,
    };
  }

  const [{ exercises }, dispatch] = useReducer(
    reducer,
    tempInitialState,
    initializer
  );

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
              <input defaultValue={selectedTemplateToEdit.templateName} />
              {selectedTemplateToEdit?.exercises.map((exercise, i) => (
                <div key={exercise.id} className="flex-row">
                  <span style={{ color: "white" }}>Delete</span>
                  <p>{exercise.exerciseName}</p>
                  <input
                    defaultValue={exercise.sets}
                    onChange={(e) =>
                      dispatch({
                        type: "editedTemplate/updateSets",
                        payload: { sets: Number(e.target.value), index: i },
                      })
                    }
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
