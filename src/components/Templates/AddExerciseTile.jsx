import { useTemplates } from "../../contexts/TemplatesContext";

function AddExerciseTile() {
  const { handleShowingNewExerciseFrom } = useTemplates();
  return (
    <button
      type="button"
      className="add-template-exercise-button button"
      onClick={() => handleShowingNewExerciseFrom()}
    >
      <p>Add an exercise</p>
    </button>
  );
}

export default AddExerciseTile;
