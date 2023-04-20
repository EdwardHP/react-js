import style from './PeriodicTable.module.css'

function PeriodicTable() {

    return (
        <section className={style.periodicTable}>
            <main>
                <div className={style.container}>
                    <img src="./images/tool1/periodicTable.png" alt="Tabela Periódica" />
                    <article>
                        <h2>Tabela Periódica</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut eius voluptas et, rem corrupti. Sed nam, sint nemo itaque, inventore aperiam cum laborum, autem doloribus repellat cupiditate earum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo modi praesentium! Recusandae magni ex voluptate reiciendis, repudiandae, enim, mollitia esse quasi doloribus perspiciatis molestias ut delectus libero dignissimos quos!</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default PeriodicTable
