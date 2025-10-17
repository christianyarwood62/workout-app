import { useState, useEffect } from "react";
import Loader from "./Loader";
import Exercise from "./Exercise";
import ExerciseSearchBar from "./ExerciseSearchBar";
import { useExercises } from "../contexts/ExercisesContext";

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

function ExercisesList({ selectedExercise, onAddToWorkout }) {
  const [showingResultsIsopen, setShowingResultsIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const {
    exercises,
    setExercises,
    searchedExercise,
    setSearchedExercise,
    handleSelection,
  } = useExercises();

  useEffect(
    function () {
      const controller = new AbortController();

      async function getExercises() {
        try {
          setErr("");
          let res = await fetch(`https://api.api-ninjas.com/v1/exercises`, {
            signal: controller.signal,
            headers: {
              "X-Api-Key": "SphLNzCc4LFN8J9GCrK4Kw==YWu2RSP860Dn0657",
            },
          });

          if (!res.ok) {
            setExercises(initialExercises);
            throw new Error("Failed to retrieve exercises");
          }

          let exerciseDetails = await res.json();

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
    [setExercises]
  );

  return (
    <div className="exercises-list-component backgroundContainer">
      <div className="exercises-header">
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
              onSelection={handleSelection}
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

export default ExercisesList;
