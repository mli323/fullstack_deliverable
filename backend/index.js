import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const app = express()
const port = 8080;
const imageRef = collection(db, "images");

app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:3000"
	})
)
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
	res.send("Type '/images' after the url to see images data");
});

//Get all images
app.get("/images", async (req, res) => {
	console.log("getting images")
	const collectionSnap = await getDocs(imageRef)
	const docs = []
	collectionSnap.forEach((doc) => {
		docs.push(doc.data())
	})
	res.send(docs)
})

// const q = query(imageRef, where("favorite", "==", true))

// app.get("/images", async (req, res) => {
// 	const collectionSnap = await getDocs(q)
// 	const docs = []
// 	collectionSnap.forEach((doc) => {
// 		docs.push(doc.data())
// 	})
// 	res.send(docs)
// })

// Post a new image

app.post("/images", async (req, res) => {
	const imageBody = req.body
	try {
		await addDoc(imageRef, imageBody)
	} catch (e) {
		console.error(e)
		res.status(500);
	}
	res.status(200).send("Succesfully Created Image")
})

app.delete("/images/:caption", function (req, res) {
  const caption = req;
  
  for (var i = 0; i < images.length; i++) {
    if (images[i].caption == caption) {
      images.splice(i, 1);
      break;
    }
  }
  
  res.json({ message: "Record Deleted" });
});

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()
