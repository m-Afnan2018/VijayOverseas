import styles from "./NotificationBar.module.css";

export default function NotificationBar( {data}) {
    return (
        <div className={styles.bar}>
            <h3>{data.heading}</h3>
            <h4>{data.description}</h4>
        </div>
    );
}
