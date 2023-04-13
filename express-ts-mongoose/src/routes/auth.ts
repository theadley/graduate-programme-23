// BAD JUJU!


/**
* components:
*  schemas:
*    User:
*      type: object
*      required:
*      - email
*      - password
*      - name
*      properties:
*        email:
*          type: string
*          format: email
*        password:
*          type: string
*          format: password
*          writeOnly: true
*        name:
*          type: string
*/

/**
 * /api/auth:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Log in as user
 *     description: Returns the user data and authentication token on succesful login
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User succesfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *       '401':
 *         description: User verification required
 *       '403':
 *         description: Invalid credentials
 */