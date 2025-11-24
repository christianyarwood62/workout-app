import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Button from "../UI/Button";

import gym from "../assets/gym.jpg";
import styles from "./HomePage.module.css";
import HomePageTile from "../components/HomePageTile";

import { Award, Dumbbell, Trophy } from "lucide-react";

function Homepage() {
  return (
    <div className="main-content">
      <div className={styles["homepage-container"]}>
        <section
          className={`${styles.topSectionContainer} ${styles.homeSectionContainer}`}
        >
          <div className={styles.topTextContainer}>
            <h1>Dream Workout</h1>
            <p>
              Join thousands who've achieved their fitness goals with our
              world-class facilities, expert trainers, and personalised
              programs.
            </p>
            <div className={`${styles.signUpButtons}`}>
              <button className="button">Register</button>
              <button className="button">Log In</button>
            </div>
          </div>
          <img src={gym} className={styles["companyLogo"]} />
        </section>
        <section
          className={`${styles.middleSectionContainer} ${styles.homeSectionContainer}`}
        >
          <div className={styles.middleSectionHeader}>
            <h2>Why Choose DreamWorkOut?</h2>
            <p>Everything you need to achieve your fitness goals</p>
          </div>
          <div className={styles.middleSectionTiles}>
            <HomePageTile
              icon={<Award />}
              header={"Custom Templates"}
              text={
                "Ability to create your own gym routines to keep you on top of your fitness journey"
              }
            />
            <HomePageTile
              icon={<Dumbbell />}
              header={"Insight into Gym Exercises"}
              text={
                "Discover the tremendous offering of exercies we provide to expand your knowledge of whats available to you"
              }
            />
            <HomePageTile
              icon={<Trophy />}
              header={"Award Winning Guide"}
              text={"Rated the Best Fitness Guide in 2025"}
            />
          </div>
        </section>
        <section
          className={`${styles.thirdSectionContainer} ${styles.homeSectionContainer}`}
        >
          test
        </section>
        <section
          className={`${styles.bottomSectionContainer} ${styles.homeSectionContainer}`}
        >
          <p>Log in to gain access to exercise history</p>
          <Button to="./login">Log in</Button>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
