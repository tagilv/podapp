import { Container } from "@mui/system";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import { AuthContext } from "../context/AuthContext";

function Chat() {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const getMessages = () => {
    const q = query(collection(db, "Chat"));
    onSnapshot(q, (querySnapshot) => {
      const myMessages = [];
      querySnapshot.forEach((doc) => {
        myMessages.push(doc.data());
      });
      setChatMessages(myMessages);
      console.log("chat messages", myMessages);
    });
  };

  const messageDate = (date) => {
    // console.log("date", date.toString());
    return new Date(date.seconds * 1000).toLocaleString();
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = async (e) => {
    try {
      const docRef = await addDoc(collection(db, "Chat"), {
        text: message,
        date: new Date(),
        author: user.displayName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log("message submitted>>", message);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <Container>
        <h2>Chat with other users here</h2>
        <input
          type="text"
          value={message}
          name="chat"
          onChange={handleMessageChange}
          placeholder="..."
        />
        <button onClick={handleSubmitMessage}>Chat</button>
        {chatMessages &&
          chatMessages.map((message, index) => {
            return (
              <div key={index} style={{ backgroundColor: "lightgrey" }}>
                <p>{message.author}</p>
                <p>{message.text}</p>
                <p>{messageDate(message.date)}</p>
              </div>
            );
          })}
      </Container>
    </div>
  );
}

export default Chat;
