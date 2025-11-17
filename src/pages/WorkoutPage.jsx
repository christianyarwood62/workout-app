import AddWorkoutTemplateButton from "../components/AddWorkoutTemplateButton";
import NewWorkoutForm from "../components/NewWorkoutForm";
import WorkoutTemplateList from "../components/WorkoutTemplateList";
import NewTemplateExerciseForm from "../components/NewTemplateExerciseForm";
import TemplateExerciseErrorComponent from "../components/TemplateExerciseErrorComponent";
import EditWorkoutOverlay from "../components/EditWorkoutOverlay";
import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutPage() {
  const {
    isCreateWorkoutTemplateOpen,
    isTemplateExerciseErrorOpen,
    isEditTemplateOverlayOpen,
  } = useTemplates();

  return (
    <>
      <AddWorkoutTemplateButton />
      {isCreateWorkoutTemplateOpen && <NewWorkoutForm />}
      {<WorkoutTemplateList />}
      <NewTemplateExerciseForm />
      {isEditTemplateOverlayOpen && <EditWorkoutOverlay />}
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
