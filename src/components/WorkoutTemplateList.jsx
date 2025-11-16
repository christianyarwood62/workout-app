import { useTemplates } from "../contexts/TemplatesContext";
import WorkoutTemplateIcon from "./WorkoutTemplateIcon";

function WorkoutTemplateList() {
  const { templates } = useTemplates();

  if (templates.length === 0) return null;

  if (templates.length > 0)
    return (
      <div className="workout-template-container">
        {templates?.map((template) => (
          <WorkoutTemplateIcon
            template={template}
            id={template.id}
            displayNumber={template.templateCounter}
            key={`template-${template.templateCounter}`}
          />
        ))}
      </div>
    );
}

export default WorkoutTemplateList;
