import React, { useState, useEffect } from "react";

const ChatRoom = () => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState("general");

  //useEffect runs after the component has been rendered to the screen.
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>

      {show && (
        <>
          <hr />
          <label>
            Server URL:
            <input
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
            />
          </label>
          <h2>Welcome to the {roomId} room!</h2>
        </>
      )}
    </>
  );
};
export default ChatRoom;

export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    // Using the object literal shorthand syntax, you can define methods directly without using the function keyword.
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}
