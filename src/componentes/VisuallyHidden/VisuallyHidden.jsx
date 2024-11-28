import styles from "./VisuallyHidden.module.css";
import { useState, useEffect } from "react";

export default function VisuallyHidden({ children, ...delegated }) {
  const [forceVisibility, setForceVisibility] = useState(false);

  useEffect(() => {}, []);
  return (
    <div
      className={styles.wrapper}
      {...delegated}
    >
      {children}
    </div>
  );
}
