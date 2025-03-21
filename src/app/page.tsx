"use client";

import { useEffect } from "react";
import { usePostStore } from "@/store/postStore";
import { PostInput } from "@/components/PostInput";

export default function Home() {
  const { posts, fetchPosts, votePost } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostInput />
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded shadow-sm mb-4 bg-white"
          >
            <p className="mb-1">{post.text}</p>

            <div className="flex gap-4 text-sm text-gray-600 items-center mt-2">
              <button
                className="hover:text-green-600"
                onClick={() => votePost(post.id, "upvote")}
              >
                ⬆ {post.upvotes}
              </button>
              <button
                className="hover:text-red-600"
                onClick={() => votePost(post.id, "downvote")}
              >
                ⬇ {post.downvotes}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
