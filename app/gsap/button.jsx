import gsap from 'gsap';

import styles from '@/app/styles/button.module.scss';

const Button = () => {
    return(
        <div className={styles.container}>
        <div className={styles.buttoncon}>
            <div className={styles.colcontainer}>
                <div className={styles.rowcontainer}>
                <div>
                <div className={styles.textcont}>
                    GET G$AP
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Button;

