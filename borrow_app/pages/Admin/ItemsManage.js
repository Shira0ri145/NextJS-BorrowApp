import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import DataTable from 'react-data-table-component';

export default function ItemManage() {
  const router = useRouter()
  const [Item,setItem] = useState([]);
  const [search,setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchData = async () => {
    try {
     axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/update-expire/`)
      .then(res =>{ 
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/item-info/`)
        .then(response => {
          // console.log(response);
          setItem(response.data);
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

  useEffect(()=>{ 
    let role = window.localStorage.getItem('role');
    let token = window.localStorage.getItem('token');
    if((role !== 'Admin') || !token){
      router.push('/')
    }
    fetchData();
  }, []);

  useEffect(() => {
    const result = Item.filter(Item => {
      return Item.item_name.toLowerCase().match(search.toLowerCase());
    })

    setFilteredItems(result);
  }, [search])

  const handleDelete = (item_id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/api/dashboard/item-info/delete/${item_id}/`)
      .then((response) => {
        // console.log(response.data);
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const columns = [
    {
      name: "ITEM ID",
      selector: row => row.item_id,
      sortable: true,
      sortField: "item_id",
      style: {
        fontSize: "12px", fontWeight: "bold"

      }
    },
    {
      name: "ITEM TYPE",
      selector: row => row.item_id_type,
      sortable: true,
      sortField: "item_id_type",
      style: {
        fontSize: "14px"

      }
    },
    {
      name: "ITEM NAME",
      selector: row => row.item_name,
      sortable: true,
      sortField: "item_name",
      style: {
        fontSize: "14px",

      }
    },
    {
      name: "DEPARTMENT",
      selector: row => row.item_department,
      sortable: true,
      sortField: "item_department",
      style: {
        fontSize: "16px",
      

      }
    },
    {
      name : "MAJOR",
      selector: row => row.item_major,
      sortable: true,
      sortField: "item_major",
      style: {
        fontSize: "16px",
      }
    },
    {
      name : "BORROW STATUS",
      selector: row => row.item_borrow_status,
      sortable: true,
      sortField: "item_borrow_status",
      style: {
        fontSize: "16px",
      }
    },
    {
      name : "EDIT / MORE",
      cell: row => <Link href={`/Admin/EditItems?id=${row.item_id}`} className="btn btn-success">Edit</Link>
    },
    {
      name: "DELETE",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row.item_id)}
          name="item_delete"
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
    
  ]
  // pagination feture
  


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
                </main>
          {/* Footer */}
          <AdminFooter />
        </div>

      </div>
    </div>
  );
}