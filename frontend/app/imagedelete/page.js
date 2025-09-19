import styles from "../page.module.css";
import ImageDelete from "../components/imageDelete"
import ImageGallery from "../components/imageGallery";
import BackButton from "../components/backButton";

export default function Home() {
  return (
  <div className={styles.center}>
    <h1 className={styles.title}>Delete Image</h1>
    <BackButton/>
    <ImageDelete/>
    <ImageGallery/>
  </div>
  );
}