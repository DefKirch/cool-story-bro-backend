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

router.delete("/story/:id", authMiddleware, async (req, res, next) => {
  try {
    const idToDelete = parseInt(req.params.id);
    await Story.destroy({
      where: { id: idToDelete },
    });
    res.status(200).send("Story deleted succesfully");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/createstory/:id", authMiddleware, async (req, res, next) => {
  try {
    const { name, content, imageUrl } = req.body;
    // console.log(name, content, imageUrl);
    const spaceId = parseInt(req.params.id);
    const response = await Story.create({
      name,
      content,
      imageUrl,
      spaceId,
    });
    res.status(200).send("Story succesfully created");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;
