import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faClock
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";


export default function EditBorrowed(params) {
  const [b_item,setb_item] = useState("") 
  const [b_user,setb_user] = useState("")
  const [b_borrow_time,setb_borrow_time] = useState("")
  const [b_return_time,setb_return_time] = useState("")
  const [b_location,setb_location] = useState("")
  const [b_note,setb_note] = useState("")
  const handleOnSubmit =(info_id)=> (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/dashboard/borrowing-info/edit/${parseInt(info_id)}/`,
    {b_item:info_id })
    .then((Response)=>{
      alert(Response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const handleb_itemChange = (e) =>{
    setb_item(e.target.value)
  }
  const handleb_userChange = (e) =>{
    setb_user(e.target.value)
  }
  const handleb_borrow_timeChange = (e) =>{
    setb_borrow_time(e.target.value)
  }
  const handleb_return_timeChange = (e) =>{
    setb_return_time(e.target.value)
  }
  const handleb_locationChange = (e) =>{
    setb_location(e.target.value)
  }
  const handleb_noteChange = (e) =>{
    setb_note(e.target.value)
  }
    return(
        <div className="sb-nav-fixed">
      <Head>
        <title>Edit Borrow-Item</title>
      </Head>
      {/* Top navbar */}
      <AdminNavbar />

      <div id="layoutSidenav">
        {/* Sidenav */}
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            {/* Dashboard Content */}
            <div className="container-fluid px-4">
              <h1 className="mt-4">Borrowing Infomation</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Borrowing Infomation / Edit</li>
              </ol>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4> Edit Borrow-Item </h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleOnSubmit(b_item)} method="post">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label >Item ID</label>
                            <input
                              type="text"
                              name="itemname"
                              className="form-control"
                              value={b_item}
                              onChange = {handleb_itemChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label >User</label>
                            <input
                              type="text"
                              name="idtype"
                              className="form-control"
                              value = {b_user}
                              onChange = {handleb_userChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label >Borrow Time</label>
                            <div className="input-group">
                                <input value={b_borrow_time} onChange = {handleb_borrow_timeChange} type="datetime-local" name="btime" className="form-control" />
                                <span className="input-group-text" >
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label >Return Time</label>
                            <div className="input-group">
                                <input value = {b_return_time} onChange = {handleb_return_timeChange} type="datetime-local" name="btime" className="form-control" />
                                <span className="input-group-text" >
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label >Location</label>
                            <textarea value = {b_location} onChange = {handleb_locationChange} name="location" required className="form-control" rows="4"></textarea>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label >Note</label>
                            <textarea value={b_note} onChange = {handleb_noteChange} name="note" required className="form-control" rows="4"></textarea>
                          </div>
                          
                          <div className="col-md-12 mb-3">
                            <button
                              type="submit"
                              name="add_user"
                              className="btn btn-success"
                            >
                              Update
                            </button>
                            <Link href={"/Admin/BorrowedInfo"}
                              className="btn btn-danger"
                            >
                              Cancel
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Footer */}
          <AdminFooter />
        </div>
      </div>
    </div>
    )
};
