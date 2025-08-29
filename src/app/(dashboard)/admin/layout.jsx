import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
export default function AdminLayout({ children }) {
  //Shit
  return (
    <div className="flex min-h-screen flex-col ">
      <AdminNavbar />
      <div className="bg-[#003F62] flex flex-1 p-5 md:p-10 justify-center items-center ">
        <div className="flex p-6 w-full flex-1 min-h-[600px] bg-[#02517D] rounded-[10px] max-w-[1400px] customScrollbarBox overflow-y-scroll">
          <AdminSidebar />
          <main className="shadow-xl shadow-[#0000004d] flex-1 flex min-h-full bg-[#21709C] rounded-[10px] p-5">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
