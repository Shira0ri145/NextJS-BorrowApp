import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";

export default function Dashboard() {
  return(
    // fixed nav
    <div class="sb-nav-fixed"> 
      <Head>
        <title>Admin Dashboard</title>
      
      </Head>
      {/* Top navbar */}
      <AdminNavbar/>
      
      <div id="layoutSidenav"> {/* Sidenav */}
        <AdminSidebar/>

        <div id="layoutSidenav_content">
            <main>

            {/* Dashboard Content */}
            <div class="container-fluid px-4">
              <h1 class="mt-4">Dashboard</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
              <div class="row col-md-12">
                {/* Items Lists */}
                <div class="col-xl-3 col-md-6">
                  <div class="card mb-4">
                    <div class="card-body">
                      Items lists
                      {/* <?php
                    $dashboard_catagory = "SELECT * from map_location";
                    $query = mysqli_query($conn, $dashboard_catagory);
                    if ($total = mysqli_num_rows($query)) {
                        echo '<h4 class="mb-0">' . $total . '</h4>';
                    } else {
                        echo '<h4 class="mb-0"> No data </h4>';
                    }

                    ?> */}
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                      <a
                        class="stretched-link text-black"
                        href="/"
                      >
                        See more
                      </a>
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Student Count */}
                <div class="col-xl-3 col-md-6">
                  {/*  */}
                  <div class="card" id="photo_card">
                    <div class="card-body">
                       Student
                    {/*<?php
                    $dashboard_catagory = "SELECT * from photo_location";
                    $query = mysqli_query($conn, $dashboard_catagory);
                    if ($total = mysqli_num_rows($query)) {
                        echo '<h4 class="mb-0">' . $total . '</h4>';
                    } else {
                        echo '<h4 class="mb-0"> No data </h4>';
                    }

                    ?> */}
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                      <a
                        class="text-black stretched-link"
                        href="/"
                      >
                        See more
                      </a>
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* borrowed items */}
                <div class="col-xl-3 col-md-6">
                  <div class="card" id="hotel_card">
                    <div class="card-body">
                      Borrowed Items
                      {/* <?php
                    $dashboard_catagory = "SELECT * from hotel_location";
                    $query = mysqli_query($conn, $dashboard_catagory);
                    if ($total = mysqli_num_rows($query)) {
                        echo '<h4 class="mb-0">' . $total . '</h4>';
                    } else {
                        echo '<h4 class="mb-0"> No data </h4>';
                    }

                    ?> */}
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                      <a
                        class="text-black stretched-link"
                        href="/"
                      >
                        See more
                      </a>
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Past the due */}
                <div class="col-xl-3 col-md-6">
                  <div class="card" id="pump_card">
                    <div class="card-body">
                      Pass The due
                      {/* <?php
                    $dashboard_catagory = "SELECT * from pump_location";
                    $query = mysqli_query($conn, $dashboard_catagory);
                    if ($total = mysqli_num_rows($query)) {
                        echo '<h4 class="mb-0">' . $total . '</h4>';
                    } else {
                        echo '<h4 class="mb-0"> No data </h4>';
                    }

                    ?> */}
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                      <a
                        class="text-black stretched-link"
                        href="location-table.php?location=pump"
                      >
                        See more
                      </a>
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>
            {/* Footer */}
            <AdminFooter/>
        </div>

      </div>
      
    </div>

  )
  
};
