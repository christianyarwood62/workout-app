import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./AddTemplateButton.module.css";

function AddTemplateButton() {
  const { templates, handleShowingNewTemplate, showingNewTemplate } =
    useTemplates();

  return (
    <>
      {!showingNewTemplate && (
        <div className={styles["add-template-button"]}>
          <button className="button" onClick={() => handleShowingNewTemplate()}>
            {templates.length === 0 ? (
              <h3>Create your first template! 🏋️‍♀️</h3>
            ) : (
              <h3>Add another template!</h3>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default AddTemplateButton;
