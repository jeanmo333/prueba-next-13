/** @format */

import Navbar from "@/app/components/Navbar";
import { Sidebar } from "@/app/components/SideBar";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='p-5 bg-blue-gray-300 w-full h-[calc(100vh-4rem)]'>
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
