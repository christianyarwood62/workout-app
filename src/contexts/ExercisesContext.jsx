import { useContext, createContext, useState } from "react";

const ExercisesContext = createContext();

function ExercisesProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchedExercise, setSearchedExercise] = useState("");

  function handleSelection(exercise) {
    setSelectedExercise((cur) =>
      cur?.name === exercise.name ? null : exercise
    );
  }

  function handleAddExerciseToRoutine(exercise) {
    setChosenExerciseForRoutine(exercise);
    setExerciseRoutine((exerciseRoutine) => [...exerciseRoutine, exercise]);
  }

  function searchExercise(e) {
    // if (e.key === "Enter") {
    setSearchedExercise(e.target.value);
  }

  return (
    <ExercisesContext.Provider
      value={{
        exercises,
        setExercises,
        handleSelection,
        selectedExercise,
        handleAddExerciseToRoutine,
        searchExercise,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
}

function useExercises() {
  const context = useContext(ExercisesContext);
  if (context === undefined) {
    throw new Error(
      "ExercisesContext was used outside of the ExercisesProvider"
    );
  }
  return context;
}

export { ExercisesProvider, useExercises };
