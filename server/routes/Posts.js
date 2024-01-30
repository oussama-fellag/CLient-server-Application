const express = require("express");
const router = express.Router();

const{Posts} = require("../models"); // jebna Posts men 2 fichiers te3 model
router.get("/", async(req, res) =>{
const listofpost = await Posts.findAll(); 
res.json(listofpost); 
  // test router API
}); 
router.post("/", async (req, res) => {
    const post =req.body;   // use insomina as body
    await Posts.create(post);
    res.json(post);  // response same as request json -json,....
    });

// // router.post();
module.exports = router;