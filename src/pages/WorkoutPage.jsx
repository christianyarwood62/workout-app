import AddTemplateButton from "../components/Templates/AddTemplateButton";
import NewTemplate from "../components/Templates/NewTemplate";
import TemplateList from "../components/Templates/TemplateList";
import NewTemplateExerciseForm from "../components/Templates/NewTemplateExerciseForm";
import TemplateExerciseErrorComponent from "../components/Templates/TemplateExerciseErrorComponent";
import EditWorkoutOverlay from "../components/Templates/EditWorkoutOverlay";
import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutPage() {
  const {
    isCreateWorkoutTemplateOpen,
    isTemplateExerciseErrorOpen,
    isEditTemplateOverlayOpen,
  } = useTemplates();

  return (
    <>
      <AddTemplateButton />
      {isCreateWorkoutTemplateOpen && <NewTemplate />}
      {<TemplateList />}
      <NewTemplateExerciseForm />
      {isEditTemplateOverlayOpen && <EditWorkoutOverlay />}
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
