import { useContext, useState, useReducer, useEffect } from "react";
import { createContext } from "react";

const TemplatesContext = createContext();

const initialState = {
  // workoutTemplates: [],
  // templateNameInput: "",
  // selectedTemplateToEdit: null,
  // templateCounter: 0,
  // selectedExercisesForTemplate: [],
  isTemplateOverlayOpen: false,
  isTemplateExerciseErrorOpen: false,
  isEditTemplateOverlayOpen: false,
  isCreateWorkoutTemplateOpen: false,
  exercises: [],
  templates: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleOverlay":
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
            exerciseName: action.payload.exerciseName,
            sets: action.payload.sets,
            reps: action.payload.reps,
          },
        ],
      };
    case "template/deleteExerciseFromTemplate":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.exerciseName !== action.payload
        ),
      };
    case "template/saveTemplate":
      console.log(action.payload);
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
    case "template/openEditForm":
      return {
        ...state,
        [action.payload.overlay]: !state[action.payload.overlay],
      };

    case "template/saveEditedTemplate":
      console.log("test");
      return { ...state };

    default:
      return state;
  }
}

function TemplatesProvider({ children }) {
  const [selectedTemplateToEdit, setSelectedTemplateToEdit] = useState(null);
  const [selectedTemplateIDToEdit, setSelectedTemplateIDToEdit] =
    useState(null);
  const [templateNameInput, setTemplateNameInput] = useState("");

  const [
    {
      isTemplateOverlayOpen,
      isTemplateExerciseErrorOpen,
      isEditTemplateOverlayOpen,
      isCreateWorkoutTemplateOpen,
      exercises,
      templates,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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

  function handleToggleTemplateFormOverlay() {
    dispatch({ type: "toggleOverlay", payload: "isTemplateOverlayOpen" });
  }

  function handleAddExerciseToTemplate(exerciseName, sets, reps) {
    dispatch({
      type: "template/addExerciseToTemplate",
      payload: {
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
    console.log(id);
    dispatch({
      type: "template/openEditForm",
      payload: { overlay: "isEditTemplateOverlayOpen", id },
    });
    // setTemplateNameInput(`Template ${template.displayNumber}`);
  }

  return (
    <TemplatesContext.Provider
      value={{
        handleToggleTemplateFormOverlay,
        isTemplateOverlayOpen,
        handleAddExerciseToTemplate,
        handleSaveTemplate,
        isTemplateExerciseErrorOpen,
        handleToggleTemplateExerciseErrorOpen,
        templates,
        toggleEditWorkoutForm,
        isEditTemplateOverlayOpen,
        selectedTemplateToEdit,
        setSelectedTemplateToEdit,
        setTemplateNameInput,
        templateNameInput,
        dispatch,
        isCreateWorkoutTemplateOpen,
        exercises,
        handleDeleteTemplate,
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
