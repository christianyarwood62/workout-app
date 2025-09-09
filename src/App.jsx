import { useState } from "react";
import { useEffect } from "react";

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

const initialExercisesInTemplate = [];

const initialExerciseRoutine = [];

const tab1 = "Exercises";
const tab2 = "Start a workout";
const tab3 = "Exercise history";

function App() {
  const [tab, setTab] = useState(tab1);
  const [exercises, setExercises] = useState(initialExercises);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseRoutine, setExerciseRoutine] = useState(
    initialExerciseRoutine
  );
  const [chosenExerciseForRoutine, setChosenExerciseForRoutine] =
    useState(null);
  const [templateList, setTemplateList] = useState([]);

  function handleSetTab(tab) {
    setTab(tab);
  }

  function handleSelection(exercise) {
    //
    setSelectedExercise((cur) =>
      cur?.name === exercise.name ? null : exercise
    );
  }

  function handleAddExerciseToRoutine(exercise) {
    setChosenExerciseForRoutine(exercise);
    setExerciseRoutine((exerciseRoutine) => [...exerciseRoutine, exercise]);
  }

  /*
  NOTE: Dont need to put {()=> handlexxx()} if there is no argument,
  i.e. just write {handlexxx}
  */

  return (
    <div className="app">
      <header>
        <h1>Dream Workout</h1>
        <nav>
          <button
            className={tab === tab1 ? "selectedTab" : ""}
            onClick={() => handleSetTab(tab1)}
          >
            {tab1}
          </button>
          <button
            className={tab === tab2 ? "selectedTab" : ""}
            onClick={() => handleSetTab(tab2)}
          >
            {tab2}
          </button>
          <button
            className={tab === tab3 ? "selectedTab" : ""}
            onClick={() => handleSetTab(tab3)}
          >
            {tab3}
          </button>
        </nav>
      </header>
      {tab === tab1 && (
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
      {tab === tab3 && <ExerciseHistoryTab />}
    </div>
  );
}

export default App;

function WorkoutList({
  exercises,
  onSelection,
  selectedExercise,
  onAddToWorkout,
  setExercises,
}) {
  const [searchedExercise, setSearchedExercise] = useState("");
  const [showingResultsIsopen, setShowingResultsIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function searchExercise(e) {
    // if (e.key === "Enter") {
    setSearchedExercise(e.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function getExercises() {
        try {
          setErr("");
          let res = await fetch(
            `https://api.api-ninjas.com/v1/exercises?name=${searchedExercise}`,
            // { signal: controller.signal },
            {
              signal: controller.signal,
              headers: {
                "X-Api-Key": "SphLNzCc4LFN8J9GCrK4Kw==YWu2RSP860Dn0657",
              },
            }
          );

          if (!res.ok) throw new Error("Failed to retrieve exercises");

          let exerciseDetails = await res.json();

          if (exerciseDetails.length === 0) {
            setExercises(null);
          } else {
            setExercises(exerciseDetails);
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
            setIsLoading(false);
          }
        } finally {
          if (!controller.signal.aborted) {
            setIsLoading(false);
            setErr("");
          }
        }
      }

      setIsLoading(true);
      getExercises();

      return function () {
        controller.abort(); // This cancels fetch request everytime theres a new keystroke, to avoid fetching every time a new letter is typed
      };
    },
    [searchedExercise, setExercises]
  );

  return (
    <div className="exercises-list-component backgroundContainer">
      <div className="exercises-header">
        <h1>{tab1}</h1>
        <input
          className="searchExercisesInput"
          type="text"
          onChange={(e) => searchExercise(e)}
          placeholder="Search for Exercises..."
          value={searchedExercise}
        />
        {isLoading ? (
          <Loader />
        ) : (
          showingResultsIsopen &&
          (exercises ? (
            searchedExercise ? (
              <div>Showing results for {searchedExercise}</div>
            ) : (
              ""
            )
          ) : (
            <div>No results</div>
          ))
        )}
      </div>
      {!isLoading && (
        <div className="exercises-list backgroundContainer">
          {exercises?.map((exercise) => (
            <Exercise
              exercise={exercise}
              key={exercise.name}
              onSelection={onSelection}
              selectedExercise={selectedExercise}
              onAddToWorkout={onAddToWorkout}
            >
              {exercise.name}
            </Exercise>
          ))}
        </div>
      )}
    </div>
  );
}

function Loader() {
  return <div className="loader">Loading...</div>;
}
function Exercise({ exercise, children, onSelection, selectedExercise }) {
  const isSelected = selectedExercise?.name === exercise.name;

  return (
    <div className="exercise">
      <p>{children}</p>
      <button onClick={() => onSelection(exercise)}>
        {isSelected ? "Hide details" : "Show details"}
      </button>
    </div>
  );
}

function ExerciseDetails({ selectedExercise, onSelection }) {
  return (
    <div>
      <div className="exercise-details backgroundContainer">
        <h2>{selectedExercise.name}</h2>
        <button onClick={() => onSelection(selectedExercise)}>X</button>
        <button>History</button>
        <button>Records</button>
        {/* {selectedExercise.instructions.map((instruction, step) => (
          <div key={step + 1}>
            Step {step + 1}: {instruction}
          </div>
        ))} */}
        <div>
          <h3>Exercise Difficulty</h3>
          <span>{selectedExercise.difficulty}</span>
        </div>
        <div>
          <h3>Exercise Equipment</h3>
          <span>{selectedExercise.equipment}</span>
        </div>
        <div>
          <h3>Exercise Instructions</h3>
          <span>{selectedExercise.instructions}</span>
        </div>
        <div>
          <h3>Exercise Target Muscle</h3>
          <span>{selectedExercise.muscle}</span>
        </div>
        <div>
          <h3>Exercise Type</h3>
          <span>{selectedExercise.type}</span>
        </div>
      </div>
    </div>
  );
}

function WorkoutTab({ exercises, templateList, onSetTemplateList }) {
  const [showCreateWorkoutTemplate, setShowCreateWorkoutTemplate] =
    useState(false);
  const [chosenExercisesList, setChosenExerciseList] = useState([]);
  const [chosenExercise, setChosenExercise] = useState([]);
  const [templateName, setTemplateName] = useState("");
  const [isExerciseTemplateListOpen, setIsExerciseTemplateListOpen] =
    useState(false);

  function handleSetTemplateName(name) {
    setTemplateName(name.target.value);
  }
  function handleChosenExercise(exercise) {
    setChosenExercise(exercise.target.value);
  }

  function handleAddExerciseToTemplate(e) {
    e.preventDefault();
    chosenExercise === "Choose an exercise"
      ? ""
      : setChosenExerciseList(() => [...chosenExercisesList, chosenExercise]);
  }

  function handleShowCreateWorkoutTemplate() {
    setShowCreateWorkoutTemplate(!showCreateWorkoutTemplate);
  }

  return (
    <div>
      {!showCreateWorkoutTemplate && (
        <TemplateWorkout
          onShowCreateWorkoutTemplate={handleShowCreateWorkoutTemplate}
        />
      )}
      {showCreateWorkoutTemplate && (
        <CreateWorkoutTemplateForm
          exercises={exercises}
          chosenExercisesList={chosenExercisesList}
          onAddChosenExercisesList={handleAddExerciseToTemplate}
          chosenExercise={chosenExercise}
          onHandleChosenExercise={handleChosenExercise}
          onSetIsAddExerciseInputOpen={setIsExerciseTemplateListOpen}
          onSetChosenExerciseList={setChosenExerciseList}
          onShowCreateWorkoutTemplate={handleShowCreateWorkoutTemplate}
        />
      )}
      {isExerciseTemplateListOpen && (
        <ProposedExerciseTemplateList
          onSetTemplateName={handleSetTemplateName}
          templateName={templateName}
          chosenExercisesList={chosenExercisesList}
          templateList={templateList}
          onSetTemplateList={onSetTemplateList}
          isExerciseTemplateListOpen={isExerciseTemplateListOpen}
        />
      )}
      <WorkoutTemplateList templateList={templateList} />
    </div>
  );
}

function TemplateWorkout({ onShowCreateWorkoutTemplate }) {
  return (
    <div className="container">
      <button onClick={() => onShowCreateWorkoutTemplate()}>
        Add a new workout
      </button>
    </div>
  );
}

function CreateWorkoutTemplateForm({
  exercises,
  onAddChosenExercisesList,
  chosenExercise,
  onHandleChosenExercise,
  onSetIsAddExerciseInputOpen,
  onSetChosenExerciseList,
  onShowCreateWorkoutTemplate,
}) {
  const [exercisesInSelectBox, setExercisesInSelectBox] = useState(
    initialExercisesInTemplate
  );
  const [isAddExerciseInputOpen, setIsAddExerciseInputOpen] = useState(false);

  function handleShowAddExerciseSelectBoxes(e, exercise) {
    e.preventDefault();
    setExercisesInSelectBox((exercisesInSelectBox) => [
      ...exercisesInSelectBox,
      exercise,
    ]);
    setIsAddExerciseInputOpen(true);
  }

  return (
    <div className="container">
      <div>
        <button
          onClick={() => {
            onShowCreateWorkoutTemplate();
            onSetIsAddExerciseInputOpen(false);
            onSetChosenExerciseList([]);
          }}
        >
          x
        </button>
        <h2>New Workout Template!</h2>
        <form>
          {isAddExerciseInputOpen ? (
            ""
          ) : (
            <button onClick={(e) => handleShowAddExerciseSelectBoxes(e)}>
              Add an exercise
            </button>
          )}
          <AddExercisetoTemplateInput
            exercises={exercises}
            chosenExercise={chosenExercise}
            onAddChosenExercisesList={onAddChosenExercisesList}
            onHandleChosenExercise={onHandleChosenExercise}
            isAddExerciseInputOpen={isAddExerciseInputOpen}
            onSetIsAddExerciseInputOpen={onSetIsAddExerciseInputOpen}
            onSetChosenExerciseList={onSetChosenExerciseList}
          />
        </form>
      </div>
    </div>
  );
}

function AddExercisetoTemplateInput({
  exercises,
  onAddChosenExercisesList,
  chosenExercise,
  onHandleChosenExercise,
  isAddExerciseInputOpen,
  onSetIsAddExerciseInputOpen,
  onSetChosenExerciseList,
}) {
  function handleSetIsAddExerciseOpen(e) {
    e.preventDefault();
    onSetIsAddExerciseInputOpen(false);
  }

  return (
    <div>
      {" "}
      {isAddExerciseInputOpen ? (
        <div>
          <button
            onClick={(e) => {
              handleSetIsAddExerciseOpen(e);
              onSetChosenExerciseList([]);
            }}
          >
            Cancel new template
          </button>
          <select
            value={chosenExercise}
            onChange={(e) => onHandleChosenExercise(e)}
          >
            <option>Choose an exercise</option>
            {exercises.map((exercise, i) => (
              <option key={`exercise-${i}`}>{exercise.name}</option>
            ))}
          </select>
          <button
            onClick={(e) => {
              onAddChosenExercisesList(e, { chosenExercise });
              onSetIsAddExerciseInputOpen(true);
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function ProposedExerciseTemplateList({
  templateName,
  onSetTemplateName,
  chosenExercisesList,
  onSetTemplateList,
  templateList,
}) {
  const [proposedWorkoutTemplate, setProposedWorkoutTemplate] = useState(null);

  function handleAddProposedWorkoutTemplate(e) {
    e.preventDefault();
    setProposedWorkoutTemplate({ templateName });
    const newTemplate = [templateName, ...chosenExercisesList];
    onSetTemplateList([...templateList, newTemplate]);
  }

  return (
    <div className="container">
      <h2>This is a provisional workout template:</h2>
      <form onSubmit={handleAddProposedWorkoutTemplate}>
        <input
          onChange={(e) => onSetTemplateName(e)}
          value={templateName}
          placeholder="Enter Template Name"
        />
        {chosenExercisesList?.map((exercise, i) =>
          exercise === "Choose an exercise" ? (
            ""
          ) : (
            <div key={`exercise-in-template-${i}`}>{exercise}</div>
          )
        )}
        <button>Save Template</button>
      </form>
    </div>
  );
}

function WorkoutTemplateList({ templateList }) {
  return (
    <div className="container">
      <h2>This is the list of templates you have created:</h2>
      {templateList &&
        templateList.map((item, i) => (
          <div key={`template-${i}`}>
            {item.map((element, i) =>
              i === 0 ? (
                <h3 key={`template-header-${i}`}>{element}</h3>
              ) : (
                <div key={`template-exercise-${i}`}>{element}</div>
              )
            )}
          </div>
        ))}
    </div>
  );
}

// function WorkoutTemplateList({ chosenExercisesList }) {
//   return (
//     <div className="container">
//       <h2>This is your template list</h2>
//       {chosenExercisesList.map(() => (
//         <div>test</div>
//       ))}
//     </div>
//   );
// }

// function AddExerciseTemplateForm() {
//   const [weightForm, setWeightForm] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit} className="container">
//       <h2>Input metrics:</h2>

//       <div>
//         <label>Weight:</label>
//         <input onChange={(e) => setWeightForm(e.target.value)}></input> kg
//       </div>

//       <div>
//         <label>Sets:</label>
//         <input></input>
//       </div>

//       <div>
//         <label>Reps:</label>
//         <input></input>
//       </div>

//       <button>Add to routine</button>
//     </form>
//   );
// }

// function RoutineList({ exerciseRoutine, chosenExerciseForRoutine }) {
//   return (
//     <div>
//       <div className="container">
//         {chosenExerciseForRoutine ? (
//           <input defaultValue={"Enter Template Name"}></input>
//         ) : (
//           <div>
//             <h2>Add your first exercise!</h2>
//           </div>
//         )}
//         {chosenExerciseForRoutine &&
//           exerciseRoutine.map((exercise) => <div>{exercise}</div>)}
//       </div>
//     </div>
//   );
// }

function ExerciseHistoryTab() {
  return (
    <div>
      <label>test</label>
      <select defaultValue="-">
        <option>test</option>
        <option>dgsg</option>
      </select>
    </div>
  );
}
