import styles from './GetInTouch.module.scss';
import Chip from '../Chip/Chip';
import {
  EnvelopeIcon,
  PhoneIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedInIcon from '../../assets/linkedin.svg';

const GetInTouch = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast('Copied to clipboard!', {
      icon: '📋',
      duration: 3000,
      position: 'top-right',
    });
  };

  const handleClickSocialIcon = (e) => {
    const social = e.target.alt;
    if (social === 'instagram') {
      window.open('https://www.instagram.com/emilyykhn/', '_blank');
    } else if (social === 'linkedin') {
      window.open('https://www.linkedin.com/in/emilykhdjhn/', '_blank');
    }
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
              onClick={() => copyToClipboard('@emilyykhn')}
              className={styles.squareIcon}
            />
          </div>
        </div>
        <div className={styles.platformContainer}>
          <p>You may also find me on these platforms!</p>
          <div className={styles.platformIconWrapper}>
            <img
              className={styles.socialIcon}
              src={InstagramIcon}
              alt="instagram"
              onClick={handleClickSocialIcon}
            />
            <img
              className={styles.socialIcon}
              src={LinkedInIcon}
              alt="linkedin"
              onClick={handleClickSocialIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
