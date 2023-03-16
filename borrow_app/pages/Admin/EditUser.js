import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import { useState } from "react";

export default function EditUser(params) {
  const [u_name,setu_name] = useState("")
  const [u_email,setu_email] = useState("")
  const [u_password,setu_password] = useState("")
  const [u_tel,setu_tel] = useState("")
  const [u_faculty,setu_faculty] = useState("")
  const [u_department,setu_department] = useState("")
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
  const handleu_facultyChange = (e) =>{
    setu_faculty(e.target.value);
  }
  const handleu_departmenChange = (e) =>{
    setu_department(e.target.value)
  }
  const handleu_privilegeChange = (e) =>{
    setu_privilege(e.target.value);
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://labeq-env.eba-749v4c5r.ap-southeast-1.elasticbeanstalk.com/api/dashboard/user-management/edit/',{ u_name:u_name
    ,u_email:u_email,u_password:u_password,u_tel:u_tel,u_faculty:u_faculty,u_department:u_department
    ,u_privilege:u_privilege
    }).then((Response)=>{
      alert(Response)
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
                              onChange = {handleu_telChange}
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Faculty</label>
                            <select value={u_faculty}
                              onChange = {handleu_facultyChange}
                               name="faculty" require class="form-control">
                              <option value="">--Select Faculty--</option>
                              <option value="1">ECE</option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Department</label>
                            <select value={u_department}
                              onChange = {handleu_departmenChange}
                               name="department" require class="form-control">
                              <option value="">--Select Department--</option>
                              <option value="3">EE</option>
                              <option value="2">MEE</option>
                              <option value="1">DEE</option>
                              <option value="0">Cpr.E</option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="">Role as</label>
                            <select value={u_privilege}
                              onChange = {handleu_privilegeChange}
                               name="role_as" require class="form-control">
                              <option value="">--Select Role--</option>
                              <option value="1">Admin</option>
                              <option value="0">User</option>
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
                            <button
                              type="submit"
                              name="cancel"
                              class="btn btn-danger"
                            >
                              Cancel
                            </button>
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
