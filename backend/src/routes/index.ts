import { Router, Request, Response } from 'express';

const index = Router();

index.get('/', (req, res) => res.send('Hello world!'));

export default index;