import { createContext, useContext } from "react";

const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
  return (
    <WorkoutContext.Provider value={{}}>{children}</WorkoutContext.Provider>
  );
}

function useWorkout() {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error("ExercisesContext was used outside of the WorkoutProvider");
  }
  return context;
}

export { WorkoutProvider, useWorkout };
