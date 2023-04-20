import LabHeader from "../../components/LabHeader/LabHeader"
import PeriodicTable from "../../components/PeriodicTable/PeriodicTable"
import Presentation from "../../components/Presentation/Presentation"

function Lab() {
  return (
    <section>
      <LabHeader />
      <Presentation />
      <PeriodicTable />
    </section>
  )
}

export default Lab
