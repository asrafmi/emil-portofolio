import { motion } from 'framer-motion';
import styles from './Testimonial.module.scss';
import Chip from '../Chip/Chip';
import { Testimonials } from './Testimonial';

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <Chip title="Testimonials" />
      <div className={styles.testimonialContainer}>
        <p className={styles.descriptionText}>
          Nice things people have said about me:
        </p>
        <div className={styles.listTestimonialContainer}>
          {Testimonials.list.map((testimonial, index) => (
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
              key={index}
              className={styles.testimonialCard}
            >
              <img
                src={testimonial.img}
                alt="author-img"
                className={styles.avatar}
              />
              {/* <div className={styles.imgContainer}>
              </div> */}
              <p className={styles.descriptionTextTestimonial}>
                {testimonial.description}
              </p>
              <div className={styles.authorContainer}>
                <p className={styles.authorName}>{testimonial.authorName}</p>
                <p className={styles.authorWork}>{testimonial.authorWork}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
