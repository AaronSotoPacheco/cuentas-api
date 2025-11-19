import { useState } from 'react'

import Sidebar from './../layouts/sidebar'
import Header from './../layouts/header'
import Card from './../components/card'
import CreditCard from './../components/credit-card'
function Home() {
 
  return (
    <>
<div className="content-area flex-grow-1">

 
    
    <div className="row g-4">

    <div className="col-md-4"> 
    <Card ammount={8450.75} tittle={"Main Balance"} percent={5.2}/>
    </div>

        <div className="col-md-4">
    <CreditCard bank={"Bancoppel"} number={"2984-5678-9838-3723"} name={"aaron soto"} date={"20/12"} />     
        </div>

       
        <div className="col-md-4">
        <Card ammount={5200} tittle={"Total income"} percent={8.5}/>
        </div>


        <div className="col-md-4">
            <div className="card-main">
                <small>Total Expenses</small>
                <h3 className="fw-bold mt-2">$3,750.90</h3>
                <span className="badge bg-danger">-4.2%</span>
            </div>
        </div>

    </div>

    <div className="card-main mt-4">
        <h5 className="fw-bold mb-3">Recent Transfer Activity</h5>

        <table className="table align-middle">
            <thead>
                <tr>
                    <th>Date & Time</th>
                    <th>Description</th>
                    <th>Account</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>

                <tr className="recent-transfer-row">
                    <td>Feb 5, 2025</td>
                    <td><img src="https://i.pravatar.cc/50?img=32"/> Alex Johnson</td>
                    <td>Savings (***5678)</td>
                    <td>$500.00</td>
                </tr>

                <tr>
                    <td>Feb 4, 2025</td>
                    <td><i className="fa-brands fa-netflix me-2 text-danger"></i> Netflix Billing</td>
                    <td>Billing</td>
                    <td>$15.99</td>
                </tr>

                <tr className="recent-transfer-row">
                    <td>Feb 3, 2025</td>
                    <td><img src="https://i.pravatar.cc/50?img=14"/> John Doe</td>
                    <td>Savings (***9876)</td>
                    <td>$450.00</td>
                </tr>

            </tbody>
        </table>

    </div>

</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

    </>
  )
}

export default Home

