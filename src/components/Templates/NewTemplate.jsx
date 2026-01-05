import { useState } from "react";
import { useTemplates } from "../../contexts/TemplatesContext";
import NewTemplateExercise from "./NewTemplateExercise";

import styles from "./NewTemplate.module.css";
import { Dumbbell } from "lucide-react";

function NewTemplate() {
  const [templateName, setTemplateName] = useState("");
  const [showNewTemplateForm, setShowNewTemplateForm] = useState(false);

  const { handleSaveTemplate, exercises, handleShowingNewExerciseFrom } =
    useTemplates();

  return (
    <div className="template-container">
      <h2>💪 Current Template</h2>
      <p className={`small-text light-text ${styles.headerSupportText}`}>
        Add exercises and configure your own routine
      </p>
      <div className={styles["add-template-container"]}>
        {!showNewTemplateForm && (
          <button
            className={`text-btn ${styles.newRoutineBtn}`}
            disabled={showNewTemplateForm}
            onClick={() => setShowNewTemplateForm(true)}
          >
            Create a Routine
          </button>
        )}
      </div>
      {showNewTemplateForm && (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveTemplate(templateName, exercises);
            setTemplateName("");
          }}
        >
          <label htmlFor="RoutineName">Routine Name</label>
          <input
            name="routineName"
            required
            placeholder="e.g. Upper Body Strength"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />

          <div className={styles["template-exercises"]}>
            {exercises.length > 0 ? (
              <div className={styles.listContainer}>
                <div
                  className={`${styles.exercisesHeader} information-row template-column-headers`}
                >
                  <p>Exercise</p>
                  <p>Sets</p>
                  <p>Reps</p>
                  <div className={styles.emptySpace}></div>
                </div>
                {exercises.map((exercise) => (
                  <div className={styles.list}>
                    <NewTemplateExercise
                      key={exercise.id}
                      proposedExercise={exercise}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.list}>
                <Dumbbell style={{ color: "grey" }} />
                <p className="small-text light-text">No exercises added yet</p>
                <p className="small-text light-text">
                  Click "Add Exercise" to start building your Routine
                </p>
              </div>
            )}
          </div>

          <div className={styles.buttons}>
            <button
              type="button"
              className="accent-text-btn"
              onClick={() => handleShowingNewExerciseFrom()}
            >
              Add an exercise
            </button>

            <button type="submit" className="text-btn">
              Save template
            </button>
          </div>
        </form>
      )}
    </div>
  );

  // : (
  //   <AddTemplateButton />
  // );
}

export default NewTemplate;
