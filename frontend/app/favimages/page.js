import FavImageGallery from "../components/favImageGallery";
import styles from "../page.module.css";
import BackButton from "../components/backButton";

export default function Home() {
  return (
  <div className={styles.center}>
    <h1 className={styles.title}>Favorites</h1>
    <BackButton/>
    <FavImageGallery/>
  </div>
  );
}