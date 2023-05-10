import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onFeedback }) {
  return options.map(option => (
    <button
      type="button"
      className={s.button}
      key={option}
      onClick={() => onFeedback(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
