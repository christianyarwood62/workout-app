import AddTemplateButton from "../components/Templates/AddTemplateButton";
import NewTemplate from "../components/Templates/NewTemplate";
import TemplateList from "../components/Templates/TemplateList";
import NewTemplateExerciseOverlay from "../components/Templates/NewTemplateExerciseOverlay";
import TemplateExerciseErrorComponent from "../components/Templates/TemplateExerciseErrorComponent";
import EditWorkoutOverlay from "../components/Templates/EditWorkoutOverlay";
import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutPage() {
  const {
    isTemplateExerciseErrorOpen,
    isEditTemplateOverlayOpen,
    showingNewExerciseForm,
    showingNewTemplate,
  } = useTemplates();

  return (
    <div className="main-content">
      <div className="workout-page">
        <AddTemplateButton />
        {showingNewTemplate && <NewTemplate />}
        {<TemplateList />}
        {showingNewExerciseForm && <NewTemplateExerciseOverlay />}
        {isEditTemplateOverlayOpen && <EditWorkoutOverlay />}
        {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
      </div>
    </div>
  );
}

export default WorkoutPage;
