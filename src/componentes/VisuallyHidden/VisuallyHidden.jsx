import styles from "./VisuallyHidden.module.css";
import { useState, useEffect } from "react";

export default function VisuallyHidden({ children, ...delegated }) {
  const [forceVisibility, setForceVisibility] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (event) => {
        if (event.key === "Alt") {
          setForceVisibility(true);
        }
      };
      const handleKeyUp = (event) => {
        if (event.key === "Alt") {
          setForceVisibility(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }
  return (
    <div
      className={styles.wrapper}
      {...delegated}
    >
      {children}
    </div>
  );
}
