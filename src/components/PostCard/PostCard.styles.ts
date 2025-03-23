"use client";

import styled from "styled-components";

export const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(52, 211, 153, 0.1);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.75rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
`;

export const PostText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #1e293b;
  word-wrap: break-word;
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
      ? "linear-gradient(135deg, #22c55e, #2dd4bf)"
      : "linear-gradient(135deg, #f87171, #fb7185)"};
  color: #fff;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;
