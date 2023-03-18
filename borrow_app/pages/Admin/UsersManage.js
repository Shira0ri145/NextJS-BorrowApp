import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
import { useRouter } from "next/router";
export default function UsersManage() {
  const router = useRouter()
  const [Users,setUsers] = useState([])
  const [search,setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  const fetchData = async () => {
    try {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/update-expire/`)
      .then(res =>{
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/user-management/`)
        .then(response => {
          // console.log(response);
          setUsers(response.data);
          setFilteredUsers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
      ).catch(error => {
        console.log(error);
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{ 
    let role = window.localStorage.getItem('role');
    let token = window.localStorage.getItem('token');
    if((role !== 'Admin') || !token){
      router.push('/')
    }
    fetchData();
  }, []);

  useEffect(() => {
    const result = Users.filter(Users => {
      return Users.u_name.toLowerCase().match(search.toLowerCase());
    })

    setFilteredUsers(result);
  }, [search])
  

  // const delete  pass
  const handleDelelte = (u_id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/user-management/delete/${parseInt(u_id)}/`)
    .then((response) => {
      // console.log(response.data);
      fetchData()
    })
    .catch((error) => {
      console.error(error);
    });
};

const columns = [
  {
    name : "ID",
    cell: row => (
      <span style={{ fontSize: "12px", fontWeight: "bold" }}>
        {row.u_id}
      </span>
    ),
    sortable: true,
  },
  {
    name : "NAME",
    cell: row => (
      <span style={{ fontSize: "16px" }}>
        {row.u_name}
      </span>
    ),
    sortable: true,
  },
  {
    name : "TELEPHONE",
    cell: row => (
      <span style={{ fontSize: "16px" }}>
        {row.u_tel}
      </span>
    ),
    sortable: true,
  },
  {
    name: "DEPARTMENT",
    cell: row => (
      <span style={{ fontSize: "16px" }}>
        {row.u_department}
      </span>
    ),
    sortable: true,
  },
  {
    name : "MAJOR",
    cell: row => (
      <span style={{ fontSize: "16px" }}>
        {row.u_major}
      </span>
    ),
    sortable: true,
  },
  {
    name : "ROLE",
    cell: row => (
      <span style={{ fontSize: "16px" }}>
        {row.u_privilege}
      </span>
    ),
    sortable: true,
  },
  {
    name : "EDIT / MORE",
    cell: row => <Link href={`/Admin/EditUser?id=${row.u_id}`} className="btn btn-success">Edit</Link>
  },
  {
    name: "DELETE",
    cell: (row) => (
      <button
        onClick={() => handleDelelte(row.u_id)}
        name="item_delete"
        className="btn btn-danger"
      >
        Delete
      </button>
    ),
  },
  
]


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
                      <DataTable 
                                columns={columns} 
                                data={filteredUsers} 
                                pagination
                                fixedHeader
                                fixedHeaderScrollHeight="500px"
                                highlightOnHover
                                actions={
                                  <input 
                                    type="text" 
                                    placeholder="Search by Name" 
                                    className="w-50 form-control"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    >
                                    </input>}
                                
                                
                                >

                                </DataTable>
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
