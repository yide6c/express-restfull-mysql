const express = require("express");
const router = express.Router();
const todos = require("../entities/todos");
const { sendResponse } = require("../responseHandler");

router.get("/all", async (req, res) => {
    try {
        const result = await todos.getAll();
        sendResponse(res, result);
    } catch (error) {
        sendResponse(res, null, error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await todos.getById(req.params.id);
        sendResponse(res, result);
    } catch (error) {
        sendResponse(res, null, error);
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await todos.add(req.body);
        sendResponse(res, result);
    } catch (error) {
        sendResponse(res, null, error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = await todos.update(req.params.id, req.body);
        sendResponse(res, result);
    } catch (error) {
        sendResponse(res, null, error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await todos.delete(req.params.id);
        sendResponse(res, result);
    } catch (error) {
        sendResponse(res, null, error);
    }
});

module.exports = router;
