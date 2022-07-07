import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widjet from "../../components/widget/Widjet"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
          
      <Sidebar />
  
      <div className="homeContainer">
      <Navbar />
        <div className="widgets">
          <Widjet type="user" />
          <Widjet type="order" />
          <Widjet type="earning" />
          <Widjet type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title ="User spending (Last 6 months)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home