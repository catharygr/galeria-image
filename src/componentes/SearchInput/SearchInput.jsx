import styles from "./SearchInput.module.css";
import VisuallyHidden from "../VisuallyHidden";
import { Search } from "react-feather";

export default function SearchInput(props) {
  return (
    <div
      className={styles.wrapper}
      {...props}
    >
      <label htmlFor="search">
        <VisuallyHidden>Search</VisuallyHidden>
      </label>
      <input
        type="search"
        placeholder="Search..."
        className={styles.input}
      />
      <button className={styles.submitBtn}>
        <VisuallyHidden>Submit</VisuallyHidden>
        <Search size={16} />
      </button>
    </div>
  );
}
