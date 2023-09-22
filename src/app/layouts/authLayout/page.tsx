/** @format */
"use client";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <main className='container mx-auto p-5 md:flex md:justify-center'>
      <h1>auth layout</h1>
      <div className='md:w-2/3 lg:w-2/5'>{children}</div>
    </main>
  );
};

export default AuthLayout;
