import express from 'express';
import cors from 'cors';          //we need cors origin because of frontend port is different from backend
const app = express();
app.listen(8000, () => console.log(`Server started on PORT:${8000}`));