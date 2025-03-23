"use client";

import styled from "styled-components";
import { ChevronUp, ChevronDown } from "lucide-react";
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
          <VoteArrow onClick={() => onVote(id, "upvote")}>
            <ChevronUp size={18} />
          </VoteArrow>
          <VoteCount>{voteCount}</VoteCount>
          <VoteArrow onClick={() => onVote(id, "downvote")}>
            <ChevronDown size={18} />
          </VoteArrow>
        </VoteSection>
      </PostContent>
    </CardWrapper>
  );
};
