"use client";

import styled from "styled-components";

export const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.75rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #1e293b;
  flex: 1;
  padding-right: 1rem;
  word-wrap: break-word;
`;

export const VoteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const VoteArrow = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #10b981;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const VoteCount = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
`;
