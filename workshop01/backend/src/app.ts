import express from 'express';
import cors from 'cors';
import { quotes } from './routes/index';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use('/api/quotes', quotes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
