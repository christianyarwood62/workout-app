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
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleOverlay":
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };

    default:
      return state;
  }
}

function TemplatesProvider({ children }) {
  const [selectedExercisesForTemplate, setSelectedExercisesForTemplate] =
    useState([]);
  const [workoutTemplates, setWorkoutTemplates] = useState([]);
  const [templateCounter, setTemplateCounter] = useState(0);
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

  function handleShowNewWorkoutForm() {
    setShowCreateWorkoutTemplate(!showCreateWorkoutTemplate);
    // setWorkoutTemplateList(!workoutTemplateList);
    setSelectedExercisesForTemplate([]);
  }

  function handleToggleTemplateFormOverlay(e) {
    e.preventDefault();
    dispatch({ type: "toggleOverlay", payload: "isTemplateOverlayOpen" });
  }

  function handleAddExerciseToTemplate(e) {
    const exercise = e.target.value;
    console.log(exercise);
    dispatch({ type: "toggleOverlay", payload: "isTemplateOverlayOpen" });
    if (selectedExercisesForTemplate.includes(exercise)) {
      dispatch({
        type: "toggleOverlay",
        payload: "isTemplateExerciseErrorOpen",
      });
      return;
    }
    setSelectedExercisesForTemplate((cur) => [...cur, exercise]);
  }

  function handleSaveTemplate(e) {
    e.preventDefault();
    if (selectedExercisesForTemplate.length === 0) return;

    setWorkoutTemplates(() => [
      ...workoutTemplates,
      {
        workoutName: `Template ${templateCounter + 1}`,
        id: crypto.randomUUID(),
        exercises: selectedExercisesForTemplate,
        displayNumber: templateCounter + 1, // This is used because without it, when you delete a template, the numbering restarts
        templateCounter: templateCounter + 1,
      },
    ]);
    setTemplateCounter(templateCounter + 1);
    setSelectedExercisesForTemplate([]);
    dispatch({ type: "toggleOverlay", payload: "isCreateWorkoutTemplateOpen" });
  }

  function deleteExerciseFromTemplate(e) {
    e.preventDefault();

    const exercise = e.target.value;
    setSelectedExercisesForTemplate((cur) => {
      return cur.filter((element) => element !== exercise);
    });
    console.log("exercise deleted");
  }

  function handleToggleTemplateExerciseErrorOpen() {
    dispatch({ type: "toggleOverlay", payload: "isTemplateExerciseErrorOpen" });
  }

  function deleteWorkoutTemplateFromList(e, id) {
    e.preventDefault();

    setWorkoutTemplates((cur) => {
      return cur.filter((template) => template.id !== id); // cur is the workoutTemplates
    });
  }

  function toggleEditWorkoutForm(id) {
    dispatch({ type: "toggleOverlay", payload: "isEditTemplateOverlayOpen" });
    setSelectedTemplateIDToEdit(id);
    // setTemplateNameInput(`Template ${template.displayNumber}`);
  }

  function saveNewTemplate(id, newName) {
    setWorkoutTemplates((cur) =>
      cur.map((template) =>
        template.id === id ? { ...template, workoutName: newName } : template
      )
    );
    setTemplateNameInput("");
    dispatch({ type: "toggleOverlay", payload: "isEditTemplateOverlayOpen" });
  }

  return (
    <TemplatesContext.Provider
      value={{
        handleShowNewWorkoutForm,
        handleToggleTemplateFormOverlay,
        isTemplateOverlayOpen,
        handleAddExerciseToTemplate,
        selectedExercisesForTemplate,
        handleSaveTemplate,
        deleteExerciseFromTemplate,
        isTemplateExerciseErrorOpen,
        handleToggleTemplateExerciseErrorOpen,
        workoutTemplates,
        setWorkoutTemplates,
        deleteWorkoutTemplateFromList,
        templateCounter,
        toggleEditWorkoutForm,
        isEditTemplateOverlayOpen,
        selectedTemplateToEdit,
        setSelectedTemplateToEdit,
        setTemplateNameInput,
        saveNewTemplate,
        templateNameInput,
        dispatch,
        isCreateWorkoutTemplateOpen,
        selectedTemplateIDToEdit,
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
