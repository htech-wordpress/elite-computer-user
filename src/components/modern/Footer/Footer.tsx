import styles from './Footer.module.css';

interface FooterProps {
    siteName: string;
    email?: string;
    phone?: string;
    socialMedia?: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        twitter?: string;
    };
}

export const Footer: React.FC<FooterProps> = ({ siteName, email, phone, socialMedia }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.brand}>{siteName}</h3>
                        <p className={styles.tagline}>
                            Building the future, one innovation at a time.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {(email || phone) && (
                        <div className={styles.column}>
                            <h4>Contact</h4>
                            <ul className={styles.contact}>
                                {email && <li>📧 {email}</li>}
                                {phone && <li>📱 {phone}</li>}
                            </ul>
                        </div>
                    )}

                    {socialMedia && (socialMedia.facebook || socialMedia.instagram || socialMedia.linkedin) && (
                        <div className={styles.column}>
                            <h4>Follow Us</h4>
                            <div className={styles.social}>
                                {socialMedia.facebook && (
                                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                )}
                                {socialMedia.instagram && (
                                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                        Instagram
                                    </a>
                                )}
                                {socialMedia.linkedin && (
                                    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} {siteName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
