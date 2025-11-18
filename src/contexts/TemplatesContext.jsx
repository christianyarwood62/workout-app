import { useContext, useState, useReducer, useEffect } from "react";
import { createContext } from "react";

const TemplatesContext = createContext();

const initialState = {
  // workoutTemplates: [],
  // templateNameInput: "",
  selectedTemplateToEdit: null,
  // templateCounter: 0,
  // selectedExercisesForTemplate: [],
  isTemplateOverlayOpen: false,
  isTemplateExerciseErrorOpen: false,
  isEditTemplateOverlayOpen: false,
  exercises: [],
  templates: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "template/openCloseNewTemplateExerciseFrom":
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };

    case "template/addExerciseToTemplate":
      return {
        ...state,
        exercises: [
          ...state.exercises,
          {
            id: action.payload.id,
            exerciseName: action.payload.exerciseName,
            sets: action.payload.sets,
            reps: action.payload.reps,
          },
        ],
      };
    case "template/deleteExerciseFromNewTemplate":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.exerciseName !== action.payload
        ),
      };
    case "template/saveTemplate":
      return {
        ...state,
        templates: [
          ...state.templates,
          {
            id: crypto.randomUUID(),
            templateName: action.payload.templateName,
            exercises: action.payload.exercises,
          },
        ],
        exercises: [],
        isCreateWorkoutTemplateOpen: false,
      };

    case "template/deleteTemplate":
      // In the exercise icon component, filters if the icon id matches the id in the template state
      return {
        ...state,
        templates: state.templates.filter(
          (template) => template.id !== action.payload
        ),
      };
    case "template/openEditForm": {
      // id is the id of the icon clicked on edit
      const templateToEdit = state.templates.find(
        (template) => template.id === action.payload.id
      );
      return {
        ...state,
        [action.payload.overlay]: !state[action.payload.overlay],
        selectedTemplateToEdit: templateToEdit,
      };
    }

    case "template/saveEditedTemplate":
      return { ...state };

    default:
      return state;
  }
}

function TemplatesProvider({ children }) {
  const [showingNewExerciseForm, setShowingNewExerciseForm] = useState(false);
  const [showingNewTemplate, setShowingNewTemplate] = useState(false);
  const [templateNameInput, setTemplateNameInput] = useState("");

  const [
    {
      isTemplateOverlayOpen,
      isTemplateExerciseErrorOpen,
      isEditTemplateOverlayOpen,
      isCreateWorkoutTemplateOpen,
      exercises,
      templates,
      selectedTemplateToEdit,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // the UI functions

  // This opens/closes the new template component where you can add exercises to a temporary template
  function handleShowingNewTemplate() {
    setShowingNewTemplate(!showingNewTemplate);
  }

  useEffect(
    function () {
      if (!isTemplateExerciseErrorOpen) return;

      const timer = setTimeout(() => {
        dispatch({
          type: "toggleOverlay",
          payload: "isTemplateExerciseErrorOpen",
        });
      }, 2000);

      return () => clearTimeout(timer);
    },
    [isTemplateExerciseErrorOpen]
  );

  function toggleNewTemplateExerciseOverlay() {
    dispatch({
      type: "template/openCloseNewTemplateExerciseForm",
      payload: "",
    });
  }

  function handleCloseEditTemplateButton() {
    dispatch({
      type: "toggleOverlay",
      payload: "isEditTemplateOverlayOpen",
    });
  }

  function deleteExerciseFromNewTemplate(exerciseName) {
    dispatch({
      type: "template/deleteExerciseFromNewTemplate",
      payload: exerciseName,
    });
  }

  function handleAddExerciseToTemplate(exerciseName, sets, reps) {
    dispatch({
      type: "template/addExerciseToTemplate",
      payload: {
        id: crypto.randomUUID(),
        exerciseName: exerciseName,
        sets: sets,
        reps: reps,
      },
    });
    dispatch({ type: "toggleOverlay", payload: "isTemplateOverlayOpen" });
  }

  function handleSaveTemplate(templateName) {
    dispatch({
      type: "template/saveTemplate",
      payload: { exercises: exercises, templateName: templateName },
    });
  }

  function handleDeleteTemplate(id) {
    dispatch({ type: "template/deleteTemplate", payload: id });
  }

  function handleToggleTemplateExerciseErrorOpen() {
    dispatch({ type: "toggleOverlay", payload: "isTemplateExerciseErrorOpen" });
  }

  function toggleEditWorkoutForm(id) {
    dispatch({
      type: "template/openEditForm",
      payload: { overlay: "isEditTemplateOverlayOpen", id },
    });
    // setTemplateNameInput(`Template ${template.displayNumber}`);
  }

  function handleSaveEditedTemplate(updatedExercises) {
    dispatch({ type: "template/saveEditedTemplate", payload: setsInput });
  }

  return (
    <TemplatesContext.Provider
      value={{
        toggleNewTemplateExerciseOverlay,
        handleCloseEditTemplateButton,
        deleteExerciseFromNewTemplate,
        isTemplateOverlayOpen,
        handleAddExerciseToTemplate,
        handleSaveTemplate,
        isTemplateExerciseErrorOpen,
        handleToggleTemplateExerciseErrorOpen,
        templates,
        toggleEditWorkoutForm,
        isEditTemplateOverlayOpen,
        selectedTemplateToEdit,
        setTemplateNameInput,
        templateNameInput,
        dispatch,
        isCreateWorkoutTemplateOpen,
        exercises,
        handleDeleteTemplate,
        handleSaveEditedTemplate,
        setShowingNewExerciseForm,
        showingNewExerciseForm,
        handleShowingNewTemplate,
        showingNewTemplate,
      }}
    >
      {children}
    </TemplatesContext.Provider>
  );
}

function useTemplates() {
  const context = useContext(TemplatesContext);
  if (context === undefined) {
    throw new Error(
      "Templates Provider was used outside of the Templates Context"
    );
  }

  return context;
}

export { TemplatesProvider, useTemplates };
