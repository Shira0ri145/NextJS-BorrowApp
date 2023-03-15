import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersManage() {
  const [Item,setItem] = useState([])
  
  const fetchData = async () => {
    try {
      axios.get('http://localhost:8000/api/dashboard/user-management/')
      .then(response => {
        console.log(response);
        setItem(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{ 
    fetchData();
  }, []);
  

  // const delete  pass
  const handleDelelte = (u_id)=>(e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/dashboard/user-management/delete/${parseInt(u_id)}/`,
     {user_id :parseInt(Item.u_id)
    })
    .then((response) => {
      console.log(response.data);
      fetchData()
    })
    .catch((error) => {
      console.error(error);
    });
};


  return (
    <div className="sb-nav-fixed">
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
            <div className="container-fluid px-4">
              {/* header */}
              <h1 className="mt-4">User Management</h1>
              {/* header */}

              {/* sub-header */}
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Dashboard / User Management
                </li>
              </ol>
              {/* sub-header */}
              {/* card */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    {/* card header */}
                    <div className="card-header">
                      <h4>
                        {" "}
                        Registered User
                        <Link href="/Admin/AddUser" className="btn btn-primary float-end">
                          Add
                        </Link>
                      </h4>
                    </div>
                    {/* card header */}

                    {/* card body */}
                    <div className="card-body">
                      {/* card body */}

                      {/* registered users table */}
                      <table className="table table-bordered">
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
                                <td>{data.u_id}</td>
                                <td>{data.u_name}</td>
                                <td>{data.u_tel}</td>
                                <td>{data.u_faculty}</td>
                                <td>{data.u_department}</td>
                                <td>{data.u_privilege}</td>
                                <td>
                                    <Link href="/Admin/EditUser" className="btn btn-success">Edit</Link>
                                </td>
                                <td>
                                <form method="post">
                                <button onClick={handleDelelte(data.u_id)} type="sumbit" name="user_delete"  className="btn btn-danger">Delete</button>
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
