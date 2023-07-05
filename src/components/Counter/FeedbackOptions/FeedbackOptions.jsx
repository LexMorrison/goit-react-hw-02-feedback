import PropTypes from 'prop-types';
import { ButtonList, ButtonItem } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <ButtonItem type="button" name={option} onClick={onLeaveFeedback}>
              {option.replace(option[0], option[0].toUpperCase())}
            </ButtonItem>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
