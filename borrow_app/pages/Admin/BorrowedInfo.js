import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { use, useState } from "react";
import { useEffect } from "react";

export default function BorrowedInfo() {
  const [BorrowedItem,setBorrowedItem] = useState([])
  const fetchData = async () => {
    try {
      axios.get('http://localhost:8000/api/dashboard/borrowing-info/')
      .then(response => {
        console.log(response);
        setBorrowedItem(response.data);
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
  const handleDelelte = (b_id)=>(e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/dashboard/borrowing-info/delete/${parseInt(b_id)}/`,
     {user_id :parseInt(b_id)
    })
    .then((response) => {
      console.log(response.data);
      fetchData()
    })
    .catch((error) => {
      console.error(error);
    });
};

    return(
      <div className="sb-nav-fixed">
      <Head>
        <title>Borrowing Infomation</title>
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
              <h1 className="mt-4">Borrowing Infomation</h1>
              {/* header */}

              {/* sub-header */}
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Dashboard / Borrowing Infomation
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
                        Borrowing Infomation
                        <Link href="/Admin/AddBorrowed">
                        <div className="btn btn-primary float-end">
                          Add
                        </div>
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
                            <th>ITEM NAME</th>
                            <th>USER</th>
                            <th>BORROW TIME</th>
                            <th>RETURN TIME</th>
                            <th>LOCATION</th>
                            <th>NOTE</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>

                        <tbody>
                        { BorrowedItem.map((data,index)=>(<tr key={index}>
                            
                                <td>ad</td>
                                <td>ad</td>
                                <td>ad</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>
                                <Link href="/Admin/EditBorrowed">
                                <div className="btn btn-success">Edit</div>
                                </Link>
                                </td>
                                <td>
                                <form method="post">
                                <button onClick={handleDelelte(data.b_id)} name="user_delete"  className="btn btn-danger">Delete</button>
                                </form>
                                </td>
                            </tr>)) }
                            
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
    )
};
