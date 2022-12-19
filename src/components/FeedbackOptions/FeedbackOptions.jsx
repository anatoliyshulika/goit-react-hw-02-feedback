import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const capitalizeFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function FeedbackOptions({ text, onLeaveFeedback }) {
  return (
    <Button type="button" name={text} onClick={onLeaveFeedback}>
      {capitalizeFirst(text)}
    </Button>
  );
}

FeedbackOptions.propTypes = {
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
