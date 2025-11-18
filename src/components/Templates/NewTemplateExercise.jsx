import { useTemplates } from "../../contexts/TemplatesContext";

function NewTemplateExercise({ value }) {
  const { dispatch } = useTemplates();

  return (
    <div className="exercise-in-template">
      <div className="icon-top-area">
        <button
          onClick={() =>
            dispatch({
              type: "template/deleteExerciseFromTemplate",
              payload: value.exerciseName,
            })
          }
          className="button icon-x"
        >
          🗑️
        </button>
      </div>
      <div className="icon-lower-area">
        <p className="text-in-icon">{value.exerciseName}</p>
        <p className="text-in-icon">Sets: {value.sets}</p>
        <p className="text-in-icon">Reps: {value.reps}</p>
      </div>
    </div>
  );
}

export default NewTemplateExercise;
