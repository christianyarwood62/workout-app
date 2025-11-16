import { useContext, createContext, useState, useEffect } from "react";

const ExercisesContext = createContext();

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

function ExercisesProvider({ children }) {
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [exercises, setExercises] = useState(initialExercises);

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchedExercise, setSearchedExercise] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetches all the exercise data from the API to display in the exercises list component
  useEffect(
    function () {
      async function getExercises() {
        try {
          setErr("");
          let res = await fetch(
            `https://api.api-ninjas.com/v1/exercises?name=${searchedExercise}`,
            {
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

          if (exerciseDetails.length === 0) {
            setExercises(null);
          } else {
            //
            if (!fetchedExercises.length) setFetchedExercises(exerciseDetails);
            setExercises(exerciseDetails);
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setErr(err.message);
            setIsLoading(false);
          }
        } finally {
          setIsLoading(false);
        }
      }

      setIsLoading(true);
      getExercises();
    },
    [searchedExercise]
  );

  // Search for a specific exercise from the list, and API will fetch all exercises that match this search
  function handleSearchedExercise(exercise) {
    setSearchedExercise(exercise);
  }

  // Reset button on the exercises list so cancel out the user search and show the original API fetch of every exercise
  function resetExercises() {
    setExercises(fetchedExercises);
    setSearchedExercise("");
  }

  // Selects an exercise from the list to show details about it
  function handleSelection(exercise) {
    setSelectedExercise((cur) =>
      cur?.name === exercise?.name ? null : exercise
    );
  }

  return (
    <ExercisesContext.Provider
      value={{
        exercises,
        handleSelection,
        selectedExercise,
        searchedExercise,
        handleSearchedExercise,
        fetchedExercises,
        resetExercises,
        isLoading,
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
