import MiniGames from "./mini-games/page";

import styles from "./main.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.mainContainer}>
        <MiniGames />
      </main>
    </div>
  );
}
