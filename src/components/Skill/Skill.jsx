import { motion } from 'framer-motion';
import Chip from '../Chip/Chip';
import styles from './Skill.module.scss';
import { skills } from './Skill';

const Skill = () => {
  return (
    <section className={styles.skill}>
      <Chip title={skills.title} />
      <div className={styles.skillContainer}>
        <p className={styles.descriptionText}>{skills.description}</p>
        <div className={styles.listSkillContainer}>
          {skills.list.map((skill) => (
            <div key={skill.id} className={styles.skillWrapper}>
              <motion.img
                initial={{
                  y: 200,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                src={skill.icon}
                alt={skill.name}
              />
              <motion.p
                initial={{
                  y: 200,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
              >
                {skill.name}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
