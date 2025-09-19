// import Image from "next/image";
import styles from "./page.module.css";
import ImageGallery from "./components/imageGallery";
import SubmissionButton from "./components/submissionButton";
import ToFavoritesButton from "./components/toFavoritesButton"
import ImageDelete from "./components/toDeleteButton"

export default function Home() {
  return (
  <div className={styles.center}>
    <h1 className={styles.title}>My Gallery</h1>
    <ImageGallery/>
    <ToFavoritesButton/>
    <ImageDelete/>
    <SubmissionButton/>
  </div>
  );
}
