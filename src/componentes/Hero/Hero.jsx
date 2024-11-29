import styles from "./Hero.module.css";
import Image from "next/image";
import swoop from "../../../public/images/swoop.svg";
import hero from "../../../public/images/hero-img.jpg";

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <Image
        className={styles.heroImage}
        src={hero}
        alt="Hero"
        priority
      />
      <Image
        className={styles.swoop}
        src={swoop}
        alt="Gallery swoop"
      />
    </section>
  );
}
