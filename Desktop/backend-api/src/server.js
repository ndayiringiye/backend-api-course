import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
 res.send("Hello World")
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
 try {
    console.log(`Server is running on port http://locahost: ${PORT}`)
 } catch (error) {
    console.log({message: "server error", error: error.message})
 }
});