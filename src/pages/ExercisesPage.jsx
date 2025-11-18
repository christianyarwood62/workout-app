import { useExercises } from "../contexts/ExercisesContext";

import ExercisesList from "../components/Exercises/ExercisesList";
import ExerciseDetails from "../components/Exercises/ExerciseDetails";
import UserTile from "../components/UserTile";
import Navbar from "../components/NavBar";

function ExercisesPage() {
  const { selectedExercise } = useExercises();

  return (
    <div className="main-content">
      <div className="content-container">
        {!selectedExercise && <ExercisesList />}
        {selectedExercise && <ExerciseDetails />}
      </div>
    </div>
  );
}

export default ExercisesPage;
