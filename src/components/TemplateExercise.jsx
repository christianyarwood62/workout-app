import { useExercises } from "../contexts/ExercisesContext";

function TemplateExercise({ children }) {
  const { deleteExerciseFromTemplate } = useExercises();

  return (
    <div className="exercise-in-template">
      <div className="icon-top-area">
        <button onClick={deleteExerciseFromTemplate} className="button icon-x">
          X
        </button>
      </div>
      <div className="icon-lower-area">
        <p className="text-in-icon">{children}</p>
      </div>
    </div>
  );
}

export default TemplateExercise;
