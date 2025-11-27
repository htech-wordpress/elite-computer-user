import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';
import type { About as AboutType } from '../../../types';

interface AboutProps {
    data: AboutType;
}

export const About: React.FC<AboutProps> = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className={styles.about} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={`${styles.content} ${!data.image ? styles.singleColumn : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.textContent}>
                        {data.title && <h2 className={styles.title}>{data.title}</h2>}
                        {data.description && <p className={styles.description}>{data.description}</p>}

                        {data.mission && (
                            <div className={styles.valueCard}>
                                <div className={styles.icon}>🎯</div>
                                <div>
                                    <h3>Our Mission</h3>
                                    <p>{data.mission}</p>
                                </div>
                            </div>
                        )}

                        {data.vision && (
                            <div className={styles.valueCard}>
                                <div className={styles.icon}>🔭</div>
                                <div>
                                    <h3>Our Vision</h3>
                                    <p>{data.vision}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {data.image && (
                        <motion.div
                            className={styles.imageWrapper}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <img src={data.image} alt="About us" />
                        </motion.div>
                    )}
                </motion.div>

                {data.coreValues && (data.coreValues.innovation || data.coreValues.excellence || data.coreValues.trust) && (
                    <motion.div
                        className={styles.values}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h3 className={styles.valuesTitle}>Our Core Values</h3>
                        <div className={styles.valuesGrid}>
                            {data.coreValues.innovation && (
                                <div className={styles.value}>
                                    <div className={styles.valueIcon}>💡</div>
                                    <h4>Innovation</h4>
                                    <p>{data.coreValues.innovation}</p>
                                </div>
                            )}
                            {data.coreValues.excellence && (
                                <div className={styles.value}>
                                    <div className={styles.valueIcon}>⭐</div>
                                    <h4>Excellence</h4>
                                    <p>{data.coreValues.excellence}</p>
                                </div>
                            )}
                            {data.coreValues.trust && (
                                <div className={styles.value}>
                                    <div className={styles.valueIcon}>🤝</div>
                                    <h4>Trust</h4>
                                    <p>{data.coreValues.trust}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
