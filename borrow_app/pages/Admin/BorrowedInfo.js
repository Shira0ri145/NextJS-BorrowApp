import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import {  useEffect,useState } from "react";
import { useRouter } from "next/router";
import DataTable from 'react-data-table-component';


export default function BorrowedInfo() {
  const [BorrowedItem,setBorrowedItem] = useState([])
  const [search,setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchData = async () => {
    try {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/update-expire/`)
      .then(res =>{
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/borrowing-info/`)
        .then(response => {
          // console.log(response);
          setBorrowedItem(response.data);
          setFilteredItems(response.data);
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

  const router = useRouter()

  useEffect(() => {
    let role = window.localStorage.getItem('role');
    let token = window.localStorage.getItem('token');
    if((role !== 'Admin') || !token){
      router.push('/')
    }
    fetchData();
  }, []);

  useEffect(() => {
    const result = BorrowedItem.filter(BorrowedItem => {
      return BorrowedItem.b_item.toLowerCase().match(search.toLowerCase());
    })

    setFilteredItems(result);
  }, [search])
  
  const handleDelelte = (b_id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/borrowing-info/delete/${parseInt(b_id)}/`)
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
    name : "BORROW INFO ID",
    selector: row => row.b_id,
      sortable: true,
      sortField: "b_id",
      style: {
        fontSize: "15px", fontWeight: "bold"

      }
  },
  {
    name : "EMAIL",
    selector: row => row.b_user,
      sortable: true,
      sortField: "b_user",
      style: {
        fontSize: "16px",

      }
  },
  // {
  //   name : "BORROW TIME",
  //   selector: row => row.b_borrow_time,
  //     sortable: true,
  //     sortField: "b_borrow_time",
  //     style: {
  //       fontSize: "16px",

  //     }
  // },
  {
    name : "BORROW TIME",
    selector: row => (new Date(row.b_borrow_time)).toLocaleString('en-US', {
      dateStyle: 'medium',
        timeStyle: 'medium',
        hour12: false,
    }),
      sortable: true,
      sortField: "b_borrow_time",
      style: {
        fontSize: "17px",

      }
  },
  {
    name: "RETURN TIME",
    selector: row => (new Date(row.b_return_time)).toLocaleString('en-US', {
      dateStyle: 'medium',
        timeStyle: 'medium',
        hour12: false,
    }),
      sortable: true,
      sortField: "b_return_time",
      style: {
        fontSize: "17px",

      }
  },
  {
    name : "LOCATION",
    selector: row => row.b_location,
      sortable: true,
      sortField: "b_location",
      style: {
        fontSize: "16px",

      }
  },
  {
    name : "NOTE",
    selector: row => row.b_note,
      sortable: true,
      sortField: "b_note",
      style: {
        fontSize: "16px",

      }
  },
  {
    name : "EDIT / MORE",
    cell: row => <Link href={`/Admin/EditBorrowed?id=${row.b_id}`} className="btn btn-success">Edit</Link>
  },
  {
    name: "DELETE",
    cell: (row) => (
      <button
        onClick={() => handleDelelte(row.b_id)}
        name="item_delete"
        className="btn btn-danger"
      >
        Delete
      </button>
    ),
  },
  
]

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
                            <li className="breadcrumb-item"><Link href="/Admin"> Dashboard</Link></li>
                            <li className="breadcrumb-item active">Borrowing Infomation</li>
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
                      <DataTable 
                                columns={columns} 
                                data={filteredItems} 
                                pagination
                                fixedHeader
                                fixedHeaderScrollHeight="500px"
                                highlightOnHover
                                actions={
                                  <input 
                                    type="text" 
                                    placeholder="Search by Items name" 
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
    )
};
