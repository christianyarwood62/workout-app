import styles from "./HomePageTile.module.css";

function HomePageTile({ header, text, icon }) {
  return (
    <div className={styles.homePageTile}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
}

export default HomePageTile;
