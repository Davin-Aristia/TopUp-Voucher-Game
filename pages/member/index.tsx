import OverviewContent from "../../Components/organisms/OverviewContent";
import SideBar from "../../Components/organisms/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <SideBar activeMenu="overview"/>
        <OverviewContent />
    </section>
  )
}
