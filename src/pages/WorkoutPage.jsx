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
  } = useTemplates();

  return (
    <div className="main-content">
      <section className="workout-page">
        <div className="workout-page-header-container">
          <h1 className="workout-page-header">Track your Routines</h1>
          <p>Design custom workout routines that you can reuse anytime</p>
        </div>
        <NewTemplate />
        <TemplateList />
        {showingNewExerciseForm && <NewTemplateExerciseOverlay />}
        {isEditTemplateOverlayOpen && <EditWorkoutOverlay />}
        {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
      </section>
    </div>
  );
}

export default WorkoutPage;
