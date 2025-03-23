"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 800;
  background: linear-gradient(90deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

export const Subheader = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #aaa;
  font-style: italic;
  margin-top: 1.5rem;
`;
