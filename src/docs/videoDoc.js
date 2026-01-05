"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     ICreateVideoUploadRequest:
 *       type: object
 *       properties:
 *         video:
 *           type: string
 *           format: binary
 *           description: Video file (mp4, mov, dll)
 *         videoTitle:
 *           type: string
 *           maxLength: 100
 *           example: "Video Training Karyawan"
 *
 *     IUpdateVideoRequest:
 *       type: object
 *       properties:
 *         videoId:
 *           type: number
 *           example: 1
 *         videoTitle:
 *           type: string
 *           maxLength: 100
 *           example: "Video Training Updated"
 *         videoUrl:
 *           type: string
 *           example: "https://bucket.s3.ap-southeast-1.amazonaws.com/videos/xxx.mp4"
 *       required:
 *         - videoId
 *
 * tags:
 *   - name: VIDEOS
 *     description: Video management APIs
 */
/**
 * @swagger
 * /api/v1/videos:
 *   get:
 *     summary: Get all videos
 *     tags: [VIDEOS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         example: 10
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         example: training
 *       - in: query
 *         name: pagination
 *         schema:
 *           type: boolean
 *         example: true
 *     responses:
 *       200:
 *         description: List of videos
 */
/**
 * @swagger
 * /api/v1/videos/detail/{videoId}:
 *   get:
 *     summary: Get video detail by ID
 *     tags: [VIDEOS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Video detail
 *       404:
 *         description: Video not found
 */
/**
 * @swagger
 * /api/v1/videos:
 *   post:
 *     summary: Upload video
 *     tags: [VIDEOS]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/ICreateVideoUploadRequest'
 *     responses:
 *       201:
 *         description: Video uploaded successfully
 *       400:
 *         description: Video not found or invalid input
 */
/**
 * @swagger
 * /api/v1/videos:
 *   patch:
 *     summary: Update video
 *     tags: [VIDEOS]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IUpdateVideoRequest'
 *     responses:
 *       200:
 *         description: Video updated successfully
 *       404:
 *         description: Video not found
 */
/**
 * @swagger
 * /api/v1/videos/{videoId}:
 *   delete:
 *     summary: Delete video
 *     tags: [VIDEOS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Video deleted successfully
 */
