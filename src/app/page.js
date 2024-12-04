import styles from "./page.module.css";
import Header from "@/componentes/Header";
import Hero from "@/componentes/Hero";
import MainContent from "@/componentes/MainContent";
import Footer from "@/componentes/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <main className={styles.main}>
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
