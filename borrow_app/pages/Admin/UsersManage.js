import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function UsersManage() {
  const [Item,setItem] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/dashboard/user-management/')
        setItem(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const delete  pass
  const handleDelelte = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/dashboard/user-management/edit/<int:user_id>/',
     {u_userid :Item.u_userid
      ,u_name : Item.u_name,
      u_tel:Item.u_tel,
      u_faculty:Item.u_faculty,
      u_department:Item.u_department,
      u_privilege:Item.u_privilege
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};


  return (
    <div class="sb-nav-fixed">
      <Head>
        <title>Users Management</title>
      </Head>
      {/* Top navbar */}
      <AdminNavbar />

      <div id="layoutSidenav">
        {" "}
        {/* Sidenav */}
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            {/* Dashboard Content */}
            <div class="container-fluid px-4">
              {/* header */}
              <h1 class="mt-4">User Management</h1>
              {/* header */}

              {/* sub-header */}
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                  Dashboard / User Management
                </li>
              </ol>
              {/* sub-header */}
              {/* card */}
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    {/* card header */}
                    <div class="card-header">
                      <h4>
                        {" "}
                        Registered User
                        <Link href="/Admin/AddUser" class="btn btn-primary float-end">
                          Add
                        </Link>
                      </h4>
                    </div>
                    {/* card header */}

                    {/* card body */}
                    <div class="card-body">
                      {/* card body */}

                      {/* registered users table */}
                      <table class="table table-bordered">
                        {/* table header */}
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>TELEPHONE</th>
                            <th>FACULTY</th>
                            <th>DEPARTMENT</th>
                            <th>ROLE</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>

                        <tbody>
                           { Item.map((data,index)=>(<tr key={index}>
                                <td>Item.u_userid</td>
                                <td>Item.u_name</td>
                                <td>Item.u_tel</td>
                                <td>Item.u_faculty</td>
                                <td>Item.u_department</td>
                                <td>Item.u_privilege</td>
                                <td>
                                    <Link href="/Admin/EditUser" class="btn btn-success">Edit</Link>
                                </td>
                                <td>
                                <form method="post">
                                <button onClick={handleDelelte} type="sumbit" name="user_delete"  class="btn btn-danger">Delete</button>
                                </form>
                                </td>
                            </tr>)) }
                        </tbody>     
                        
                      </table>
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
