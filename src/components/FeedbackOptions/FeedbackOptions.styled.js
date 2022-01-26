import styled from "styled-components";

const FeedbackListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 10px auto;
  list-style: none;
  align-items: center;
`;

const FeedbackButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
  border: double 5px black;
  border-radius: 5px;
  width: 180px;

  :hover {
    background: linear-gradient(45deg, #f5f7fa, #c3cfe2);
    transform: scale(1.1);
    font-weight: bold;
  }
`;

export { FeedbackListStyled, FeedbackButtonStyled };
