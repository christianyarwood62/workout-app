import AddTemplateButton from "../components/Templates/AddTemplateButton";
import NewTemplate from "../components/Templates/NewTemplate";
import TemplateList from "../components/Templates/TemplateList";
import NewTemplateExerciseOverlay from "../components/Templates/NewTemplateExerciseOverlay";
import TemplateExerciseErrorComponent from "../components/Templates/TemplateExerciseErrorComponent";
import EditWorkoutOverlay from "../components/Templates/EditWorkoutOverlay";
import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutPage() {
  const {
    isCreateWorkoutTemplateOpen,
    isTemplateExerciseErrorOpen,
    isEditTemplateOverlayOpen,
    isTemplateOverlayOpen,
  } = useTemplates();

  return (
    <>
      <AddTemplateButton />
      {isCreateWorkoutTemplateOpen && <NewTemplate />}
      {<TemplateList />}
      {isTemplateOverlayOpen && <NewTemplateExerciseOverlay />}
      {isEditTemplateOverlayOpen && <EditWorkoutOverlay />}
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
