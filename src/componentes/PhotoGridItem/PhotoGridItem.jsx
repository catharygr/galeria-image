import Link from "next/link";
import Image from "next/image";
import styles from "./PhotoGridItem.module.css";

export default function PhotoGridItem({ id, src, alt, tags }) {
  return (
    <article>
      <Link
        href={`/photos/${id}`}
        className={styles.a}
      >
        <Image
          className={styles.img}
          src={src}
          alt={alt}
          width={300}
          height={300}
          priority
        />
      </Link>
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
