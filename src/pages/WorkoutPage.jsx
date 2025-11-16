import AddWorkoutTemplateButton from "../components/AddWorkoutTemplateButton";
import NewWorkoutForm from "../components/NewWorkoutForm";
import WorkoutTemplateList from "../components/WorkoutTemplateList";
import NewTemplateExerciseForm from "../components/NewTemplateExerciseForm";
import TemplateExerciseErrorComponent from "../components/TemplateExerciseErrorComponent";
import EditWorkoutTemplate from "../components/EditWorkoutTemplate";
import { useTemplates } from "../contexts/TemplatesContext";

function WorkoutPage() {
  const { isCreateWorkoutTemplateOpen, isTemplateExerciseErrorOpen } =
    useTemplates();

  return (
    <>
      <AddWorkoutTemplateButton />
      {isCreateWorkoutTemplateOpen && <NewWorkoutForm />}
      <WorkoutTemplateList />
      <NewTemplateExerciseForm />
      <EditWorkoutTemplate />
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
