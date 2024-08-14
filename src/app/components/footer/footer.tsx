//#region Imports
// React

// NextJS

// Third party

// Custom Components

// Interfaces

// Constants

// Content
import { Footer as Content } from "@/content";

// Assets

// Styles
import "@/styles/common.scss";
import "@/styles/utilities.scss";
import "@/styles/typography.scss";
import styles from "./footer.module.scss";
//#endregion

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className="grid-layout container-global-bg-color">
        <div className={styles.company}>
          <h4 className={`h4-regular`}>News Aggregator</h4>
        </div>
      </div>
    </footer>
  );
}
