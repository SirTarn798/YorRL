import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import sha256 from "js-sha256";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
let db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "YorRL",
  password: "--Insert Password to your database--",
  port: 5432,
});
db.connect();

app.listen(port, () => {
  console.log("Server is running on port 3000...");
});

app.post("/add", async (req, res) => {
  const link = req.body.link;
  console.log(link);
  const hashed_link = sha256(link);
  const truncated_hashed_link = hashed_link.slice(0, 8);
  const response = await db.query(
    "SELECT * FROM Reroute WHERE unique_code = '" + truncated_hashed_link + "'"
  );
  console.log(response.rows);
  if ((response.rows.length === 0)) {
    await db.query(
      "INSERT INTO Reroute VALUES ('" +
        truncated_hashed_link +
        "','" +
        link +
        "')"
    );
  }
  const data = { hashedLink: truncated_hashed_link };
  res.json(data);
});

app.get("/reroute/:key", async (req, res) => {
  const key = req.params.key;
  let result = await db.query(
    "Select link from Reroute where  unique_code  = " + "'" + key + "'"
  );
  const data = { link: result.rows[0].link };
  res.json(data);
});
