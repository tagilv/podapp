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
    // try {
    //   const myMessages = [];
    //   const querySnapshot = getDocs(collection(db, "Chat"));
    //   querySnapshot.forEach((doc) => {
    //     console.log("doc>>", doc);
    //     console.log(`${doc.id} => ${doc.data()}`);
    //     myMessages.push(doc.data());
    //     console.log("myMessages", myMessages);
    //     setChatMessages(myMessages);
    //   });
    //   console.log("myMessages>>", myMessages);
    // } catch (error) {
    //   console.log(error);
    // }
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
      <h2>Chat starts here</h2>
      <input
        type="text"
        value={message}
        name="chat"
        onChange={handleMessageChange}
        placeholder="chat here"
      />
      <button onClick={handleSubmitMessage}>send</button>
      {chatMessages &&
        chatMessages.map((message, index) => {
          return (
            <div key={index} style={{ backgroundColor: "yellow" }}>
              <p>{message.author}</p>
              <p>{message.text}</p>
              <p>{messageDate(message.date)}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Chat;
