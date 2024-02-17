import React, { useRef } from 'react';
import io from 'socket.io-client';

export default function Join({ setChatVisibility, setSocket }) {

    const usernameRef = useRef();

    const handleSubmit = async () => {
        const username = usernameRef.current.value.trim();
        if (!username.trim()) return;
        const socket = await io.connect('http://localhost:3001');
        socket.emit('join', username); // Enviar o nome do usuário para o servidor
        setSocket(socket)
        setChatVisibility(true);
    };

    return (
    <div className="join-container">
      <h1 className='h1-join'>Entrar no Chat</h1>
      <div className="input-wrapper">
        <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      </div>
      <button onClick={handleSubmit}>Entrar</button>
    </div>
    );
}

