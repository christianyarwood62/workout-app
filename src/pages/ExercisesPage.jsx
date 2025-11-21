import { useExercises } from "../contexts/ExercisesContext";

import ExercisesList from "../components/Exercises/ExercisesList";
import ExerciseDetails from "../components/Exercises/ExerciseDetails";
import ExerciseSearchBar from "../components/Exercises/ExerciseSearchBar";

function ExercisesPage() {
  const { selectedExercise } = useExercises();

  return (
    <div className="main-content">
      <div className="exercisesPage-container">
        {!selectedExercise && <ExerciseSearchBar />}
        {!selectedExercise && <ExercisesList />}
        {selectedExercise && <ExerciseDetails />}
      </div>
    </div>
  );
}

export default ExercisesPage;
