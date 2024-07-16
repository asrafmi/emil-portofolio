import styles from './GetInTouch.module.scss';
import Chip from '../Chip/Chip';
import InstagramIcon from '../../assets/getInTouch/instagram.svg'
import {
  EnvelopeIcon,
  PhoneIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';

const GetInTouch = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <section className={styles.getInTouch}>
      <div className={styles.getInTouchContainer}>
        <Chip title="Get in touch" />
        <p className={styles.descriptionText}>
          What’s next? Feel free to reach out to me if you want to connect.
        </p>
        <div className={styles.contactContainer}>
          <div className={styles.emailWrapper}>
            <a href="mailto:emily.khadijah28@gmail.com">
              <EnvelopeIcon className={styles.mailIcon} />
            </a>
            <p className={styles.email}>emily.khadijah28@gmail.com</p>
            <Square2StackIcon
              onClick={() => copyToClipboard('emily.khadijah28@gmail.com')}
              className={styles.squareIcon}
            />
          </div>
          <div className={styles.phoneWrapper}>
            <img src={InstagramIcon} className={styles.phoneIcon} />
            <p className={styles.phone}>@emilyykhn</p>
            <Square2StackIcon
              onClick={() => copyToClipboard('+@emilyykhn')}
              className={styles.squareIcon}
            />
          </div>
        </div>
        <div className={styles.platformContainer}>
          <p>You may also find me on these platforms!</p>
          <div className={styles.platformIconWrapper}>
            <img src="/icons/github.png" alt="github" />
            <img src="/icons/twitter.png" alt="twitter" />
            <img src="/icons/figma.png" alt="figma" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
