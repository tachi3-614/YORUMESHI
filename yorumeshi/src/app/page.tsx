import styles from "./page.module.css"; 

export default function Home() {
  return (
    <main className={styles.container}>
      <button className={styles.neonButton}>
        現在地から探す
        <span className={styles.subText}>(FIND NEARBY)</span>
      </button>

      <div className={styles.neonCard}>
        <span className={styles.badge}>OPEN</span>
        <h3 className="text-xl font-bold mt-3">深夜ラーメン</h3>
        <p className="text-sm text-gray-400 mt-2">徒歩 5分 | 朝4時まで営業</p>
      </div>

    </main>
  );
}