import AddFirstWorkoutButton from "../components/AddFirstWorkoutButton";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";
import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateList from "../components/WorkoutTemplateList";
import NewTemplateExerciseForm from "../components/NewTemplateExerciseForm";
import TemplateExerciseErrorComponent from "../components/TemplateExerciseErrorComponent";

function WorkoutPage() {
  const { showCreateWorkoutTemplate } = useExercises();

  const { workoutTemplateList, isTemplateExerciseErrorOpen } = useExercises();

  return (
    <>
      <Navbar />
      {!workoutTemplateList && <AddFirstWorkoutButton />}
      {showCreateWorkoutTemplate && <NewWorkoutForm />}
      <WorkoutTemplateList />
      <NewTemplateExerciseForm />
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
