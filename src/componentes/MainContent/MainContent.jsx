import data from "../../data";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./MainContent.module.css";
import PhotoGridItem from "../PhotoGridItem";

export default function MainContent() {
  return (
    <div className={styles.wrapper}>
      <VisuallyHidden>
        <h1>All Ph0tos</h1>
      </VisuallyHidden>
      {data.map(({ id, src, alt, tags }) => (
        <PhotoGridItem
          key={id}
          id={id}
          src={src}
          alt={alt}
          tags={tags}
        />
      ))}
    </div>
  );
}
