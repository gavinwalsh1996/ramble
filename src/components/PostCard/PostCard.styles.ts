"use client";

import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.1);
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  transition: transform 0.15s ease;
`;

export const PostText = styled.p`
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
  color: #222;
`;

export const VoteRow = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  align-items: center;
`;

export const VoteButton = styled.button<{ $type: "up" | "down" }>`
  background: ${({ $type }) =>
    $type === "up"
      ? "linear-gradient(to right, #34d399, #10b981)"
      : "linear-gradient(to right, #f87171, #ef4444)"};
  color: white;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
