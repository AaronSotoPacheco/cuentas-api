import Sidebar from './../layouts/sidebar'
import Header from './../layouts/header'
import { Outlet } from 'react-router' 
function Dashboard() {

  return (
    <>
   <div className="d-flex">

    <Sidebar/>

<div className="content-area flex-grow-1">

    
    <Header/>
    <Outlet/>



    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

    </>
  )
}

export default Dashboard

