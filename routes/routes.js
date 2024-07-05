const {Router} = require("express");
const {handleAddmembers, handleNameSearch, handlechildNameSearch, getAllMembers} = require("../controller/user");

const router = Router();

router.post("/api/add", handleAddmembers);
router.post("/api/search/person", handleNameSearch);
router.post("/api/search/child", handlechildNameSearch);

router.get("/api/search/allmembers", getAllMembers);


module.exports = router;