import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Script from "next/script";


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
    if (typeof window !== "undefined") {
      ItemsDataTable();
      
    }
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

const ItemsDataTable = () => {
  const dataTable = $("#itemsdatatable");
  
  // destroy old DataTable bode create new datatable
  if ($.fn.DataTable.isDataTable(dataTable)) {
    dataTable.DataTable().destroy();
  }
  
  // create new DataTable
  dataTable.DataTable({
    responsive: true,
  });
};

  return (
    <div classNameName="sb-nav-fixed">
      <Head>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
      <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css"/>
        <title>Items Management</title>
        
      </Head>
      {/* Top navbar */}
      <AdminNavbar />

      <div id="layoutSidenav">
        {/* Sidenav */}
        <AdminSidebar />
        <div id="layoutSidenav_content">
               <main>
                    <div className="container-fluid px-4">
                      <h1 className="mt-4">Items Management</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link href="/Admin"> Dashboard</Link></li>
                            <li className="breadcrumb-item active">Items Management</li>
                        </ol>
                        
                        <div className="card mb-4">
                            <div className="card-header">
                              <h4>
                                {" "}
                                Items Management
                                <Link href="/Admin/AddItems" className="btn btn-primary float-end">Add</Link>
                              </h4>
                            </div>
                            
                            <div className="card-body">
                                <table id="itemsdatatable">
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
                                    <tfoot>
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
                                    </tfoot>
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
                </main>
          {/* Footer */}
          <AdminFooter />
        </div>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"/>
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
        <Script src="../scripts/datatable.js" />
      </div>
    </div>
  );
}
