"use client";

import styled from "styled-components";
import {
  CardWrapper,
  PostContent,
  PostText,
  VoteSection,
  VoteArrow,
  VoteCount,
} from "./PostCard.styles";

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
  const voteCount = upvotes - downvotes;

  return (
    <CardWrapper>
      <PostContent>
        <PostText>{text}</PostText>
        <VoteSection>
          <VoteArrow onClick={() => onVote(id, "upvote")}>⬆</VoteArrow>
          <VoteCount>{voteCount}</VoteCount>
          <VoteArrow onClick={() => onVote(id, "downvote")}>⬇</VoteArrow>
        </VoteSection>
      </PostContent>
    </CardWrapper>
  );
};
