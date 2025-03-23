"use client";

import styled from "styled-components";
import { CardWrapper, PostText, VoteRow, VoteButton } from "./PostCard.styles";

type PostCardProps = {
  id: string;
  text: string;
  upvotes: number;
  downvotes: number;
  onVote: (postId: string, type: "upvote" | "downvote") => void;
};

export const PostCard = ({
  id,
  text,
  upvotes,
  downvotes,
  onVote,
}: PostCardProps) => {
  return (
    <CardWrapper>
      <PostText>{text}</PostText>
      <VoteRow>
        <VoteButton onClick={() => onVote(id, "upvote")} $type="up">
          ⬆ {upvotes}
        </VoteButton>
        <VoteButton onClick={() => onVote(id, "downvote")} $type="down">
          ⬇ {downvotes}
        </VoteButton>
      </VoteRow>
    </CardWrapper>
  );
};
