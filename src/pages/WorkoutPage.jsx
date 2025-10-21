import TemplateWorkout from "../components/TemplateWorkout";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";

function WorkoutPage() {
  return (
    <>
      <Navbar />
      <TemplateWorkout />
      <NewWorkoutForm />
    </>
  );
}

export default WorkoutPage;
