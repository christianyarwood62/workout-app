import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./AddTemplateButton.module.css";

function AddTemplateButton() {
  const { templates, handleShowingNewTemplate } = useTemplates();

  // return (
  //   <div className={styles["add-template-container"]}>
  //     {templates.length === 0 ? (
  //       <button className="text-btn" onClick={() => handleShowingNewTemplate()}>
  //         Create your first template! 🏋️‍♀️
  //       </button>
  //     ) : (
  //       <button className="text-btn" onClick={() => handleShowingNewTemplate()}>
  //         Add another template!
  //       </button>
  //     )}
  //   </div>
  // );
}

export default AddTemplateButton;
