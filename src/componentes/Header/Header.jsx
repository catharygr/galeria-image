import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Logo />
      </div>
      <h1>Animals Gallery</h1>
    </header>
  );
}
