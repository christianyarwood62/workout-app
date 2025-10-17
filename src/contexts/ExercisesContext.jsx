import { useContext, createContext, useState } from "react";

const ExercisesContext = createContext();

function ExercisesProvider({ children }) {
  const [exercises, setExercises] = useState([]);

  return (
    <ExercisesContext.Provider value={{ exercises, setExercises }}>
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
