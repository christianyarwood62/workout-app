import { useTemplates } from "../contexts/TemplatesContext";
import WorkoutTemplateIcon from "./WorkoutTemplateIcon";

function WorkoutTemplateList() {
  const { workoutTemplates } = useTemplates();

  if (workoutTemplates.length === 0) return null;

  if (workoutTemplates.length > 0)
    return (
      <div className="workout-template-container">
        {workoutTemplates.map((template) => (
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
