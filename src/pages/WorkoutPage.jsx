import AddFirstWorkout from "../components/AddFirstWorkout";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";
import { useWorkout } from "../contexts/WorkoutContext";

function WorkoutPage() {
  const { showCreateWorkoutTemplate } = useWorkout();

  return (
    <>
      <Navbar />
      {!showCreateWorkoutTemplate && <AddFirstWorkout />}
      {showCreateWorkoutTemplate && <NewWorkoutForm />}
    </>
  );
}

export default WorkoutPage;
