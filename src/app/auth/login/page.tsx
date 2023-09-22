/** @format */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (dataForm) => {
      if (formik.values.email === "") {
        toast.error("Ingresa tu email");
        return;
      } else if (formik.values.password === "") {
        toast.error("Ingresa tu contraseña");
        return;
      } else {
        setLoading(true);
        const res = await signIn("credentials", {
          email: dataForm.email,
          password: dataForm.password,
          redirect: false,
        });
        setLoading(false);

        if (res?.error) {
          toast.error(res.error);
          return;
        }

        if (res?.ok) return router.push("/");
      }
    },
  });
  return (
    <div className='container mx-auto p-7 max-w-xl'>
      <h1 className='text-indigo-600 font-black text-4xl text-center'>
        Iniciar <span className='text-black'> Sesión </span>
      </h1>

      <div className='mt-3 md:mt-5 shadow-lg px-5 py-1 rounded-xl bg-white'>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className='uppercase ml-1 text-gray-600 block text-md font-bold'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email de Registro'
              className='border w-full p-3 mt-1 bg-gray-50 rounded-xl'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className='mt-5'>
            <label className='uppercase ml-1 text-gray-600 block text-md font-bold'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Tu Password'
              className='border w-full p-3 mt-1 bg-gray-50 rounded-xl'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <nav className='flex justify-end'>
            <Link className='block text-center mt-3 text-gray-500' href=''>
              Olvide mi Password
            </Link>
          </nav>

          <button
            type='submit'
            className='bg-indigo-700 min-w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto '>
            {loading ? "Loading" : "Iniciar Sesión"}
          </button>
        </form>

        <nav className='mt-1 flex justify-end pb-5'>
          <Link className='block text-center my-5 text-gray-500' href=''>
            ¿No tienes una cuenta?{" "}
            <span className='text-indigo-700'>Regístrate</span>
          </Link>
        </nav>
      </div>
      {/* <form onSubmit={formik.handleSubmit}>
        <div className='mt-5'>
          <label className='uppercase ml-1 text-gray-600 block text-md font-bold'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='Tu Email'
            className='border w-full p-3 mt-1 bg-gray-300 rounded-xl'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className='mt-5'>
          <label className='uppercase ml-1 text-gray-600 block text-md font-bold'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='Tu Password'
            className='border w-full p-3 mt-1 bg-gray-300 rounded-xl'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <button
          type='submit'
          className='bg-indigo-700 min-w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto '>
          {loading ? "loading..." : "Iniciar Sesión"}
        </button>
      </form> */}
    </div>
  );
};

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export default Login;
