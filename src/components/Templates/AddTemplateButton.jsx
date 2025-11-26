import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./AddTemplateButton.module.css";

function AddTemplateButton() {
  const { templates, handleShowingNewTemplate, showingNewTemplate } =
    useTemplates();

  return (
    <>
      {!showingNewTemplate && (
        <div className={styles["add-template-container"]}>
          <button
            className={styles.addTemplateButton}
            onClick={() => handleShowingNewTemplate()}
          >
            {templates.length === 0 ? (
              <>Create your first template! 🏋️‍♀️</>
            ) : (
              <>Add another template!</>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default AddTemplateButton;
