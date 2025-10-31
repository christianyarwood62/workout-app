import AddWorkoutTemplateButton from "../components/AddWorkoutTemplateButton";
import Navbar from "../components/NavBar";
import NewWorkoutForm from "../components/NewWorkoutForm";
import { useExercises } from "../contexts/ExercisesContext";
import WorkoutTemplateList from "../components/WorkoutTemplateList";
import NewTemplateExerciseForm from "../components/NewTemplateExerciseForm";
import TemplateExerciseErrorComponent from "../components/TemplateExerciseErrorComponent";
import EditWorkoutTemplate from "../components/EditWorkoutTemplate";

function WorkoutPage() {
  const { showCreateWorkoutTemplate } = useExercises();

  const { isTemplateExerciseErrorOpen, isEditTemplateOverlayOpen } =
    useExercises();

  return (
    <>
      <Navbar />
      <AddWorkoutTemplateButton />
      {showCreateWorkoutTemplate && <NewWorkoutForm />}
      <WorkoutTemplateList />
      <NewTemplateExerciseForm />
      <EditWorkoutTemplate />
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
