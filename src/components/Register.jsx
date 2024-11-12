import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Simpan data user ke localStorage
    const userData = { name, email, password };

    // Cek apakah localStorage sudah ada data sebelumnya
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Tambahkan user baru ke array
    existingUsers.push(userData);

    // Simpan kembali ke localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Notifikasi sukses dengan slide dari kiri
    toast.success('Registrasi berhasil! Silakan login.', {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide, // Animasi slide dari kiri
    });

    // Arahkan ke halaman login setelah 2 detik
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-gray-950 mt-4 text-center">
          Have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* ToastContainer untuk notifikasi */}
      <ToastContainer />
    </div>
  );
};

export default Register;
