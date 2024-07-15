import PropTypes from 'prop-types';
import styles from './Chip.module.scss';

const Chip = (props) => {
  return (
    <div className={styles.chipContainer}>
      <div className={styles.chipWrapper}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

Chip.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Chip;
