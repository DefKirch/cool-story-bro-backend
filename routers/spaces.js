const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Space = require("../models/").space;
const Story = require("../models/").story;
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const spaces = await Space.findAll();
    // console.log(spaces);
    res.send(spaces);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/spaces/:id", async (req, res, next) => {
  try {
    const spaceId = req.params.id;
    console.log("spaceId", spaceId);
    const spaceWithStories = await Space.findByPk(spaceId, {
      include: [Story],
    });
    res.send(spaceWithStories);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
