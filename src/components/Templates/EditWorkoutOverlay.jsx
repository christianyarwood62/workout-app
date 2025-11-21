import { useEffect, useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import EditExercise from "./EditExercise";

import styles from "./EditWorkoutOverlay";

function EditWorkoutOverlay() {
  const [newTemplateName, setNewTemplateName] = useState("");
  const [editedExercises, setEditedExercises] = useState([]);
  // const [editedExercises, setEditedExercises] = useState({
  //   exerciseName: "",
  //   id: "",
  //   reps: "",
  //   sets: "",
  // });

  function handleEditExercise(updatedExercise) {
    setEditedExercises((cur) =>
      cur.map((exerciseInState) =>
        exerciseInState.id === updatedExercise.id
          ? updatedExercise
          : exerciseInState
      )
    );
  }

  const {
    editingTemplate,
    handleCloseEditTemplateButton,
    handleSaveEditedTemplate,
  } = useTemplates();

  useEffect(() => {
    setEditedExercises(editingTemplate.exercises);
  }, [editingTemplate.exercises]);

  return (
    <div
      onClick={handleCloseEditTemplateButton}
      className={styles["overlay-backdrop"]}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveEditedTemplate(
              newTemplateName,
              editedExercises,
              editingTemplate.id
            );
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
              {editedExercises.map((exercise) => (
                <EditExercise
                  onEditExercise={handleEditExercise}
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
