const ServerServices = require('../services/server.services');
const { sendErrorResponse } = require('../utils/errorHandler');


// Function to fetch all contributions made
exports.fetchMessages = async (req, res, next) => {
    try {

        const messages = await ServerServices.fetchMessages();

        if (!messages) {
            return sendErrorResponse(res, 500, 'Error fetching messages');
        }

        res.json({ status: true, success: messages });
    } catch (error) {
        next(error);
    } 
}; 

// Function to create a new message
exports.createMessage = async (req, res, next) => {
    try { 
        const { name, message, date, time } = req.body;

        // Pass each field individually as arguments
        const newMessage = await ServerServices.createMessage(name, message, date, time);
 
        if (!newMessage) {
            return sendErrorResponse(res, 500, 'Error creating message');
        }

        res.json({ status: true, success: newMessage });
    } catch (error) {
        next(error);
    }
};