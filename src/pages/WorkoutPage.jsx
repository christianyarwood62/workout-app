import TemplateWorkout from "../components/TemplateWorkout";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";
import { useWorkout } from "../contexts/WorkoutContext";

function WorkoutPage() {
  const { showCreateWorkoutTemplate } = useWorkout();

  return (
    <>
      <Navbar />
      {!showCreateWorkoutTemplate && <TemplateWorkout />}
      {showCreateWorkoutTemplate && <NewWorkoutForm />}
    </>
  );
}

export default WorkoutPage;
