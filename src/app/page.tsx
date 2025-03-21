"use client";

import { useEffect } from "react";
import { usePostStore } from "@/store/postStore";

export default function Home() {
  const { posts, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded shadow-sm mb-4 bg-white"
          >
            <p>{post.text}</p>
            <p className="text-sm text-gray-500">
              ⬆ {post.upvotes} | ⬇ {post.downvotes}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
