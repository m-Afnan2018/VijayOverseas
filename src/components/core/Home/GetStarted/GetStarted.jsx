import style from "./GetStarted.module.css";

export default function GetStarted() {
    return (
        <section className={style.section}>
            <video
                className={style.video}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/started.mp4" type="video/mp4" />
            </video>

            <div className={style.overlay}>
                <h5>get started</h5>
                <h2>
                    start your day<br />with Vijay Oversea
                </h2>
            </div>
        </section>
    );
}
