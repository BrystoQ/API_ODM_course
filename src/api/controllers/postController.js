const Post = require("../models/postModel");

exports.listAllPosts = (req, res) => {
  Post.find({}, (error, posts) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Server error." });
    } else {
      res.status(200);
      res.json(posts);
    }
  });
};

exports.createAPost = (req, res) => {
  let newPost = new Post(req.body);

  newPost.save((error, post) => {
    if (error) {
      res.status(401);
      console.log(error);
      res.json({ message: "Invalid Request." });
    } else {
      res.status(201);
      res.json(post);
    }
  });
};

exports.getAPost = (req, res) => {
  Post.findById(req.params.post_id, (error, post) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Server error." });
    } else {
      res.status(200);
      res.json(post);
    }
  });
};

exports.updateAPost = (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.params.post_id },
    req.body,
    { new: true },
    (error, post) => {
      if (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Server error." });
      } else {
        res.status(200);
        res.json(post);
      }
    }
  );
};

exports.deleteAPost = (req, res) => {
  Post.remove({ _id: req.params.post_id }, (error) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Server error." });
    } else {
      res.status(200);
      res.json({ message: "Deleted!" });
    }
  });
};
