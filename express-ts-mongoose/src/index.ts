import express from 'express';
import mongoose from 'mongoose';
import { Post } from './models/post';
import { postsRouter } from './routes/posts';

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const m2s = require('mongoose-to-swagger');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    components: {
      schemas: {
        Post: m2s(Post, { omitFields: ['_id'] })
      }
    },
    info: {
      title: 'Posts API',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.ts']
};
const openAPISpecifications = swaggerJsdoc(swaggerOptions);

const port = 3000;
const app = express();
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/posts')
  .then(() => console.log('connected to mongodb'))
  .catch(console.error)

app.use('/api', postsRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openAPISpecifications))

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
