
import React, { useState, useRef, useEffect } from "react";
import "./ChatWidget.css";

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            text: "Hi! 👋 Welcome to JobsFactory. How can we help you?",
            sender: "support",
        },
    ]);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = (event) => {
        event.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage) return;

        setMessages((prev) => [
            ...prev,
            { text: trimmedMessage, sender: "user" },
            {
                text: "Thanks for contacting JobsFactory! This demo chat isn't connected to a live support team yet.",
                sender: "support",
            },
        ]);

        setMessage("");
    };

    return (
        <div className="chat-widget">
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="chat-avatar">
                                <i className="bi bi-headset" />
                            </div>
                            <div>
                                <h5>JobsFactory Support</h5>
                                <span>
                                    <span className="chat-status-dot" />
                                    How can we help?
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="chat-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            <i className="bi bi-x-lg" />
                        </button>
                    </div>

                    <div className="chat-messages" aria-live="polite">
                        <div className="chat-date-label">
                            Chat with us
                        </div>

                        {messages.map((item, index) => (
                            <div
                                key={index}
                                className={`chat-message-row ${item.sender}`}
                            >
                                <div className="chat-message">
                                    {item.text}
                                </div>
                            </div>
                        ))}

                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chat-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Type your message..."
                            aria-label="Type your message"
                            maxLength={1000}
                        />

                        <button
                            type="submit"
                            aria-label="Send message"
                            disabled={!message.trim()}
                        >
                            <i className="bi bi-send-fill" />
                        </button>
                    </form>
                </div>
            )}

            <button
                className="chat-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                <i className={isOpen ? "bi bi-x-lg" : "bi bi-chat-dots-fill"}></i>
            </button>
        </div>
    );
}

export default ChatWidget;