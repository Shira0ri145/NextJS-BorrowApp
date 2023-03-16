import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";
import Image from 'next/image';
import { useState } from "react";
import axios from "axios";

export default function EditItems(params) {
  const [item_id,setitem_id] = useState("")
  const [item_id_type,setitem_id_type] = useState("")
  const [item_name,setitem_name] = useState("")
  const [item_category,setitem_category] = useState("")
  const [item_faculty,setitem_faculty] = useState("")
  const [item_department,setitem_department] = useState("")
  const [item_status,setitem_status] = useState("")
  const [item_borrow_status,setitem_borrow_status] = useState("")
  const [item_description,setitem_description] = useState("")
  const [item_note,setitem_note] = useState("")

  const handleitem_idChange = (e) =>{
    setitem_id(e.target.value)
  }
  const handleitem_id_typeChange = (e) =>{
    setitem_id_type(e.target.value)
  }
  const handleitem_nameChange = (e) =>{
    setitem_name(e.target.value)
  }
  const handleitem_categoryeChange = (e) =>{
    setitem_category(e.target.value)
  }
  const handleitem_facultyChange = (e) =>{
    setitem_faculty(e.target.value)
  }
  const handleitem_departmentChange = (e) =>{
    setitem_department(e.target.value)
  }
  const handleitem_statusChange = (e) =>{
    setitem_status(e.target.value)
  }
  const handleitem_borrow_statusChange = (e) =>{
    setitem_borrow_status(e.target.value)
  }
  const handleitem_descriptionChange = (e) =>{
    setitem_description(e.target.value)
  }
  const handleitem_noteChange = (e) =>{
    setitem_note(e.target.value)
  }
  const handleOnSubmit = (item_idv) => (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/dashboard/item-info/edit/${item_idv}/`,
    {item_id,item_id_type,item_name,item_category,item_faculty,item_department,item_status,item_borrow_status,item_description,item_note })
    .then((Response)=>{
      alert(Response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
    return(
        <div className="sb-nav-fixed">
      <Head>
        <title>Edit Items</title>
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
              <h1 className="mt-4">Items Management</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Items Management / Edit</li>
              </ol>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4> Edit Item</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleOnSubmit} method="post">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Item ID</label>
                            <input
                              type="text"
                              name="itemid"
                              className="form-control"
                              value={item_id}
                              onChange = {handleitem_idChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Item ID Type</label>
                            <input
                              type="text"
                              name="idtype"
                              className="form-control"
                              value={item_id_type}
                              onChange = {handleitem_id_typeChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Item Name</label>
                            <input
                              type="text"
                              name="Itemname"
                              className="form-control"
                              value={item_name}
                              onChange={handleitem_nameChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Item Type(Category)</label>
                            <select value={item_category} onChange={handleitem_categoryeChange} name="faculty" require={toString()} className="form-control">
                              <option value="">--Select Faculty--</option>
                              <option value="3">Resistor</option>
                              <option value="2">IC Module</option>
                              <option value="1">Osciiloscope</option>
                              <option value="0">Powersupply</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Faculty</label>
                            <select value={item_faculty} onChange={handleitem_facultyChange} name="faculty" require={toString()} className="form-control">
                              <option value="">--Select Faculty--</option>
                              <option value="1">ECE</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Department</label>
                            <select value={item_department} onChange={handleitem_departmentChange} name="department" require={toString()} className="form-control">
                              <option value="">--Select Department--</option>
                              <option value="3">EE</option>
                              <option value="2">MEE</option>
                              <option value="1">DEE</option>
                              <option value="0">Cpr.E</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Physical Status</label>
                            <select value={item_status} onChange={handleitem_statusChange} name="physStatus" require={toString()} className="form-control">
                              <option value="">--Select Role--</option>
                              <option value="3">Defective (cannot be used)</option>
                              <option value="1">Normal (can be used)</option>
                              <option value="0">Slightly damaged (still usable)</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="">Borrow Status</label>
                            <select value={item_borrow_status} onChange={handleitem_borrow_statusChange} name="borrowStatus" require={toString()} className="form-control">
                              <option value="">--Select Role--</option>
                              <option value="3">Borrowed</option>
                              <option value="1">Available</option>
                              <option value="0">Past due</option>
                            </select>
                          </div>

                          <div className="col-md-12 mb-3">
                            <label htmlFor="">Description</label>
                            <textarea value={item_description} onChange={handleitem_descriptionChange} name="description" require={toString()} className="form-control" rows="4"></textarea>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="">Note</label>
                            <textarea value={item_note} onChange={handleitem_noteChange} name="note" require={toString()} className="form-control" rows="4"></textarea>
                          </div>
                          

                          {/* Select picture Btn here */}
                          <div className="col-md-12 mb-3">
                            <label htmlFor="">Picture</label>
                            <div className="input-group">
                              <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"/>
                                <label className="custom-file-label" htmlFor="inputGroupFile04">Choose Picture</label>
                              </div>
                              
                              {/* Show image url when select image in directory */}
                              <div id="url-display"></div>
                            </div>
                            {/* Show Picture when select and save picture file in public/items/ */}
                            <div>
                              <Image id="picture-preview" width={300} height={300}/>
                            </div>
                          </div>
                          
                          <div className="col-md-12 mb-3">
                            <button
                              type="submit"
                              name="add_user"
                              className="btn btn-success"
                            >
                              Update Item
                            </button>
                            <Link href={"/Admin/ItemsManage"}
                              className="btn btn-danger"
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
