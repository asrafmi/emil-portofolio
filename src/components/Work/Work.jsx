import styles from './Work.module.scss';
import WorkPicture from '../../assets/work/picture.png';
import Chip from '../Chip/Chip';
import { Work as WorkItems } from './Work';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Work = () => {
  return (
    <section className={styles.work}>
      <Chip title={WorkItems.title} />
      <div className={styles.workContainer}>
        <p className={styles.descriptionText}>{WorkItems.description}</p>
        <div className={styles.listWorkContainer}>
          {WorkItems.list.map((workItem) => (
            <div
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
                <p className={styles.workTitle}>{WorkItems.title}</p>
                <p className={styles.workDescription}>
                  {WorkItems.description}
                </p>
                <div className={styles.techStack}>
                  {workItem.techStack.map((tech) => (
                    <Chip title={tech} key={tech} />
                  ))}
                </div>
                <ArrowTopRightOnSquareIcon className={styles.redirectIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
