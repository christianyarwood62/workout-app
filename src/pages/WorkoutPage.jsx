import AddFirstWorkout from "../components/AddFirstWorkout";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";
import { useExercises } from "../contexts/ExercisesContext";

function WorkoutPage() {
  const { showCreateWorkoutTemplate } = useExercises();

  return (
    <>
      <Navbar />
      {!showCreateWorkoutTemplate && <AddFirstWorkout />}
      {showCreateWorkoutTemplate && <NewWorkoutForm />}
    </>
  );
}

export default WorkoutPage;
