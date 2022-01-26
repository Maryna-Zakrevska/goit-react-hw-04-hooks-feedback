import styled from "styled-components";

const StatisticsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0px auto;
  list-style: none;
  align-items: center;
  border: double 5px black;
  width: 170px;
  background: linear-gradient(45deg, #e6e9f0, #eef1f5);
  border-radius: 5px;

`;

const StatisticsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0px auto;
  list-style: none;
  align-items: center;
`;

const StatisticsItemStyled = styled.p`
 
  align-items: center;
  justify-content: center;
  font-size: 14px;

`;

const StatisticsItemResultStyled = styled.span`
  align-items: center;
  justify-content: center;
  font-size: 16px;
    font-weight: bold;

`;

export { StatisticsListStyled, StatisticsItemStyled, StatisticsItemResultStyled, StatisticsStyled };
