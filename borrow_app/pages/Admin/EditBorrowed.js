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

import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";


export default function EditBorrowed(params) {

  const router = useRouter()

  useEffect(() => {
    if(router.isReady){
        const { id } = router.query;
        setb_id(id);
        fetchData(id);
     }
  }, [router.isReady]);

  const fetchData = async(borrow_id) =>{
    try {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/borrowing-info/${borrow_id}/`)
      .then(response => {
        setb_item(response.data.b_item)
        setb_user(response.data.b_user)
        setb_borrow_time(require('moment')(response.data.b_borrow_time).format("YYYY-MM-DDTkk:mm"))
        setb_return_time(require('moment')(response.data.b_return_time).format("YYYY-MM-DDTkk:mm"))
        setb_location(response.data.b_location)
        setb_note(response.data.b_note)
      })
      .catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let role = window.localStorage.getItem('role');
    let token = window.localStorage.getItem('token');
    if((role !== 'Admin') || !token){
      router.push('/')
    }
  }, []);

  const [b_id,setb_id] = useState("")
  const [b_item,setb_item] = useState("") 
  const [b_user,setb_user] = useState("")
  const [b_borrow_time,setb_borrow_time] = useState("")
  const [b_return_time,setb_return_time] = useState("")
  const [b_location,setb_location] = useState("")
  const [b_note,setb_note] = useState("")
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/borrowing-info/edit/${parseInt(b_id)}/`,
    {b_item,b_user,
      b_borrow_time:new Date(b_borrow_time).toISOString().slice(0, 19).replace('T', ' '),
      b_return_time:new Date(b_return_time).toISOString().slice(0, 19).replace('T', ' '),
      b_location,b_note })
    .then((Response)=>{
      // console.log(Response)
      router.push('/Admin/BorrowedInfo')
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
  return (
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
                      <form onSubmit={handleOnSubmit} method="post">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Item ID</label>
                            <input
                              type="text"
                              name="itemname"
                              className="form-control"      
                              value={b_item}
                              onChange = {handleb_itemChange}  
                              maxLength={50}                  
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Email</label>
                            <input
                              type="email"
                              name="idtype"
                              className="form-control"
                              value={b_user}
                              onChange = {handleb_userChange}
                              maxLength={100}  
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Borrow Time</label>
                            <div className="input-group">
                                <input value={b_borrow_time} onChange = {handleb_borrow_timeChange} type="datetime-local" name="btime" className="form-control" />
                                <span className="input-group-text" >
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Return Time</label>
                            <div className="input-group">
                                <input value = {b_return_time} onChange = {handleb_return_timeChange}  type="datetime-local" name="btime" className="form-control" />
                                <span className="input-group-text" >
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label  htmlFor="">Location</label>
                            <textarea value = {b_location} onChange = {handleb_locationChange} name="location" required className="form-control" rows="4"></textarea>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label   htmlFor="">Note</label>
                            <textarea value={b_note} onChange = {handleb_noteChange} name="note" required className="form-control" rows="4"></textarea>
                          </div>
                          
                          <div className="col-md-12 mb-3">
                            <button
                              type="submit"
                              name="edit_user"
                              className="btn btn-primary"
                            >
                              Edit Borrow-Item
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
  );
}