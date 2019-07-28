"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.send('Tour booking api');
});
app.get('/tours', (req, res, next) => {
    res.send('Get the tour list biatch');
});
app.post('/tours', (req, res, next) => {
    res.send('Add a new tour');
});
app.listen(8080, () => console.log('server started...'));
