import styles from "./SearchInput.module.css";
import VisuallyHidden from "../VisuallyHidden";

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
      />
    </div>
  );
}
