import styles from "./buttonStyles.module.css"

export default function submissionButton() {
    return <a href = "http://localhost:3000/imagedelete">
        <button className={styles.deleteButton}>
            <img src = "https://media.discordapp.net/attachments/1278830213802885193/1418426545625632828/Trash.png?ex=68ce1429&is=68ccc2a9&hm=246c845bbab0af0776c0a0a135e296010cb37807d10b8b5e3f27b2deff93887a&=&format=webp&quality=lossless&width=96&height=95"/>
        </button>
        </a>
}