import React from "react";
import PropTypes from "prop-types";
import { StatisticsListStyled, StatisticsItemStyled, StatisticsItemResultStyled, StatisticsStyled } from "./Statistics.styled";

export const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
return (
    <StatisticsStyled>
<StatisticsListStyled>
            <li>
              <StatisticsItemStyled>
                Good:&nbsp;<StatisticsItemResultStyled>{good}</StatisticsItemResultStyled>
              </StatisticsItemStyled>
            </li>
            <li>
              <StatisticsItemStyled>
                Neutral:&nbsp;<StatisticsItemResultStyled>{neutral}</StatisticsItemResultStyled>
              </StatisticsItemStyled>
            </li>
            <li>
              <StatisticsItemStyled>
                Bad:&nbsp;<StatisticsItemResultStyled>{bad}</StatisticsItemResultStyled>
              </StatisticsItemStyled>
            </li>
          </StatisticsListStyled>
          <StatisticsItemStyled>
            Total:&nbsp;<StatisticsItemResultStyled>{total}</StatisticsItemResultStyled>
          </StatisticsItemStyled>
          <StatisticsItemStyled>
            Positive feedback:&nbsp;<StatisticsItemResultStyled>{positivePercentage}%</StatisticsItemResultStyled>
          </StatisticsItemStyled>
          </StatisticsStyled>
);
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
