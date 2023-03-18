import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function EditUser(params) {
  const router = useRouter()
  useEffect(() => {
    if(router.isReady){
        const { id } = router.query;
        setu_id(id);
        fetchData(id);
     }
}, [router.isReady]);

  const fetchData = async(user_id) =>{
    try {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/user-management/${user_id}/`)
      .then(response => {
        setu_name(response.data.u_name)
        setu_email(response.data.u_email)
        setu_password(response.data.u_password)
        setu_tel(response.data.u_tel)
        setu_department(response.data.u_department)
        setu_major(response.data.u_major)
        setu_privilege(response.data.u_privilege)
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

  const [u_id,setu_id] = useState("")
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
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/user-management/edit/${u_id}/`,{ u_name:u_name
    ,u_email:u_email,u_password:u_password,u_tel:u_tel,u_department:u_department,u_major:u_major
    ,u_privilege:u_privilege
    }).then((Response)=>{
      // console.log(Response)
      router.push('/Admin')
    }).catch((error)=>{
      console.log(error)
    })
  }

    return(
        <div class="sb-nav-fixed">
      <Head>
        <title>Edit User</title>
      </Head>
      {/* Top navbar */}
      <AdminNavbar />

      <div id="layoutSidenav">
        {/* Sidenav */}
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            {/* Dashboard Content */}
            <div class="container-fluid px-4">
              <h1 class="mt-4">Users Management</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">User Management / Edit</li>
              </ol>
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h4> Edit User/Admin</h4>
                    </div>
                    <div class="card-body">
                      <form onSubmit={handleOnSubmit} method="post">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="">Name</label>
                            <input
                              type="text"
                              name="username"
                              class="form-control"
                              value={u_name}
                              maxLength={100}
                              onChange = {handleu_nameChange}
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Email Address</label>
                            <input
                              type="text"
                              name="email"
                              class="form-control"
                              value={u_email}
                              maxLength={100}
                              onChange = {handleu_emailChange}
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Password</label>
                            <input
                              type="text"
                              name="password"
                              class="form-control"
                              value={u_password}
                              maxLength={100}
                              onChange = {handleu_passwordChange}
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Telephone</label>
                            <input
                              type="text"
                              name="telephone"
                              class="form-control"
                              value={u_tel}
                              maxLength={10}
                              onChange = {handleu_telChange}
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Department</label>
                            <select value={u_department}
                              onChange = {handleu_departmentChange}
                               name="department" require class="form-control">
                              <option value="">--Select Department--</option>
                              <option value="1">ECE</option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Major</label>
                            <select value={u_major}
                              onChange = {handleu_majorChange}
                               name="major" require class="form-control">
                              <option value="">--Select Major--</option>
                              <option value="1">EE</option>
                              <option value="2">MEE</option>
                              <option value="3">DEE</option>
                              <option value="4">Cpr.E</option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Role as</label>
                            <select value={u_privilege}
                              onChange = {handleu_privilegeChange}
                               name="role_as" require class="form-control">
                              <option value="">--Select Role--</option>
                              <option value="2">Admin</option>
                              <option value="1">User</option>
                            </select>
                          </div>
                          
                          <div class="col-md-12 mb-3">
                            <button
                              type="submit"
                              name="add_user"
                              class="btn btn-success"
                            >
                              Update User/Admin
                            </button>
                            <Link href={"/Admin"}
                              type="submit"
                              name="cancel"
                              class="btn btn-danger"
                              onClick={()=>{
                                router.push('/Admin')
                              }}
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
