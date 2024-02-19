import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './Orders.css'

function Orders() {
  return (
    <>
    <Header/>
    <div className='body_container'>
    <Sidebar/>
     <div className='Orders_container'>
        
        <div className='slected_item'>
        orders x
        </div>
        <div className='switch_items'>
            <p>
                Pending
            </p>
            <p>
                Accepted
            </p>
            <p>
                AWP created
            </p>
            <p>
                Ready to ship
            </p>
            <p>
                Shipped
            </p>
            <p>
                Completed
            </p>
            <p>
                Cancelled
            </p>
        </div>
     <div className='order_deatails'>
        <table className='order_details_table'>
     <thead>
            <tr>
              <td>Order Date</td>
              <td>Cancelled</td>
              <td>City</td>
              <td>Customer Name</td>
              <td>Order Value</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Order Date</td>
              <td>Cancelled</td>
              <td>City</td>
              <td>Customer Name</td>
              <td>Order Value</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
            <tr>
              <td>Order Date</td>
              <td>Cancelled</td>
              <td>City</td>
              <td>Customer Name</td>
              <td>Order Value</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
            <tr>
              <td>Order Date</td>
              <td>Cancelled</td>
              <td>City</td>
              <td>Customer Name</td>
              <td>Order Value</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>

          </tbody>
          </table>

        
     </div>
     </div>
    </div>
   
    </>
   
  )
}

export default Orders