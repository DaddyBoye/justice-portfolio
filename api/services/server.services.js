const messageModel = require('../models/message.model');

class ServerServices {
    //function to create a new message
    static async createMessage(name, message, date, time) {
        try {
            const newMessage = new messageModel({ name, message, date, time });
            return await newMessage.save();
        } catch (error) {
            console.error("Error creating message:", error);
            throw error; // Re-throw the error to be handled by the controller
        }
    }
 
    //function to fetch all messages from database
    static async fetchMessages() {
        try {
            const messages = await messageModel.find();
            return messages;
        } catch (error) {
            console.error("Error fetching messages:", error);
            throw error; // Re-throw the error to be handled by the controller
        }
    }
}

module.exports = ServerServices;
