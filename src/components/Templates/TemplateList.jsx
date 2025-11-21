import { useTemplates } from "../../contexts/TemplatesContext";
import TemplateListIcon from "./TemplateListIcon";

import styles from "./TemplateList.module.css";

function TemplateList() {
  const { templates } = useTemplates();

  if (templates.length === 0) return null;

  if (templates.length > 0)
    return (
      <div className={styles["workout-template-container"]}>
        {templates?.map((template) => (
          <TemplateListIcon template={template} key={template.id} />
        ))}
      </div>
    );
}

export default TemplateList;
