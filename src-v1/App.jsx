import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import { ExercisesProvider } from "./contexts/ExercisesContext";
import WorkoutPage from "./pages/WorkoutPage";

function App() {
  return (
    <div className="app">
      <ExercisesProvider>
        <BrowserRouter basename="/workout-app/">
          {/*basename needs to be here for workout-app */}
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/workout" element={<WorkoutPage />} />
          </Routes>
        </BrowserRouter>
      </ExercisesProvider>
    </div>
  );
}

export default App;
