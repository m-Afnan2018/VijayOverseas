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
                    JOIN THE VIJAY OVERSEAS FAMILY
                    {/* start your day<br />with Vijay Overseas */}
                </h2>
                <p>Hygienic handling, reliable specifications, and professional packaging make our products suitable for both domestic and international markets with confidence.</p>

                <div className={style.buttons}>
                    <button>Our Story</button>
                    <button>Explore Product</button>
                </div>
            </div>
        </section>
    );
}
