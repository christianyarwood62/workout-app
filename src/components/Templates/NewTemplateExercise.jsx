import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./NewTemplateExercise.module.css";

import { X } from "lucide-react";

function NewTemplateExercise({ proposedExercise }) {
  const { deleteExerciseFromNewTemplate } = useTemplates();

  return (
    <div className={styles["exercise-in-template"]}>
      <div className={styles.IconTopArea}>
        <button
          type="button"
          onClick={() => deleteExerciseFromNewTemplate(proposedExercise.id)}
          className={styles.deleteButton}
        >
          <X className={styles.xIcon} />
        </button>
      </div>
      <div className={styles.iconLowerArea}>
        <p className={styles.exerciseTitle}>{proposedExercise.exerciseName}</p>
        <p className={styles.exerciseText}>Sets: {proposedExercise.sets}</p>
        <p className={styles.exerciseText}>Reps: {proposedExercise.reps}</p>
      </div>
    </div>
  );
}

export default NewTemplateExercise;
