function WorkoutTemplateIcon({ value, index }) {
  return (
    <div className="workout-template-icon" key={`template-${index} `}>
      <h3>{`Template ${index}`}</h3>
      <div className="workout-template-icon-exercises">
        {value.map((exercise) => (
          <p key={exercise}>💪 {exercise}</p>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTemplateIcon;
