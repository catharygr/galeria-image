import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import SearchInput from "../SearchInput";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Logo />
        <SearchInput />
      </div>
    </header>
  );
}
