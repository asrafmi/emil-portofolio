import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import styles from './About.module.scss';
import Chip from '../Chip/Chip';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
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
    <section className={styles.about}>
      <Chip title="About" />
      <div className={styles.aboutContainer}>
        <Tilt options={defaultOptions}>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={styles.imgContainer}
          >
            <div className={styles.avatarWrapper}>
              <img
                src="/about-img.jpeg"
                alt="avatar"
                className={styles.avatar}
              />
            </div>
          </motion.div>
        </Tilt>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className={styles.descriptionContainer}
        >
          <div className={styles.descriptionWrapper}>
            <h1 className={styles.titleDescription}>
              <Typewriter
                words={['Curious about me?', 'Here you have it:']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p className={styles.textDescription}>
              I have actively contributed to the Bandung Student Association at
              Telkom University by gathering aspirations, organizing bonding
              activities, and maintaining community relationships. Additionally,
              I played a key role in welcoming new students and was responsible
              for organizing graduation parties to celebrate our members'
              achievements.
            </p>
            <p className={styles.textDescription}>
              I spearheaded several charitable initiatives, including open
              donation activities and collaborative charity programs with other
              student associations within the Applied Science Faculty. I also
              led social service projects, providing guidance and support to a
              village near Telkom University.
            </p>
            <p className={styles.textDescription}>
              I was selected among 109 students from over 10,000 applicants
              across Indonesia for a collaborative program between MSIB Kampus
              Merdeka – Kemendikbud and PT Sinergi Transformasi Digital
              (Metrodata Academy). This independent study program offered
              opportunities, facilities, and knowledge to prepare students for
              careers in the technology industry. During this program, I
              performed data transformation, modeling, visualization, and
              reporting using Microsoft Power BI, and enhanced my skills with
              Microsoft Office 365 and CompTIA+ database concepts.
            </p>
            <p className={styles.textDescription}>
              In addition to my organizational involvement, I participated in
              various activities within the information systems major. I
              achieved a score of 527/677 in the English Proficiency Test
              (EPrT), equivalent to B1 in the CEFR Level. My field interests
              include data analysis, data science, system analysis, UI/UX
              design, and business processes.
            </p>
            <p className={styles.textDescription}>
              Finally, some quick bits about me.
            </p>
            <div className={styles.listMenuContainer}>
              <div>
                <ul>
                  <li>Vocational in Information System</li>
                  <li> Data Analysts</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>UI/UX Designer</li>
                  <li>English Enthusiast</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
