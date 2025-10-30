import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateIcon from "./WorkoutTemplateIcon";

function WorkoutTemplateList() {
  const { workoutTemplates } = useExercises();

  if (workoutTemplates.length === 0)
    return (
      <div className="element-container">No templates to show, add some!</div>
    );

  if (workoutTemplates.length > 0) return <WorkoutTemplateIcon />;
}

export default WorkoutTemplateList;
