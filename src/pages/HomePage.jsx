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
              <button className="text-btn">Register</button>
              <button className="accent-text-btn">Log In</button>
            </div>
          </div>
          <img src={gym} className={styles["companyLogo"]} />
        </section>
        <section
          className={`${styles.middleSectionContainer} ${styles.homeSectionContainer}`}
        >
          <div className={styles.middleSectionHeader}>
            <h1>Why Choose DreamWorkOut?</h1>
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
          <div className={styles.textSection}>
            <p className={styles.bigText}>5000+</p>
            <p className={styles.smallText}>Happy Members</p>
          </div>
          <div className={styles.textSection}>
            <p className={styles.bigText}>50+</p>
            <p className={styles.smallText}>Results Driven exercises</p>
          </div>
          <div className={styles.textSection}>
            <p className={styles.bigText}>Unlimited</p>
            <p className={styles.smallText}>Customisable Routines</p>
          </div>
          <div className={styles.textSection}>
            <p className={styles.bigText}>24/7</p>
            <p className={styles.smallText}>Customer Service</p>
          </div>
        </section>
        <section
          className={`${styles.bottomSectionContainer} ${styles.homeSectionContainer}`}
        >
          <h1>Ready to Start your Journey?</h1>
          <p>
            Join DreamWorkOut today and get your first month free. No
            commitment, cancel anytime.
          </p>
          <Button className="text-btn" to="./login">
            Sign Up
          </Button>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
