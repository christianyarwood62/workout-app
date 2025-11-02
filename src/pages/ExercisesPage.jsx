import { useExercises } from "../contexts/ExercisesContext";

import ExercisesList from "../components/ExercisesList";
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseSearchBar from "../components/ExerciseSearchBar";
import UserTile from "../components/UserTile";

function ExercisesPage() {
  const { selectedExercise } = useExercises();

  return (
    <div className="exercise-details-tab">
      {!selectedExercise && <ExerciseSearchBar />}
      {!selectedExercise && <ExercisesList />}
      {selectedExercise && <ExerciseDetails />}
    </div>
  );
}

export default ExercisesPage;
