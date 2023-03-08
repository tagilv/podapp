import { Container } from "@mui/system";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import { AuthContext } from "../context/AuthContext";
import { Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const getMessages = () => {
    const q = query(collection(db, "Chat"), orderBy("date"));
    onSnapshot(q, (querySnapshot) => {
      const myMessages = [];
      querySnapshot.forEach((doc) => {
        const msgObject = {
          id: doc.id,
          ...doc.data(),
        };
        myMessages.push(msgObject);
      });
      setChatMessages(myMessages);
    });
  };

  const messageDate = (date) => {
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
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Edit message to be implemented
  const handleEditMessage = async (e) => {
    const docRef = doc(db, "Chat", e.currentTarget.id);

    await updateDoc(docRef, {
      text: "tba",
    });
  };

  const handleDeleteMessage = async (e) => {
    await deleteDoc(doc(db, "Chat", e.currentTarget.id));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <Container>
        <Typography variant="h6">Chat with other podcast listeners</Typography>

        <TextField
          fullWidth
          type="text"
          value={message}
          name="chat"
          onChange={handleMessageChange}
          placeholder="type something"
        />
        <Button onClick={handleSubmitMessage}>
          <SendIcon />
        </Button>
        {chatMessages &&
          chatMessages.map((message, index) => {
            return (
              <div key={index} style={{ backgroundColor: "lightgrey" }}>
                <p>{message.author}</p>
                <p>{message.text}</p>
                <p>{messageDate(message.date)}</p>
                {/* <button id={message.id} onClick={handleEditMessage}>
                  Edit
                </button> */}
                <button id={message.id} onClick={handleDeleteMessage}>
                  Delete
                </button>
              </div>
            );
          })}
      </Container>
    </div>
  );
}

export default Chat;
