import { useTemplates } from "../contexts/TemplatesContext";

function TemplateExercise({ name, sets, reps }) {
  const { deleteExerciseFromTemplate } = useTemplates();

  return (
    <div className="exercise-in-template">
      <div className="icon-top-area">
        <button onClick={deleteExerciseFromTemplate} className="button icon-x">
          🗑️
        </button>
      </div>
      <div className="icon-lower-area">
        <p className="text-in-icon">{name}</p>
        <p className="text-in-icon">Sets: {sets}</p>
        <p className="text-in-icon">Reps: {reps}</p>
      </div>
    </div>
  );
}

export default TemplateExercise;
