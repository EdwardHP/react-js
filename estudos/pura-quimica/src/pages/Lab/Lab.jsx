import LabHeader from "../../components/LabHeader/LabHeader"
import PeriodicTable from "../../components/PeriodicTable/PeriodicTable"
import Presentation from "../../components/Presentation/Presentation"
import style from "./Lab.module.css"

function Lab() {
  return (
    <section>
      <div className={style.cover}>
        <LabHeader />
        <Presentation />
      </div>
      <PeriodicTable />
    </section>
  )
}

export default Lab
