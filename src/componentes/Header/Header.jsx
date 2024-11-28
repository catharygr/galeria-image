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
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/submissions">Submissions</Link>
            </li>
            <li>
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
