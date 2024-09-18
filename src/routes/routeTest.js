import { Router } from 'express';
import packageJson from '../../package.json' assert { type: 'json' };

export const testeRouter = Router();

testeRouter.use('/', (_, response) => {
  const { description, author } = packageJson;

  response.status(200).json({ description, author });
});
