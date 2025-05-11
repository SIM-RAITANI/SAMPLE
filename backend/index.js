import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app= express();

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.cookie("name", "simran", {
        httpOnly: true,
        secure: false
    });
    res.json("Hello from the server");
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});