import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import { ExercisesProvider } from "./contexts/ExercisesContext";
import WorkoutPage from "./pages/WorkoutPage";
import HistoryPage from "./pages/HistoryPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import Navbar from "./components/NavBar";
import UserTile from "./components/UserTile";
import { TemplatesProvider } from "./contexts/TemplatesContext";
import AppLayout from "./UI/AppLayout";

function App() {
  return (
    <AuthenticationProvider>
      <ExercisesProvider>
        <TemplatesProvider>
          <BrowserRouter basename="/workout-app/">
            {/*basename needs to be here for workout-app */}
            <UserTile className="user-tile" />
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/exercises" element={<ExercisesPage />} />
                <Route path="/workout" element={<WorkoutPage />} />
                <Route
                  path="/history"
                  element={
                    <ProtectedRoute>
                      <HistoryPage />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </TemplatesProvider>
      </ExercisesProvider>
    </AuthenticationProvider>
  );
}

export default App;
