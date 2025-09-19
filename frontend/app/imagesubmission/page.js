import styles from "../page.module.css";
import NewImage from "../components/newImage"
import BackButton from "../components/backButton";

export default function Home() {
  return (
  <div className={styles.center}>
    <h1 className={styles.title}>Add Image</h1>
    <BackButton/>
    <NewImage/>
  </div>
  );
}