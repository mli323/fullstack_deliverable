'use client'
import { useState } from "react"
import styles from "./newImageStyles.module.css"

//this component would ideally allow you to delete an image from the database by typing in the image's caption
function imageDelete() {
    async function onSubmit() {
        const inputCaption = caption;
        const res = await fetch("http://localhost:8080/images", {
            method: "DELETE",
           // body: JSON.stringify(newImageBody)
           caption: inputCaption 
        })
    }
    
    const [caption, setCaption] = useState("")

    return (
        <div className = {styles.form}>
            <div>
                <label htmlFor="caption">Caption: </label>
                    <input
                        name="caption"
                        value={caption}
                        onChange={(event) => setCaption(event.target.value)}
                    />
            </div>
            <br/>
            <a href="http://localhost:3000">
                <button onClick={onSubmit}>Delete Image</button>
            </a>
        </div>
    )
}
export default imageDelete