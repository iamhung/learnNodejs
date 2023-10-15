const express = require("express");

const {
  getHomePage,
  postCreateUser,
  postUpdateUser,
  getUpdateUsers,
  deleteUser,
} = require("../controllers/homeController");

const router = express.Router();

/**
 * @openapi
 * '/users':
 *  get:
 *     tags:
 *     - User
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  email:
 *                    type: string
 *                  name:
 *                    type: string
 *                  city:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get("/users", getHomePage);

/**
 * @openapi
 * '/users/{id}':
 *  get:
 *     tags:
 *     - User
 *     summary: Get all users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the user
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  firstName:
 *                    type: string
 *                  lastName:
 *                    type: string
 *                  email:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get("/users/:id", getUpdateUsers);

/**
 * @openapi
 * '/user':
 *  post:
 *     tags:
 *     - User
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post("/user", postCreateUser);

/**
 * @openapi
 * '/user/{id}':
 *  put:
 *     tags:
 *     - User
 *     summary: Modify a user by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the user
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - name
 *              - city
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 * 
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put("/user/:id", postUpdateUser);

/**
 * @openapi
 * '/user/{id}':
 *  delete:
 *     tags:
 *     - User
 *     summary: Remove user by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete("/user/:id", deleteUser);

module.exports = router;
