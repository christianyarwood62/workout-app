import { useTemplates } from "../../contexts/TemplatesContext";
import TemplateListIcon from "./TemplateListIcon";

import styles from "./TemplateList.module.css";

function TemplateList() {
  const { templates } = useTemplates();

  return (
    <div className={`${styles.rightMiddle} template-container`}>
      <h2 className={styles.routinesHeader}>Your Routines</h2>
      {templates.length === 0 ? (
        <div>
          <p>logo</p>
          <p>No Saved Templates yet</p>
          <p>Create and save your first Routine</p>
        </div>
      ) : (
        templates?.map((template) => (
          <TemplateListIcon template={template} key={template.id} />
        ))
      )}
    </div>
  );
}

export default TemplateList;
