import { useContext, useState, useReducer, useEffect } from "react";
import { createContext } from "react";

const TemplatesContext = createContext();

const initialState = {
  isTemplateExerciseErrorOpen: false,
  exercises: [],
  templates: [],
  editingTemplate: {},
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
          (exercise) => exercise.id !== action.payload
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
            exercises: action.payload.newExercises,
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
      return {
        ...state,
        editingTemplate: action.payload,
      };
    }

    case "template/saveEditedTemplate":
      return {
        ...state,
        editingTemplate: {},
        templates: state.templates.map((template) =>
          template.id === action.payload.id
            ? {
                ...template,
                templateName:
                  action.payload.newTemplateName || template.templateName,
                exercises: action.payload.editedExercises,
              }
            : template
        ),
      };

    default:
      return state;
  }
}

function TemplatesProvider({ children }) {
  const [showingNewExerciseForm, setShowingNewExerciseForm] = useState(false);

  const [templateNameInput, setTemplateNameInput] = useState("");
  const [isEditTemplateOverlayOpen, setEditTemplateOverlayOpen] =
    useState(false);

  const [
    { isTemplateExerciseErrorOpen, exercises, templates, editingTemplate },
    dispatch,
  ] = useReducer(reducer, initialState);

  // the UI functions

  function handleShowingNewExerciseFrom() {
    setShowingNewExerciseForm(!showingNewExerciseForm);
  }

  // Handles the logic behind updating the templates from the reducer

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

  function handleShowEditTemplate(template) {
    setEditTemplateOverlayOpen(true);
    dispatch({ type: "template/openEditForm", payload: template });
    // dispatch({type: 'template/showEdittemplate', payload: })
  }

  function deleteExerciseFromNewTemplate(exerciseId) {
    dispatch({
      type: "template/deleteExerciseFromNewTemplate",
      payload: exerciseId,
    });
  }

  function handleAddExerciseToTemplate(exerciseName, sets, reps) {
    dispatch({
      type: "template/addExerciseToTemplate",
      payload: {
        id: crypto.randomUUID(),
        exerciseName,
        sets: sets,
        reps: reps,
      },
    });
    dispatch({ type: "toggleOverlay", payload: "isTemplateOverlayOpen" });
  }

  function handleSaveTemplate(templateName, exercises) {
    dispatch({
      type: "template/saveTemplate",
      payload: { newExercises: exercises, templateName },
    });
  }

  function handleDeleteTemplate(id) {
    dispatch({ type: "template/deleteTemplate", payload: id });
  }

  function handleToggleTemplateExerciseErrorOpen() {
    dispatch({ type: "toggleOverlay", payload: "isTemplateExerciseErrorOpen" });
  }

  function handleSaveEditedTemplate(newTemplateName, editedExercises, id) {
    dispatch({
      type: "template/saveEditedTemplate",
      payload: { newTemplateName, id, editedExercises },
    });
    setEditTemplateOverlayOpen(false);
  }

  return (
    <TemplatesContext.Provider
      value={{
        handleShowEditTemplate,
        deleteExerciseFromNewTemplate,
        handleAddExerciseToTemplate,
        handleSaveTemplate,
        isTemplateExerciseErrorOpen,
        handleToggleTemplateExerciseErrorOpen,
        templates,
        isEditTemplateOverlayOpen,
        setTemplateNameInput,
        templateNameInput,
        exercises,
        handleDeleteTemplate,
        handleSaveEditedTemplate,
        handleShowingNewExerciseFrom,
        showingNewExerciseForm,
        editingTemplate,
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
