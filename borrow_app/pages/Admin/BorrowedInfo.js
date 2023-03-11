import AdminFooter from "@/components/AdminFooter";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import Head from "next/head";

export default function BorrowedInfo() {
    return(
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
            <h1> This is Item Borrowed Items page</h1>

          </main>
            {/* Footer */}
            <AdminFooter/>
        </div>

      </div>
      
    </div>
    )
};
