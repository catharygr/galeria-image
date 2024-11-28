import styles from "./page.module.css";
import Header from "@/componentes/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
      </main>
    </div>
  );
}
