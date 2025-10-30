import { useExercises } from "../contexts/ExercisesContext";

function WorkoutTemplateList() {
  const { workoutTemplates } = useExercises();

  if (workoutTemplates.length === 0)
    return (
      <div className="element-container">No templates to show, add some!</div>
    );

  if (workoutTemplates.length > 0)
    return (
      <div className="workout-template-container">
        {workoutTemplates.map((template, i) => (
          <div
            className=" workout-template-icon"
            key={`template-${workoutTemplates[i]} `}
          >
            <h3>Template {i}</h3>
            {template.map((exercise) => (
              <p>💪 {exercise}</p>
            ))}
          </div>
        ))}
      </div>
    );
}

export default WorkoutTemplateList;
