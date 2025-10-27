import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import { ExercisesProvider } from "./contexts/ExercisesContext";
import WorkoutPage from "./pages/WorkoutPage";

function App() {
  /*
  NOTE: Dont need to put {()=> handlexxx()} if there is no argument,
  i.e. just write {handlexxx}
  */

  return (
    <div className="app">
      <ExercisesProvider>
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
