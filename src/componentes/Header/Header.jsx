import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import SearchInput from "../SearchInput";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Logo />
        <SearchInput />
        <nav className={styles.desktoNav}>
          <ul className={styles.navList}>
            <li>
              <Link href="#">Categories</Link>
            </li>
            <li>
              <Link href="#">Submissions</Link>
            </li>
            <li>
              <Link href="#">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
