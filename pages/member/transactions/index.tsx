import SideBar from "../../../Components/organisms/SideBar";
import TransactionContent from "../../../Components/organisms/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
    </section>
  )
}
