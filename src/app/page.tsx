"use client";

import { useEffect } from "react";
import { usePostStore } from "@/store/postStore";
import { PostInput } from "@/components/PostInput/PostInput";
import { PostCard } from "@/components/PostCard/PostCard";
import { PageWrapper, Header, Subheader, EmptyState } from "./Home.styles";

export default function Home() {
  const { posts, fetchPosts, votePost } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PageWrapper>
      <Header>Ramble.</Header>
      <Subheader>
        Got a thought? Drop it. Laugh? Upvote it. Let's ramble.
      </Subheader>
      <PostInput />
      {posts.length === 0 ? (
        <EmptyState> No posts yet. Be the first to ramble!</EmptyState>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            text={post.text}
            upvotes={post.upvotes}
            downvotes={post.downvotes}
            onVote={votePost}
          />
        ))
      )}
    </PageWrapper>
  );
}
