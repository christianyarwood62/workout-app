import { useExercises } from "../contexts/ExercisesContext";

function WorkoutTemplateIcon() {
  const { workoutTemplates } = useExercises();

  return (
    <div className="workout-template-container">
      {workoutTemplates.map((template, i) => (
        <div
          className="workout-template-icon"
          key={`template-${workoutTemplates[i]} `}
        >
          <h3>Template {i}</h3>
          <div className="workout-template-icon-exercises">
            {template.map((exercise) => (
              <p key={exercise}>💪 {exercise}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkoutTemplateIcon;
