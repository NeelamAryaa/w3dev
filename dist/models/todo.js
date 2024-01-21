"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/ToDo.ts
const mongoose_1 = __importDefault(require("mongoose"));
const ToDoSchema = new mongoose_1.default.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
});
const ToDo = mongoose_1.default.model("ToDo", ToDoSchema);
exports.default = ToDo;
