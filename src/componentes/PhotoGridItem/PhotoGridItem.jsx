"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./PhotoGridItem.module.css";
import { useState } from "react";

export default function PhotoGridItem({ id, src, alt, tags }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <article>
      <Image
        className={`${styles.img} ${isExpanded ? styles.expanded : ""}`}
        src={src}
        alt={alt}
        width={300}
        height={300}
        priority
        onClick={handleImageClick}
      />
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li
            className={styles.tag}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
