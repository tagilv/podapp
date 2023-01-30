import { Container } from "@mui/system";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
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
        // console.log("doc.id>>", doc.id);
        // myMessages.push(doc.data());
        myMessages.push(msgObject);
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
      console.log(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log("message submitted>>", message);
  };

  // recive the event
  const handleEditMessage = async (e) => {
    console.log(e.currentTarget.id);
    const docRef = doc(db, "Chat", e.currentTarget.id);

    await updateDoc(docRef, {
      text: "tba",
    });
  };

  // Need display input with current text and then ability to edit
  // Input thats hidden that is being displayed ewhne clicking on edit
  // curretn message text as value of input, edits the input and the sedns it, last button to cinfm to send, this is the onme that triggering the hedit message

  // Comments
  // have cusotm id and then  in the comments
  // retirve the id when opening the podcast comments

  const handleDeleteMessage = async (e) => {
    console.log("e.currentTarget", e.currentTarget.id);
    await deleteDoc(doc(db, "Chat", e.currentTarget.id));
    console.log("e", e);
    console.log("e.currentTarget", e.currentTarget);
    console.log("e.target", e.target);
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
                {/* Id to the div that corresponds to message id  */}
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
