import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.85rem 1.1rem;
  font-size: 1rem;
  border-radius: 14px;
  border: none;
  background: #f3f4f6;
  color: #111827;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04),
    inset 2px 2px 4px rgba(255, 255, 255, 0.5),
    inset -2px -2px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease, background 0.2s ease;

  &:focus {
    outline: none;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 220, 190, 0.4);
  }
`;

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #34d399, #38bdf8);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(52, 211, 153, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(52, 211, 153, 0.45);
  }

  &:active {
    transform: scale(0.97);
  }
`;
