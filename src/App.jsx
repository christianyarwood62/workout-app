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

function App() {
  return (
    <div className="app">
      <AuthenticationProvider>
        <ExercisesProvider>
          <BrowserRouter basename="/workout-app/">
            {/*basename needs to be here for workout-app */}
            <Navbar />
            <div className="main-content">
              <div className="content-container">
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path="/login" element={<LoginPage></LoginPage>} />
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
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </ExercisesProvider>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
