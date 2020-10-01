/**
 * Requires
 */
const expres = require("express")
const router = expres.Router();
const service = require("./unoService")


/**
 * End Points
 */
// CERATE
router.post("/:id", service.create)

// READ
router.get("/:id", service.read)

// READ ALL
router.get("/", service.read_all)

// UPDATE
router.get("/", service.update)

// DELETE
router.get("/", service.delete)


/**
 * Export api
 */
module.exports = router;