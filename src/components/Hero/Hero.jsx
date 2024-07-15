import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import styles from './Hero.module.scss';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Emily 👋",
      'Girl who likes sushi 🍣',
      'and anything about Data 📊',
    ],
    loop: 3,
  });
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <Tilt options={defaultOptions}>
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className={styles.imgContainer}
          >
            <div className={styles.avatarWrapper}>
              <img src="/avatar.png" alt="avatar" className={styles.avatar} />
            </div>
          </motion.div>
        </Tilt>
        <motion.div
          initial={{
            y: 300,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className={styles.descriptionContainer}
        >
          <div className={styles.descriptionWrapper}>
            <h1 className={styles.titleDescription}>{text}</h1>
            <p className={styles.textDescription}>
              I'm an enthusiastic undergraduate at Telkom University, working
              towards a diploma in Information Systems. I'm deeply passionate
              about a variety of subjects, including data analytics, data
              science, system analysis, business processes, and project
              management. I thrive in public speaking and leadership, constantly
              striving to hone my abilities. I'm committed to relentless
              learning and growth, aiming for both personal and professional
              excellence in my areas of interest.
            </p>
          </div>
          <div className={styles.locationContainer}>
            <div className={styles.iconContainer}>
              <MapPinIcon className={styles.locationIcon} />
              <div className={styles.dot}></div>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.locationText}>Bandung, Indonesia</p>
              <p className={styles.locationText}>Available for new projects</p>
            </div>
          </div>
          <div className={styles.socialWrapper}>
            <img src="/icons/github.png" alt="github" />
            <img src="/icons/twitter.png" alt="twitter" />
            <img src="/icons/figma.png" alt="figma" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
