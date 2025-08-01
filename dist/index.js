"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
const client = new client_1.PrismaClient();
app.use(express_1.default.json());
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany({});
    res.json({ res: "user get", users: users });
}));
app.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.create({
        data: {
            name: "christopher" + Math.random().toString(),
            password: Math.random().toString(),
            username: Math.random().toString(),
        },
    });
    res.json({ res: "user created" });
}));
app.listen(PORT, () => {
    console.log("server running on port 4000");
});
