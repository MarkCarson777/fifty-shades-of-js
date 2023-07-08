import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.sun}></div>
      <div className={styles.innerOrbit}>
        <div className={styles.innerPlanet}></div>
      </div>
      <div className={styles.middleOrbit}>
        <div className={styles.middlePlanet}></div>
      </div>
      <div className={styles.outerOrbit}>
        <div className={styles.outerPlanet}></div>
      </div>
    </div>
  );
}
