/** @format */

import React from "react";

const Register = () => {
  return (
    <div className='container mx-auto p-7 max-w-xl'>
      <div className='mt-5'>
        <label className='uppercase ml-1 text-gray-600 block text-md font-bold'>
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='Tu Password'
          className='border w-full p-3 mt-1 bg-gray-300 rounded-xl'
          //   onChange={formik.handleChange}
          //   value={formik.values.password}
        />
      </div>
    </div>
  );
};

export default Register;
