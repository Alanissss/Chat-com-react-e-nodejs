import React, { useRef, useState, useEffect } from 'react'

export default function Chat({socket}) {

  const messageRef = useRef()
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList((current) =>  [...current, data])
    }) 

    return () => socket.off('receive_message')
  }, [socket])

  const handleSubmit = () => {
    const message = messageRef.current.value 
    if (!message.trim()) return

    socket.emit('message', message)
    clearInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }
  
  return (
      <div className="chat-container">
      <header className="chat-header">
        <h1 className="chat-title">Chat</h1>
      </header>
      <div className="message-list">
        {messageList.map((message, index) => (
        <div key={index} className={`message ${message.author === 'Me' ? 'sent' : 'received'}`}>
          {message.author === 'Me' ? (
            <div className="message-sent">{message.text}</div>
          ) : (
            <div className="message-received">
              <span className="author-name">{message.author}</span>: {message.text}
            </div>
          )}
          <span className="timestamp">{message.timestamp}</span>
        </div>

        ))}
      </div>
      <div className="input-container">
        <input className="message-input" type="text" ref={messageRef} placeholder="Digite sua mensagem" />
        <button className="send-button" onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

