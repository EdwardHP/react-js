import style from './PeriodicTable.module.css'

function PeriodicTable() {

  return (
    <section className={style.periodicTable}>
      <h2>Tabela Periódica</h2>
      <main>
          <div className={style.container}>
            <img src="./images/tool1/periodicTable.png" alt="Tabela Periódica" />
            <article>
            </article>
          </div>
      </main>
    </section>
  )
}

export default PeriodicTable
