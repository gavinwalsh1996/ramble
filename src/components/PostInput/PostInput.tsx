"use client";

import { useState } from "react";
import { usePostStore } from "@/store/postStore";
import { Form, StyledInput, StyledButton } from "./PostInput.styles";

export const PostInput = () => {
  const [text, setText] = useState("");
  const { addPost } = usePostStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    await addPost(text.trim());
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput
        placeholder="What's on your mind today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <StyledButton type="submit">Post</StyledButton>
    </Form>
  );
};
