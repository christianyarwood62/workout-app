import { useContext, createContext, useState, useEffect } from "react";

const ExercisesContext = createContext();

function ExercisesProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchedExercise, setSearchedExercise] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [showingResultsIsopen, setShowingResultsIsOpen] = useState(true);

  const [isAddExerciseInputOpen, setIsAddExerciseInputOpen] = useState(false);
  const [showCreateWorkoutTemplate, setShowCreateWorkoutTemplate] =
    useState(false);
  const [isTemplateOverlayOpen, setIsTemplateOverlayOpen] = useState(false);
  const [selectedExercisesForTemplate, setSelectedExercisesForTemplate] =
    useState([]);
  const [isTemplateExerciseErrorOpen, setIsTemplateExerciseErrorOpen] =
    useState(false);
  const [workoutTemplates, setWorkoutTemplates] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();

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
        {
          name: "Test 2",
          type: "strength",
          muscle: "triceps",
          equipment: "body_only",
          difficulty: "intermediate",
          instructions:
            "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
        },
        {
          name: "test 3",
          type: "strength",
          muscle: "triceps",
          equipment: "e-z_curl_bar",
          difficulty: "intermediate",
          instructions:
            "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well.",
        },
        {
          name: "test 4",
          type: "strength",
          muscle: "triceps",
          equipment: "body_only",
          difficulty: "intermediate",
          instructions:
            "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
        },
        {
          name: "test 5",
          type: "strength",
          muscle: "triceps",
          equipment: "e-z_curl_bar",
          difficulty: "intermediate",
          instructions:
            "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well.",
        },
        {
          name: "test 6",
          type: "strength",
          muscle: "triceps",
          equipment: "body_only",
          difficulty: "intermediate",
          instructions:
            "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
        },
        {
          name: "test 7",
          type: "strength",
          muscle: "triceps",
          equipment: "e-z_curl_bar",
          difficulty: "intermediate",
          instructions:
            "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well.",
        },
      ];

      async function getExercises() {
        try {
          setErr("");
          let res = await fetch(
            `https://api.api-ninjas.com/v1/exercises?muscle=${searchedExercise}`,
            {
              signal: controller.signal,
              headers: {
                "X-Api-Key": "SphLNzCc4LFN8J9GCrK4Kw==YWu2RSP860Dn0657",
              },
            }
          );

          if (!res.ok) {
            setExercises(initialExercises);
            throw new Error("Failed to retrieve exercises");
          }

          let exerciseDetails = await res.json();
          console.log(exerciseDetails);

          if (exerciseDetails.length === 0) {
            setExercises(null);
          } else {
            setExercises(exerciseDetails);
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setErr(err.message);
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
    [searchedExercise]
  );

  useEffect(
    function () {
      setTimeout(() => {
        setIsTemplateExerciseErrorOpen(false);
      }, 2000);
    },
    [isTemplateExerciseErrorOpen]
  );

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

  function handleShowAddExerciseSelectBoxes(e, option) {
    e.preventDefault();
    setIsAddExerciseInputOpen(option);
  }

  function handleShowNewWorkoutForm() {
    setShowCreateWorkoutTemplate(!showCreateWorkoutTemplate);
    // setWorkoutTemplateList(!workoutTemplateList);
    setSelectedExercisesForTemplate([]);
  }

  function handleToggleTemplateFormOverlay(e) {
    e.preventDefault();
    setIsTemplateOverlayOpen(!isTemplateOverlayOpen);
  }

  function handleAddExerciseToTemplate(e) {
    const exercise = e.target.value;
    console.log(exercise);
    setIsTemplateOverlayOpen(!isTemplateOverlayOpen);
    setSelectedExercisesForTemplate((cur) => {
      if (cur.includes(exercise)) {
        setIsTemplateExerciseErrorOpen(true);
        return cur;
      } else {
        return [...cur, exercise];
      }
    });
  }

  function handleSaveTemplate(e) {
    e.preventDefault();
    if (selectedExercisesForTemplate.length === 0) return;

    setWorkoutTemplates(() => [
      ...workoutTemplates,
      {
        id: crypto.randomUUID(),
        exercises: selectedExercisesForTemplate,
        displayNumber: workoutTemplates.length + 1, // This is used because without it, when you delete a template, the numbering restarts
      },
    ]);
    setSelectedExercisesForTemplate([]);
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
    setIsTemplateExerciseErrorOpen(true);
  }

  function deleteWorkoutTemplateFromList(e, id) {
    e.preventDefault();

    const workout = e.target.value;
    console.log(workout);
    setWorkoutTemplates((cur) => {
      console.log(cur);
      return cur.filter((template) => template.id !== id);
    });
  }

  return (
    <ExercisesContext.Provider
      value={{
        exercises,
        setExercises,
        handleSelection,
        selectedExercise,
        handleAddExerciseToRoutine,
        searchedExercise,
        searchExercise,
        setSelectedExercise,
        setShowingResultsIsOpen,
        isAddExerciseInputOpen,
        handleShowAddExerciseSelectBoxes,
        showCreateWorkoutTemplate,
        setShowCreateWorkoutTemplate,
        handleShowNewWorkoutForm,
        // workoutTemplateList,
        handleToggleTemplateFormOverlay,
        isTemplateOverlayOpen,
        handleAddExerciseToTemplate,
        selectedExercisesForTemplate,
        handleSaveTemplate,
        deleteExerciseFromTemplate,
        isTemplateExerciseErrorOpen,
        handleToggleTemplateExerciseErrorOpen,
        workoutTemplates,
        deleteWorkoutTemplateFromList,
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
