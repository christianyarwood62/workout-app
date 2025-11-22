import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./NewTemplateExercise.module.css";

function NewTemplateExercise({ proposedExercise }) {
  const { deleteExerciseFromNewTemplate } = useTemplates();

  return (
    <div className={styles["exercise-in-template"]}>
      <div className="icon-top-area">
        <button
          type="button"
          onClick={() => deleteExerciseFromNewTemplate(proposedExercise.id)}
          className="button icon-x"
        >
          🗑️
        </button>
      </div>
      <div className="icon-lower-area">
        <p className="text-in-icon">{proposedExercise.exerciseName}</p>
        <p className="text-in-icon">Sets: {proposedExercise.sets}</p>
        <p className="text-in-icon">Reps: {proposedExercise.reps}</p>
      </div>
    </div>
  );
}

export default NewTemplateExercise;
