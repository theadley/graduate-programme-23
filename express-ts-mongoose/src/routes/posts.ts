import express, { Request, Response } from 'express';
import { IPost, Post } from '../models/post';

const router = express.Router();

/**
 * @openapi
 * /api/posts:
 *   get:
 *     tags:
 *       - Posts
 *     summary: List all posts
 *     description: Fetches all Post objects from the database and lists them.
 *     responses:
 *       200:
 *         description: A list of posts is returned
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       500:
 *         description: A server error occured
 *   post:
 *     tags:
 *       - Posts
 *     summary: Create a new post
 *     description: Creates a new post and returns the newly created post from the database.
 *     requestBody:
 *       description: The new post to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: A new Post has successfully been created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: A server error occured
 */

router
  .route('/posts')
  .get(async (req: Request, res: Response) => {
    Post
      .find()
      .exec()
      .then((posts) => {
        return res.json(posts);
      })
      .catch((err) => {
        return res.status(500).send(err.message);
      })
  })
  .post((req: Request, res: Response) => {
    // Validate against schema with zod/yup
    const post = new Post(req.body as IPost);
    post
      // this runs schema validation, db insertion, local version update with db value
      .save()
      .then(post => {
        return res.json(post);
      })
      .catch((err) => {
        return res.status(500).send(err.message);
      })
  });


/**
 * @openapi
 * /api/posts/{id}:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Returns post by id
 *     description: Fetches a Post by its id reference.
 *     parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The id of the post to get
 *     responses:
 *       200:
 *         description: A post is returned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: A server error occured
 *   put:
 *     tags:
 *       - Posts
 *     summary: Update a new post
 *     description: Updates an existing post and returns the newly updated post from the database.
 *     parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The id of the post to update
 *     requestBody:
 *       description: The new post to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post has successfully been updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: A server error occured
 *   delete:
 *     tags:
 *       - Posts
 *     summary: Delete a new post
 *     description: Deletes an existing post
 *     parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The id of the post to delete
 *     responses:
 *       200:
 *         description: Post has successfully been deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                 deletedCount:
 *                   type: number
 *                   default: 1
 *       500:
 *         description: A server error occured
 */

router
  .route('/posts/:id')
  .get((req: Request, res: Response) => {
    Post
      .findOne({ id: req.params.id })
      .exec()
      .then((post) => {
        return res.json(post);
      })
      .catch((err) => {
        return res.status(500).send(err.message);
      })
  })
  .put((req: Request, res: Response) => {
    // Find and replace at id
    Post
      // Does not validate
      // Replace with find().save()
      .findOneAndReplace(
        { id: req.params.id },
        { ...req.body }
      )
      .exec()
      .then((post) => {
        return res.json(post);
      })
      .catch((err) => {
        return res.status(500).send(err.message);
      });
  })
  // .patch((req: Request, res: Response) => {
  //   // Find and update fields at id
  //   res.send(`Update A Post (${req.params.id})`)
  // })
  .delete((req: Request, res: Response) => {
    Post
      .deleteOne({ id: req.params.id })
      .exec()
      .then((post) => {
        return res.json(post);
      })
      .catch((err) => {
        return res.status(500).send(err.message);
      });
  });

export { router as postsRouter };
