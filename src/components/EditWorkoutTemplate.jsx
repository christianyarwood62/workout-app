import { useEffect, useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateIcon from "./WorkoutTemplateIcon";

function EditWorkoutTemplate() {
  const {
    isEditTemplateOverlayOpen,
    setIsEditTemplateOverlayOpen,
    selectedTemplateToEdit,
  } = useExercises();
  const [form, setForm] = useState(null);

  useEffect(
    function () {
      setForm(selectedTemplateToEdit);
    },
    [selectedTemplateToEdit]
  );
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
          </div>
          <h3>{`${form?.workoutName}`}</h3>
          <div className="workout-template-icon-exercises">
            {form?.exercises.map((exercise) => (
              <p key={exercise}>💪 {exercise}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWorkoutTemplate;
