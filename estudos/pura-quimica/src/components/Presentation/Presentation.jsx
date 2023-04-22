import { useState, useEffect } from 'react'
import { GiSoapExperiment } from 'react-icons/gi'
import style from './Presentation.module.css'

function Presentation() {

    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hours, setHours] = useState(0);

    const styleNumber = (number) => {
        if (number < 10)
            return '0' + number;
        return number;
    };

    const timer = () => {
        setSec((prevSec) => {
            let newSec = prevSec + 1;
            if (prevSec + 1 == 60) {
                newSec = 0;
                setMin((prevMin) => {
                    let newMin = prevMin + 1;
                    if (newMin == 60) {
                        newMin = 0;
                        setHours((prevHours) => prevHours + 1);
                    }
                    return newMin;
                });
            }
            return newSec;
        });
    };

    useEffect(() => {
        const clock = setInterval(timer, 1000);

        return () => clearInterval(clock);
    }, []);

    return (
        <section className={style.presentation}>
            <section>
                <article>
                    <h1>Laboratório <GiSoapExperiment /></h1>
                    <div className={style.container}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nisi qui incidunt beatae dolore debitis vitae deleniti laudantium optio? Amet asperiores consectetur rerum quas tempore suscipit, expedita vitae vero facilis.</p>
                        <p className={style.timer}>Você está aqui á {`${styleNumber(hours)}:${styleNumber(min)}:${styleNumber(sec)}`}</p>
                    </div>
                </article>
                <img src="./svg/science.svg" alt="Cientista" />
            </section>
        </section>
    )
}

export default Presentation
