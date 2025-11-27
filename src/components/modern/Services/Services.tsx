import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Services.module.css';
import type { Service } from '../../../types';

interface ServicesProps {
    data: {
        title?: string;
        subtitle?: string;
        services?: Service[];
    };
}

export const Services: React.FC<ServicesProps> = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="services" className={styles.services} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>
                        {data.title || 'Our Services'}
                    </h2>
                    {data.subtitle && (
                        <p className={styles.subtitle}>{data.subtitle}</p>
                    )}
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {data.services && data.services.map((service, index) => (
                        <motion.div
                            key={service.id || index}
                            className={styles.card}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.cardGlow}></div>
                            <div className={styles.cardContent}>
                                {service.iconUrl && (
                                    <div className={styles.icon}>
                                        <img src={service.iconUrl} alt={service.name} />
                                    </div>
                                )}
                                <div className={styles.content}>
                                    <h3 className={styles.serviceTitle}>
                                        {service.name}
                                    </h3>
                                    {service.shortDesc && (
                                        <p className={styles.shortDesc}>{service.shortDesc}</p>
                                    )}
                                    <p className={styles.description}>
                                        {service.description}
                                    </p>
                                    {service.price && (
                                        <div className={styles.price}>{service.price}</div>
                                    )}
                                    {service.features && service.features.length > 0 && (
                                        <ul className={styles.features}>
                                            {service.features.slice(0, 3).map((feature, idx) => (
                                                <li key={idx}>✓ {feature}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button className={styles.learnMore}>
                                    Learn More →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
