import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function ItemsManage() {
  const [Item,setItem] = useState([])

  const fetchData = async () => {
    try {
      axios.get('http://localhost:8000/api/dashboard/item-info/')
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
  const handleDelelte = (item_idv)=>(e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/dashboard/item-info/delete/${item_idv}/`,
     {user_id :item_idv
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
        <title>Items Management</title>
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
              {/* header */}
              <h1 className="mt-4">Items Management</h1>
              {/* header */}

              {/* sub-header */}
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Dashboard / Items Management
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
                        Items Management
                        <Link href="/Admin/AddItems" className="btn btn-primary float-end">
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
                            <th>ITEM ID</th>
                            <th>ITEM TYPE</th>
                            <th>ITEM NAME</th>
                            <th>FACULTY</th>
                            <th>DEPARTMENT</th>
                            <th>BORROW STATUS</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>

                        <tbody>
                        { Item.map((data,index)=>(<tr key={index}>
                                <td>{data.item_id}</td>
                                <td>{data.item_id_type}</td>
                                <td>{data.item_name}</td>
                                <td>{data.item_faculty}</td>
                                <td>{data.item_department}</td>
                                <td>{data.item_borrow_status}</td>
                                <td>
                                    <Link href="/Admin/EditItems" className="btn btn-success">Edit</Link>
                                </td>
                                <td>
                                <form method="post">
                                <button onClick={handleDelelte}  name="user_delete"  className="btn btn-danger">Delete</button>
                                </form>
                                </td>
                            </tr>))}
                            
                            {/* table header */}
                            {/* Put Data here */}
 
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
