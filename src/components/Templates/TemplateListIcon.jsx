import { useTemplates } from "../../contexts/TemplatesContext";
import EditButton from "./EditButton";
import { Trash } from "lucide-react";

import styles from "./TemplateListIcon.module.css";

function TemplateListIcon({ template }) {
  const { handleShowEditTemplate, handleDeleteTemplate } = useTemplates();

  return (
    <div className={styles["workout-template-icon"]}>
      <div className={styles["icon-buttons"]}>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteTemplate(template.id);
          }}
          className={styles["delete-button"]}
        >
          <p>Delete</p>
          <Trash width={"18px"} />
        </button>

        <EditButton
          className={`${styles["icon-edit-button"]} ${"button"}`}
          onClick={() => handleShowEditTemplate(template)}
        />
      </div>
      <div className="template-icon-header">
        <h3>{template.templateName}</h3>
      </div>
      <div className={styles["workout-template-icon-exercises"]}>
        {template.exercises.map((exercise) => (
          <div key={exercise.id}>
            <p>
              💪 {exercise.exerciseName}: {exercise.sets} Sets x {exercise.reps}
              reps
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateListIcon;
