import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";
function ChatInput({ channelName, channelId,chatRef }) {
  const [input, setInput] = useState("");
  console.log("channelId", channelId);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      /// lấy time trong firebase
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Thương Nguyễn ",
      userImage:
        "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-1/p200x200/149351234_744141612897095_8519546040616884683_o.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_ohc=-INl0w429VAAX9ZRR08&_nc_ht=scontent.fsgn2-2.fna&tp=6&oh=e8c84f8d399884bae0d2a8376e1852ab&oe=60623B43",
    });
    /// hàm kéo xuống bằng UseRef
    chatRef?.current?.scrollIntoView({
        behavior:"smooth",
    });

    setInput('');
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          placeholder={`Messages #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border-radius: 3px;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }
  > form > Button {
    display: none !important;
  }
`;
