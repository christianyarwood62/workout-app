import { useExercises } from "../contexts/ExercisesContext";

import ExercisesList from "../components/ExercisesList";
import ExerciseDetails from "../components/ExerciseDetails";
import Navbar from "../components/NavBar";
import ExerciseSearchBar from "../components/ExerciseSearchBar";

function ExercisesPage() {
  const { selectedExercise } = useExercises();

  return (
    <div className="exercise-details-tab">
      <Navbar />
      <ExerciseSearchBar />
      <ExercisesList />
      {selectedExercise && <ExerciseDetails />}
    </div>
  );
}

export default ExercisesPage;
