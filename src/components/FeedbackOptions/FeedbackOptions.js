import React from "react";
import PropTypes from "prop-types";
import{FeedbackListStyled, FeedbackButtonStyled} from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackListStyled>
        <li>
          <FeedbackButtonStyled name="good" type="button" onClick={onLeaveFeedback}>
            Good &#128578;
          </FeedbackButtonStyled>
        </li>
        <li>
          <FeedbackButtonStyled name="neutral" type="button" onClick={onLeaveFeedback}>
            Neutral &#128528;
          </FeedbackButtonStyled>
        </li>
        <li>
          <FeedbackButtonStyled name="bad" type="button" onClick={onLeaveFeedback}>
            Bad &#128577;
          </FeedbackButtonStyled>
        </li>
      </FeedbackListStyled>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
