const {Router} = require("express");
const {handleAddmembers, handleNameSearch, handlechildNameSearch, getAllMembers} = require("../controller/user");

const router = Router();

router.post("/add", handleAddmembers);
router.post("/search/person", handleNameSearch);
router.post("/search/child", handlechildNameSearch);

router.get("/search/allmembers", getAllMembers);


module.exports = router;