import { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (input.trim() === '') return;
        const newMessage = { role: 'user', content: input };
        setMessages([...messages, newMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('/api/openai-chat', {
                message: input,
            });
            const assistantMessage = {
                role: 'assistant',
                content: response.data.message,
            };
            setMessages([...messages, newMessage, assistantMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    disabled={isLoading}
                />
                <button onClick={sendMessage} disabled={isLoading}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat; 
