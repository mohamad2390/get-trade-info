const express = require('express');
const router = express.Router();
const CheckController = require('../../app/Http/Controllers/CheckController');
//---------------------------------------------
/**
 * @swagger
 * /api/size/checksize:
 *   post:
 *     summary: check user cloths size 
 *     tags: 
 *      - Size-controller
 *     description: check user cloths size 
 *     parameters:
 *       - name: gender
 *         in: query
 *         description: جنسیت برای دختران 0 و برای پسران 1
 *         required: true
 *         type: integer
 *       - name: section
 *         in: query
 *         description: مقطع برای پیش دبستان و دبستان 1 و برای متوسطه 2
 *         required: true
 *         type: integer
 *       - name: bust_circ
 *         in: query
 *         description: دور سینه
 *         required: true
 *         type: integer
 *       - name: waist_circ
 *         in: query
 *         description: دور کمر
 *         required: true
 *         type: integer
 *       - name: hip_circ
 *         in: query
 *         description: دور باسن
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: سایز کابر محاسبه شد
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: true
 *                 result_code:
 *                   type: integer
 *                   example: 200
 *                 result_message:
 *                   type: string
 *                   example: سایز کابر محاسبه شد (پارامتر اول سایز بالا تنه و پارامتر دوم سایز شلوار)
 *                 result:
 *                   type: arry
 *                   example: [34,34]
 *       401:
 *         description: سایز کاربر خارج از سایز بندی است
 */
// router.post('/check',
//     CheckController.check);
//---------------------------------------------
/**
 * @swagger
 * /api/check/check:
 *   post:
 *     summary: Rebuild the users password
 *     tags: 
 *      - User-controller
 *     description: Put a new password instead of the forgotten one.
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The user's phone number or email.
 *                 example: '09136988094'
 *               newPassword:
 *                 type: string
 *                 description: The user's newPassword.
 *                 example: 12345
 *     responses:
 *       200:
 *         description: the new password send for user.
 *       401:
 *         description: TThe username or password is empty.
 *       404:
 *         description: The Username not found.
 */
router.post('/check',
    CheckController.check);

module.exports = router;