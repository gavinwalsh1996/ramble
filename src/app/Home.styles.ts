"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Header = styled.h1`
  font-size: 2.75rem;
  text-align: center;
  font-weight: 900;
  background: linear-gradient(90deg, #59e4a8, #42caff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
`;

export const Subheader = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #4b5563; /* modern gray-700 */
  margin-bottom: 2.5rem;
  font-weight: 500;
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #9ca3af; /* gray-400 */
  font-style: italic;
  font-size: 0.95rem;
  margin-top: 1.5rem;
`;
