"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getUsers);
// router.get('/:id', getUser);
router.post('/', userController_1.createUser);
// router.put('/:id', putUser);
// router.delete('/:id', deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map