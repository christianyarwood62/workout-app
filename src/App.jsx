import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import WorkoutList from "./components/ExercisesList";
import Homepage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import { ExercisesProvider } from "./contexts/ExercisesContext";
import { WorkoutProvider } from "./contexts/WorkoutContext";
import WorkoutPage from "./pages/WorkoutPage";

const initialExercises = [
  {
    name: "Triceps dip",
    type: "strength",
    muscle: "triceps",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
  },
  {
    name: "Decline EZ-bar skullcrusher",
    type: "strength",
    muscle: "triceps",
    equipment: "e-z_curl_bar",
    difficulty: "intermediate",
    instructions:
      "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well.",
  },
];

const initialExerciseRoutine = [];

function App() {
  const [exerciseRoutine, setExerciseRoutine] = useState(
    initialExerciseRoutine
  );
  const [chosenExerciseForRoutine, setChosenExerciseForRoutine] =
    useState(null);
  const [templateList, setTemplateList] = useState([]);

  /*
  NOTE: Dont need to put {()=> handlexxx()} if there is no argument,
  i.e. just write {handlexxx}
  */

  return (
    <div className="app">
      <ExercisesProvider>
        <WorkoutProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/exercises" element={<ExercisesPage />} />
              <Route path="/workout" element={<WorkoutPage />} />
              {/* <header>
            <h1>Dream Workout</h1>
            <Navbar tab={tab} onSelectTab={handleSetTab} />
          </header>
          <Homepage /> */}
              {/* {tab === tab1 && (
        <div className="exercise-details-tab">
          <WorkoutList
            exercises={exercises}
            onSelection={handleSelection}
            selectedExercise={selectedExercise}
            onAddToWorkout={handleAddExerciseToRoutine}
            setExercises={setExercises}
          />
          {selectedExercise && (
            <ExerciseDetails
              selectedExercise={selectedExercise}
              onSelection={handleSelection}
            />
          )}
        </div>
      )}
      {tab === tab2 && (
        <WorkoutTab
          exerciseRoutine={exerciseRoutine}
          chosenExerciseForRoutine={chosenExerciseForRoutine}
          onAddToWorkout={handleAddExerciseToRoutine}
          exercises={exercises}
          templateList={templateList}
          onSetTemplateList={setTemplateList}
        />
      )}
      {tab === tab3 && <ExerciseHistoryTab />} */}
            </Routes>
          </BrowserRouter>
        </WorkoutProvider>
      </ExercisesProvider>
    </div>
  );
}

export default App;

// function WorkoutTab({ exercises, templateList, onSetTemplateList }) {
//   const [showCreateWorkoutTemplate, setShowCreateWorkoutTemplate] =
//     useState(false);
//   const [chosenExercisesList, setChosenExerciseList] = useState([]);
//   const [chosenExercise, setChosenExercise] = useState([]);
//   const [templateName, setTemplateName] = useState("");
//   const [isExerciseTemplateListOpen, setIsExerciseTemplateListOpen] =
//     useState(false);

//   function handleSetTemplateName(name) {
//     setTemplateName(name.target.value);
//   }
//   function handleChosenExercise(exercise) {
//     setChosenExercise(exercise.target.value);
//   }

//   function handleAddExerciseToTemplate(e) {
//     e.preventDefault();
//     chosenExercise === "Choose an exercise"
//       ? ""
//       : setChosenExerciseList((list) => [...list, chosenExercise]);
//   }

//   function handleShowCreateWorkoutTemplate() {
//     setShowCreateWorkoutTemplate(!showCreateWorkoutTemplate);
//   }

//   return (
//     <div>
//       {!showCreateWorkoutTemplate && (
//         <TemplateWorkout
//           onShowCreateWorkoutTemplate={handleShowCreateWorkoutTemplate}
//         />
//       )}
//       {showCreateWorkoutTemplate && (
//         <CreateWorkoutTemplateForm
//           exercises={exercises}
//           chosenExercisesList={chosenExercisesList}
//           onAddChosenExercisesList={handleAddExerciseToTemplate}
//           chosenExercise={chosenExercise}
//           onHandleChosenExercise={handleChosenExercise}
//           onSetIsAddExerciseInputOpen={setIsExerciseTemplateListOpen}
//           onSetChosenExerciseList={setChosenExerciseList}
//           onShowCreateWorkoutTemplate={handleShowCreateWorkoutTemplate}
//         />
//       )}
//       {isExerciseTemplateListOpen && (
//         <ProposedExerciseTemplateList
//           onSetTemplateName={handleSetTemplateName}
//           templateName={templateName}
//           chosenExercisesList={chosenExercisesList}
//           templateList={templateList}
//           onSetTemplateList={onSetTemplateList}
//           isExerciseTemplateListOpen={isExerciseTemplateListOpen}
//         />
//       )}
//       <WorkoutTemplateList templateList={templateList} />
//     </div>
//   );
// }

// function TemplateWorkout({ onShowCreateWorkoutTemplate }) {
//   return (
//     <div className="container">
//       <button onClick={() => onShowCreateWorkoutTemplate()}>
//         Add a new workout
//       </button>
//     </div>
//   );
// }

// function CreateWorkoutTemplateForm({
//   exercises,
//   onAddChosenExercisesList,
//   chosenExercise,
//   onHandleChosenExercise,
//   onSetIsAddExerciseInputOpen,
//   onSetChosenExerciseList,
//   onShowCreateWorkoutTemplate,
// }) {
//   const [isAddExerciseInputOpen, setIsAddExerciseInputOpen] = useState(false);

//   function handleShowAddExerciseSelectBoxes() {
//     setIsAddExerciseInputOpen(true);
//   }

//   return (
//     <div className="container">
//       <div>
//         <button
//           onClick={() => {
//             onShowCreateWorkoutTemplate();
//             onSetIsAddExerciseInputOpen(false);
//             onSetChosenExerciseList([]);
//           }}
//         >
//           x
//         </button>
//         <h2>New Workout Template!</h2>
//         <form>
//           {isAddExerciseInputOpen ? (
//             ""
//           ) : (
//             <button onClick={handleShowAddExerciseSelectBoxes}>
//               Add an exercise
//             </button>
//           )}
//           <AddExercisetoTemplateInput
//             exercises={exercises}
//             chosenExercise={chosenExercise}
//             onAddChosenExercisesList={onAddChosenExercisesList}
//             onHandleChosenExercise={onHandleChosenExercise}
//             isAddExerciseInputOpen={isAddExerciseInputOpen}
//             onSetIsAddExerciseInputOpen={onSetIsAddExerciseInputOpen}
//             onSetChosenExerciseList={onSetChosenExerciseList}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// function AddExercisetoTemplateInput({
//   exercises,
//   onAddChosenExercisesList,
//   chosenExercise,
//   onHandleChosenExercise,
//   isAddExerciseInputOpen,
//   onSetIsAddExerciseInputOpen,
//   onSetChosenExerciseList,
// }) {
//   function handleSetIsAddExerciseOpen(e) {
//     e.preventDefault();
//     onSetIsAddExerciseInputOpen(false);
//   }

//   return (
//     <div>
//       {" "}
//       {isAddExerciseInputOpen ? (
//         <div>
//           <button
//             onClick={(e) => {
//               handleSetIsAddExerciseOpen(e);
//               onSetChosenExerciseList([]);
//             }}
//           >
//             Cancel new template
//           </button>
//           <select
//             value={chosenExercise}
//             onChange={(e) => onHandleChosenExercise(e)}
//           >
//             <option>Choose an exercise</option>
//             {exercises.map((exercise, i) => (
//               <option key={`exercise-${i}`}>{exercise.name}</option>
//             ))}
//           </select>
//           <button
//             onClick={(e) => {
//               onAddChosenExercisesList(e, { chosenExercise });
//               onSetIsAddExerciseInputOpen(true);
//             }}
//           >
//             Add
//           </button>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// }

// function ProposedExerciseTemplateList({
//   templateName,
//   onSetTemplateName,
//   chosenExercisesList,
//   onSetTemplateList,
// }) {
//   function handleAddProposedWorkoutTemplate(e) {
//     e.preventDefault();
//     const newTemplate = [templateName, ...chosenExercisesList];
//     onSetTemplateList((prev) => [...prev, newTemplate]);
//   }

//   return (
//     <div className="container">
//       <h2>This is a provisional workout template:</h2>
//       <form onSubmit={handleAddProposedWorkoutTemplate}>
//         <input
//           onChange={(e) => onSetTemplateName(e)}
//           value={templateName}
//           placeholder="Enter Template Name"
//         />
//         {chosenExercisesList?.map((exercise, i) =>
//           exercise === "Choose an exercise" ? (
//             ""
//           ) : (
//             <div key={`exercise-in-template-${i}`}>{exercise}</div>
//           )
//         )}
//         <button>Save Template</button>
//       </form>
//     </div>
//   );
// }

// function WorkoutTemplateList({ templateList }) {
//   return (
//     <div className="container">
//       <h2>This is the list of templates you have created:</h2>
//       {templateList &&
//         templateList.map((item, i) => (
//           <div key={`template-${i}`}>
//             {item.map((element, i) =>
//               i === 0 ? (
//                 <h3 key={`template-header-${i}`}>{element}</h3>
//               ) : (
//                 <div key={`template-exercise-${i}`}>{element}</div>
//               )
//             )}
//           </div>
//         ))}
//     </div>
//   );
// }

// // function WorkoutTemplateList({ chosenExercisesList }) {
// //   return (
// //     <div className="container">
// //       <h2>This is your template list</h2>
// //       {chosenExercisesList.map(() => (
// //         <div>test</div>
// //       ))}
// //     </div>
// //   );
// // }

// // function AddExerciseTemplateForm() {
// //   const [weightForm, setWeightForm] = useState("");

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //   }

// //   return (
// //     <form onSubmit={handleSubmit} className="container">
// //       <h2>Input metrics:</h2>

// //       <div>
// //         <label>Weight:</label>
// //         <input onChange={(e) => setWeightForm(e.target.value)}></input> kg
// //       </div>

// //       <div>
// //         <label>Sets:</label>
// //         <input></input>
// //       </div>

// //       <div>
// //         <label>Reps:</label>
// //         <input></input>
// //       </div>

// //       <button>Add to routine</button>
// //     </form>
// //   );
// // }

// // function RoutineList({ exerciseRoutine, chosenExerciseForRoutine }) {
// //   return (
// //     <div>
// //       <div className="container">
// //         {chosenExerciseForRoutine ? (
// //           <input defaultValue={"Enter Template Name"}></input>
// //         ) : (
// //           <div>
// //             <h2>Add your first exercise!</h2>
// //           </div>
// //         )}
// //         {chosenExerciseForRoutine &&
// //           exerciseRoutine.map((exercise) => <div>{exercise}</div>)}
// //       </div>
// //     </div>
// //   );
// // }

// function ExerciseHistoryTab() {
//   return (
//     <div>
//       <label>test</label>
//       <select defaultValue="-">
//         <option>test</option>
//         <option>dgsg</option>
//       </select>
//     </div>
//   );
// }
