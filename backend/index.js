import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app= express();

app.use(cors({
    origin: "https://sample-1-9h7w.onrender.com",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.cookie("name", "simran", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    res.json("Hello from the server");
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});