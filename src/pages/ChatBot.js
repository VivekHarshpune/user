import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Ensure you have this CSS file for styling

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isVisible, setIsVisible] = useState(true); // State to control visibility of the chatbot
    const [isTyping, setIsTyping] = useState(false); // State for typing indicator
    const messagesEndRef = useRef(null); // Ref to scroll to the bottom

    useEffect(() => {
        // Check localStorage to see if the chatbot should be hidden
        const chatbotVisible = localStorage.getItem('chatbotVisible') === 'true';
        setIsVisible(chatbotVisible);

        // If the chatbot is visible, show the welcome message
        if (chatbotVisible) {
            const welcomeMessage = {
                text: "Welcome to CommunityBook! I am CommunityBot, your personal chatbot here to help.",
                sender: 'bot'
            };
            setMessages([welcomeMessage]);
        }
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the messages when they change
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (inputValue.trim()) {
            const userMessage = { text: inputValue, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            console.log("User message sent:", inputValue); // Log user message

            // Handle specific command for contact info
            if (inputValue.toLowerCase().includes("contact")) {
                const contactInfo = {
                    text: "Reach us at:\nEmail: support@communitybook.com\nPhone: 9931198029",
                    sender: 'bot'
                };
                setMessages((prevMessages) => [...prevMessages, contactInfo]);
                setInputValue('');
                return;
            }

            setInputValue('');
            setIsTyping(true); // Start typing indicator

            try {
                // Get the bot's response from Dialogflow
                const botResponse = await getBotResponse(inputValue);
                console.log("Bot response received:", botResponse); // Log bot response

                // Add a small delay to simulate typing
                setTimeout(() => {
                    setMessages((prevMessages) => [...prevMessages, botResponse]);
                    setIsTyping(false); // Stop typing indicator after response
                }, 1000); // 1 second delay for typing simulation
            } catch (error) {
                console.error("Error while sending message:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Sorry, I'm having trouble answering that right now.", sender: 'bot' }
                ]);
                setIsTyping(false); // Ensure typing indicator is reset
            }
        }
    };

    const getBotResponse = async (input) => {
        try {
            console.log("Sending input to Dialogflow:", input); // Log the input
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/chat`, {
                query: input,
                sessionId: '12345',
            });

            console.log("Response from Dialogflow:", response.data); // Log the response
            const botReply = response.data.reply || "Sorry, I'm having trouble answering that right now."; // Handle missing reply
            return { text: botReply, sender: 'bot' };
        } catch (error) {
            console.error("Error fetching response from Dialogflow:", error.response ? error.response.data : error.message);
            return { text: "Sorry, I'm having trouble answering that right now.", sender: 'bot' };
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleCloseChatbot = () => {
        setIsVisible(false); // Close the chatbot
        localStorage.setItem('chatbotVisible', 'false'); // Store visibility state
    };

    const handleOpenChatbot = () => {
        setIsVisible(true); // Open the chatbot
        localStorage.setItem('chatbotVisible', 'true'); // Store visibility state

        // Check if the welcome message already exists
        const welcomeMessageText = "Welcome to Community Book! I am CommUnityBot, your personal chatbot here to help.";
        const welcomeMessageExists = messages.some(msg => msg.text === welcomeMessageText && msg.sender === 'bot');

        // Only add the welcome message if it doesn't already exist
        if (!welcomeMessageExists) {
            const welcomeMessage = {
                text: welcomeMessageText,
                sender: 'bot'
            };
            setMessages((prevMessages) => [welcomeMessage, ...prevMessages]);
        }
    };

    if (!isVisible) return (
        <button onClick={handleOpenChatbot} className="open-chatbot-button">
            Open Chatbot
        </button>
    ); // Render button if the chatbot is closed

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2>Community Book Chatbot</h2>
                <button onClick={handleCloseChatbot} className="close-button">✖</button>
            </div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
                {isTyping && (
                    <div className="typing-indicator">
                        <span>CommunityBot is typing...</span>
                    </div>
                )}
                {/* Scroll target */}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="chat-input"
                />
                <button onClick={handleSendMessage} className="send-button" disabled={!inputValue.trim()}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
