import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";

export default function UserManage() {
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
                        <a
                          href="register-add.php"
                          class="btn btn-primary float-end"
                        >
                          Add
                        </a>
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
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>ad</td>
                                <td>ad</td>
                                <td>ad</td>
                                <td>asd</td>
                                <td>
                                    <a href="register-edit.php?id=<?= $row['id']; ?>" class="btn btn-success">Edit</a>
                                </td>
                                <td>
                                <form action="user-add-update.php" method="post">
                                <button type="sumbit" name="user_delete" value="<?= $row['id']; ?>" class="btn btn-danger">Delete</button>
                                </form>
                                </td>
                            </tr>
                            
                            {/* table header */}
                            {/* Put Data here */}
                        </tbody>

                        <tbody>
                            <tr>
                                <td>ad</td>
                                <td>ad</td>
                                <td>ad</td>
                                <td>asd</td>
                                <td>
                                    <a href="register-edit.php?id=<?= $row['id']; ?>" class="btn btn-success">Edit</a>
                                </td>
                                <td>
                                <form action="user-add-update.php" method="post">
                                <button type="sumbit" name="user_delete" value="<?= $row['id']; ?>" class="btn btn-danger">Delete</button>
                                </form>
                                </td>
                            </tr>
                            
                            {/* table header */}
                            {/* Put Data here */}
                        </tbody>

                        <tbody>
                            <tr>
                                <td>ad</td>
                                <td>ad</td>
                                <td>ad</td>
                                <td>asd</td>
                                <td>
                                    <a href="register-edit.php?id=<?= $row['id']; ?>" class="btn btn-success">Edit</a>
                                </td>
                                <td>
                                <form action="user-add-update.php" method="post">
                                <button type="sumbit" name="user_delete" value="<?= $row['id']; ?>" class="btn btn-danger">Delete</button>
                                </form>
                                </td>
                            </tr>
                            
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
