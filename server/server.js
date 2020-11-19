const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(fileupload());

app.get("/", (req, res) => {
  res.send("Welcome Backhand");
});

app.listen(PORT, () => {
  console.log(`Server is running ${"http://localhost:5000/"}`);
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yimeo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const givenTask = client.db("codeInterview").collection("taskUpload");
  const selectedTask = client.db("codeInterview").collection("selectedTask");
  const reviewCollection = client.db("codeInterview").collection("review");
  const adminCollection = client.db("codeInterview").collection("admin");
  const orderCollection = client.db("codeInterview").collection("order");
  console.log("Database is connected");

  // course post
  app.post("/selectedTask", (req, res) => {
    const task = req.body.task;
    const description = req.body.description;
    const image = req.body.image;
    const email = req.body.email;
    const name = req.body.name;
    const photo = req.body.img;
    const isSignIn = req.body.isSignIn;

    selectedTask
      .insertOne({ task, description, image, email, name, photo, isSignIn })
      .then((result) => {
        res.send(result.insertedCount > 0);
      });
  });

  // course get
  app.get("/studentTask", (req, res) => {
    console.log(req.query.email);
    selectedTask.find({ email: req.query.email }).toArray((err, doc) => {
      res.send(doc);
    });
  });

  app.get("/allCourse", (req, res) => {
    courseCollection.find({}).toArray((err, doc) => {
      res.send(doc);
    });
  });
  // addTask post
  app.post("/addTask", (req, res) => {
    const file = req.files.file;
    const task = req.body.task;
    const description = req.body.description;
    const newImg = file.data;
    const encImg = newImg.toString("base64");

    const image = {
      contentType: req.files.file.mimetype,
      size: req.files.file.size,
      img: Buffer.from(encImg, "base64"),
    };

    givenTask.insertOne({ task, description, image }).then((result, err) => {
      console.log(err);
      res.send(result.insertedCount > 0);
    });
  });

  //service get
  app.get("/givenTask", (req, res) => {
    givenTask.find({}).toArray((err, doc) => {
      res.send(doc);
    });
  });

  // review post
  app.post("/review", (req, res) => {
    const review = req.body.review;

    reviewCollection.insertOne(review).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });
  // review get
  app.get("/allReview", (req, res) => {
    reviewCollection.find({}).toArray((err, doc) => {
      res.send(doc);
    });
  });

  // admin post
  app.post("/addAdmin", (req, res) => {
    const email = req.body.data;

    adminCollection.insertOne({ email: email }).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });
  // Is Admin post
  app.post("/isAdmin", (req, res) => {
    const email = req.body.data;
    adminCollection.find({ email: email }).toArray((err, admin) => {
      res.send(admin.length > 0);
    });
  });

  // admin get
  app.get("/Admin", (req, res) => {
    console.log(req.body.email);
    adminCollection.find({}).toArray((err, doc) => {
      res.send(doc);
    });
  });

  //delete

  app.delete("/delete/:id", (req, res) => {
    courseCollection
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        res.send(result.insertedCount > 0);
      });
  });
});
