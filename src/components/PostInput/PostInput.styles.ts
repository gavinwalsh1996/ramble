import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(145deg, #f0f0f3, #cacaca);
  box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 3px #c084fc66;
    background: white;
  }
`;

export const StyledButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
`;
