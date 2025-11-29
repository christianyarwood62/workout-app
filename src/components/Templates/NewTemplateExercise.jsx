import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./NewTemplateExercise.module.css";

import { X } from "lucide-react";

function NewTemplateExercise({ proposedExercise }) {
  const { deleteExerciseFromNewTemplate } = useTemplates();

  return (
    <div className={`information-row ${styles.exerciseRow}`}>
      <p className={styles.exerciseTitle}>{proposedExercise.exerciseName}</p>
      <p className={`${styles.exerciseText} ${styles.sets}`}>
        {proposedExercise.sets}
      </p>
      <p className={`${styles.exerciseText} ${styles.reps}`}>
        {proposedExercise.reps}
      </p>

      <button
        type="button"
        onClick={() => deleteExerciseFromNewTemplate(proposedExercise.id)}
        className={styles.deleteButton}
      >
        <X className={`${styles.xIcon} ${styles.removebtn}`} />
      </button>
    </div>
  );
}

export default NewTemplateExercise;
