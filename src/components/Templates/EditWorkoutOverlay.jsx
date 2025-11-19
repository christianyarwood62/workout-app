import { useReducer, useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import EditTemplateExercise from "../EditTemplateExercise";
import EditExercise from "./EditExercise";

// const tempInitialState = {
//   exercises: [
//     {
//       exerciseName: "",
//       id: "",
//       reps: "",
//       sets: "",
//     },
//   ],
//   id: "",
//   templateName: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "editedTemplate/updateSets": {
//       return {
//         ...state,
//         exercises,
//       };
//     }

//     default:
//       return state;
//   }
// }

function EditWorkoutOverlay() {
  const [newTemplateName, setNewTemplateName] = useState("");
  const {
    editingTemplate,
    handleCloseEditTemplateButton,
    handleSaveEditedTemplate,
  } = useTemplates();

  // const [{ exercises, id, templateName }, dispatch] = useReducer(
  //   reducer,
  //   tempInitialState
  // );

  return (
    <div onClick={handleCloseEditTemplateButton} className="overlay-backdrop">
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveEditedTemplate(newTemplateName, editingTemplate.id);
          }}
        >
          <div className="workout-template-icon">
            <div className="icon-buttons">
              <button
                onClick={handleCloseEditTemplateButton}
                className="icon-x button"
              >
                X
              </button>
              <button className="icon-edit-button button" type="submit">
                ☑️ Save
              </button>
            </div>
            <div>
              <input
                defaultValue={editingTemplate.templateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
              />
              {editingTemplate.exercises.map((exercise) => (
                <EditExercise
                  templateName={editingTemplate.templateName}
                  exercise={exercise}
                  key={exercise.id}
                />
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditWorkoutOverlay;
