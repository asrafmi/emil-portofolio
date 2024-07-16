import { motion } from 'framer-motion';
import styles from './Volunteer.module.scss';
import WorkPicture from '../../assets/work/picture.png';
import Chip from '../Chip/Chip';
import { Volunteer as VolunteerItems } from './Volunteer';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Volunteer = () => {
  return (
    <section className={styles.work}>
      <Chip title={VolunteerItems.title} />
      <div className={styles.workContainer}>
        <p className={styles.descriptionText}>{VolunteerItems.description}</p>
        <div className={styles.listWorkContainer}>
          {VolunteerItems.list.map((workItem) => (
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
              key={workItem.id}
              className={styles.workCard}
              style={{ flexDirection: workItem.reverse ? 'row-reverse' : null }}
            >
              <div className={styles.imgContainer}>
                <img
                  src={workItem.img}
                  alt={workItem.title}
                  className={styles.workImg}
                />
              </div>
              <div className={styles.descriptionContainer}>
                <p className={styles.workTitle}>{workItem.title}</p>
                <p className={styles.workDescription}>{workItem.description}</p>
                <ul className={styles.listDescription}>
                  {workItem.details.map((desc) => (
                    <li key={desc.id} className={styles.description}>
                      {desc.text}
                    </li>
                  ))}
                </ul>
                <div className={styles.techStack}>
                  {workItem.techStack.map((tech) => (
                    <Chip title={tech} key={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
