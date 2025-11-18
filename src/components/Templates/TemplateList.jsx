import { useTemplates } from "../../contexts/TemplatesContext";
import TemplateListIcon from "./TemplateListIcon";

function TemplateList() {
  const { templates } = useTemplates();

  if (templates.length === 0) return null;

  if (templates.length > 0)
    return (
      <div className="workout-template-container">
        {templates?.map((template) => (
          <TemplateListIcon
            template={template}
            displayNumber={template.templateCounter}
            key={template.id}
          />
        ))}
      </div>
    );
}

export default TemplateList;
