import AddTemplateButton from "../components/Templates/AddTemplateButton";
import NewTemplate from "../components/Templates/NewTemplate";
import TemplateList from "../components/Templates/TemplateList";
import NewTemplateExerciseOverlay from "../components/Templates/NewTemplateExerciseOverlay";
import TemplateExerciseErrorComponent from "../components/Templates/TemplateExerciseErrorComponent";
import EditWorkoutOverlay from "../components/Templates/EditWorkoutOverlay";
import { useTemplates } from "../contexts/TemplatesContext";
import { useState } from "react";

function WorkoutPage() {
  const {
    isCreateWorkoutTemplateOpen,
    isTemplateExerciseErrorOpen,
    isEditTemplateOverlayOpen,
    isTemplateOverlayOpen,
    showingNewExerciseForm,
    handleShowingNewTemplate,
    showingNewTemplate,
  } = useTemplates();

  return (
    <>
      <AddTemplateButton />
      {showingNewTemplate && <NewTemplate />}
      {<TemplateList />}
      {showingNewExerciseForm && <NewTemplateExerciseOverlay />}
      {isEditTemplateOverlayOpen && <EditWorkoutOverlay />}
      {isTemplateExerciseErrorOpen && <TemplateExerciseErrorComponent />}
    </>
  );
}

export default WorkoutPage;
