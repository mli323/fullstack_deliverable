import styles from "./buttonStyles.module.css"

export default function backButton() {
    return <a href = "http://localhost:3000">
    <button className={styles.backButton}>
      <img src="https://media.discordapp.net/attachments/1278830213802885193/1418426545915035750/Back.png?ex=68ce1429&is=68ccc2a9&hm=21486ae4d1b4b0ae349cd8e2472eb5af6df45045c7db69381425e4372c03a31d&=&format=webp&quality=lossless&width=66&height=66"/>
    </button>
    </a>
}