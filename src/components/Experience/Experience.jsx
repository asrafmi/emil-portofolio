import { motion } from 'framer-motion';
import styles from './Experience.module.scss';
import Chip from '../Chip/Chip';
import { experience } from './Experience';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <Chip title={experience.title} />
      <div className={styles.experienceContainer}>
        <p className={styles.descriptionText}>{experience.description}</p>
        <div className={styles.listExperienceContainer}>
          {experience.list.map((item) => (
            <motion.div
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              key={item.id}
              className={styles.experienceCard}
            >
              <div className={styles.imgContainer}>
                <img
                  src={item.img}
                  alt={item.company}
                  className={styles.experienceLogo}
                />
              </div>
              <div className={styles.experienceCardWrapper}>
                <div className={styles.timeRangeWrapper}>
                  <p className={styles.timeRange}>{item.date}</p>
                </div>
                <div className={styles.descriptionCardWrapper}>
                  <p className={styles.position}>{item.position}</p>
                  <ul className={styles.listDescription}>
                    {item.description.map((desc) => (
                      <li key={desc.id} className={styles.description}>
                        {desc.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
