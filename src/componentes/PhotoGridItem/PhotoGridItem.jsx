import Link from "next/link";
import Image from "next/image";

export default function PhotoGridItem({ id, src, alt, tags }) {
  return (
    <article>
      <Link href={`/photos/${id}`}>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
        />
      </Link>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
