import AddFirstWorkoutButton from "../components/AddFirstWorkoutButton";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";
import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateList from "../components/WorkoutTemplateList";

function WorkoutPage() {
  const { showCreateWorkoutTemplate } = useExercises();

  const { workoutTemplateList } = useExercises();

  return (
    <>
      <Navbar />
      {!workoutTemplateList && <AddFirstWorkoutButton />}
      {showCreateWorkoutTemplate && <NewWorkoutForm />}
      <WorkoutTemplateList />
    </>
  );
}

export default WorkoutPage;
