"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
const AdminNavbar = ({}) => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token cookie by setting Max-Age to 0
    document.cookie = "token=; path=/; Max-Age=0";
    // Optionally clear any other user-related data from localStorage
    localStorage.removeItem("username"); // If you're storing user info
    // Reset the Authorization header in axios
    delete axios.defaults.headers.Authorization;
    // Redirect to login
    router.push("/login");
  };

  return (
    <div className="flex bg-[#003F62] justify-center px-5 md:px-10 fadeColor min-h-[70px]">
      <div className="flex w-full justify-between items-center max-w-[1400px]">
        <Image
          className="cursor-pointer"
          width={220}
          height={96}
          src="/main-logo.svg"
          alt="Alex logo"
          onClick={() => router.push("/admin")}
          priority={true} // Prioritizes loading for immediate visibility
          loading="eager" // Forces eager loading instead of lazy loading
        />
        <Image
          className="cursor-pointer"
          width={40}
          height={53}
          src="/logout-icon.svg"
          alt="Alex logo"
          onClick={handleLogout}
          priority={true} // Prioritizes loading for immediate visibility
          loading="eager" // Forces eager loading instead of lazy loading
        />
      </div>
    </div>
  );
};

export default AdminNavbar;
