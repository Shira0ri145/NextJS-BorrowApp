import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import Head from "next/head";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AddUser(params) {
  const router = useRouter()

  useEffect(() => {
    let role = window.localStorage.getItem('role');
    let token = window.localStorage.getItem('token');
    if((role !== 'Admin') || !token){
      router.push('/')
    }
  }, []);
  const [u_name,setu_name] = useState("")
  const [u_email,setu_email] = useState("")
  const [u_password,setu_password] = useState("")
  const [u_tel,setu_tel] = useState("")
  const [u_department,setu_department] = useState("")
  const [u_major,setu_major] = useState("")
  const [u_privilege,setu_privilege] = useState("")
  
  const handleu_nameChange = (e) =>{
    setu_name(e.target.value)
  }
  const handleu_emailChange = (e) =>{
    setu_email(e.target.value);
  }
  const handleu_passwordChange = (e) =>{
    setu_password(e.target.value)
  }
  const handleu_telChange = (e) =>{
    setu_tel(e.target.value)
  }
  const handleu_departmentChange = (e) =>{
    setu_department(e.target.value);
  }
  const handleu_majorChange = (e) =>{
    setu_major(e.target.value)
  }
  const handleu_privilegeChange = (e) =>{
    setu_privilege(e.target.value);
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault();

    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/user-management/add/`,
    { u_name,u_email,u_password,u_tel:u_tel,u_department:parseInt(u_department),u_major:parseInt(u_major),u_privilege:parseInt(u_privilege)})
    .then((Response)=>{
      console.log(Response)
      router.push('/Admin')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  


  return (
    <div className="sb-nav-fixed">
      <Head>
        <title>Add User</title>
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
              <h1 className="mt-4">Users Management</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">User Management / Add</li>
                {/* {JSON.stringify([u_name, u_email, u_password, u_tel, u_major, u_department, u_privilege])} */}
              </ol>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4> Add User/Admin</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleOnSubmit} method="post">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Name</label>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              value={u_name}
                              maxLength={100}
                              onChange = {handleu_nameChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Email Address</label>
                            <input
                              type="text"
                              name="email"
                              maxLength={100}
                              className="form-control"
                              value={u_email}
                              onChange = {handleu_emailChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Password</label>
                            <input
                              type="text"
                              name="password"
                              maxLength={100}
                              className="form-control"
                              value={u_password}
                              onChange = {handleu_passwordChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Telephone</label>
                            <input
                              type="text"
                              name="telephone"
                              maxLength={10}
                              className="form-control"
                              value={u_tel}
                              onChange = {handleu_telChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Department</label>
                            <select value={u_department}
                              onChange = {handleu_departmentChange}
                              name="department" require={toString()} className="form-control">
                              <option value="">--Select Department--</option>
                              <option value="1">ECE</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Major</label>
                            <select name="major" value={u_major}
                              onChange = {handleu_majorChange} require={toString()} className="form-control">
                              <option value="">--Select Major--</option>
                              <option value="1">EE</option>
                              <option value="2">MEE</option>
                              <option value="3">DEE</option>
                              <option value="4">Cpr.E</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Role as</label>
                            <select value={u_privilege}
                              onChange = {handleu_privilegeChange} 
                              name="role_as" require={toString()} className="form-control">
                              <option value="">--Select Role--</option>
                              <option value="2">Admin</option>
                              <option value="1">User</option>
                            </select>
                          </div>
                          
                          <div className="col-md-12 mb-3">
                            <button
                              type="submit"
                              name="add_user"
                              className="btn btn-primary"
                            >
                              Add User/Admin
                            </button>
                            <Link href={"/Admin"}
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
