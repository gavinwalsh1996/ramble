"use client";

import { useState } from "react";
import { usePostStore } from "@/store/postStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <Input
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Post</Button>
    </form>
  );
};
