import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import heroImg from '../assets/hero.png';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      navigate('/employee');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Fixed header at top of browser */}
      <header className="w-full fixed top-0 left-0 z-50 bg-blue-700 text-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-wide">PayMaster EPMS</div>
          <div className="text-sm text-white/90">Secure Login</div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Brand / Company panel */}

          <section
          className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700"
          aria-label="PayMaster Ltd information"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white blur-2xl animate-pulse" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-200 blur-2xl animate-pulse" />
          </div>

          <div className="relative p-8 flex flex-col h-full">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center border border-white/20">
                <img
                  src={heroImg}
                  alt="PayMaster"
                  className="h-8 w-8 object-contain animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
              <div>
                <h1 className="text-white text-2xl font-extrabold leading-tight">
                  PayMaster Ltd
                </h1>
                <p className="text-white/90 text-sm">Transportation & Logistics Services</p>
              </div>
            </div>

            <div className="mt-6 bg-white/10 border border-white/20 rounded-xl p-4 animate-[fadeInUp_700ms_ease-out_both]">
              <p className="text-white font-semibold">Located in</p>
              <p className="text-white/95">
                Rubavu District, Western Province, Rwanda.
              </p>
            </div>

            <div className="mt-4 text-white/95 space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span>Reliable transport across Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-200 animate-pulse" />
                <span>Logistics support for businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-300 animate-pulse" />
                <span>Fast, secure delivery coordination</span>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between">
                <p className="text-white/80 text-xs">EPMS Access</p>
                <p className="text-white/80 text-xs">Secure Login</p>
              </div>
              <div className="mt-3 rounded-xl overflow-hidden border border-white/20">
                <img
                  src={heroImg}
                  alt="Logistics"
                  className="w-full h-40 object-cover animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Login panel */}
        <section
          className="bg-white rounded-2xl shadow-lg p-7 md:p-8"
          style={{ animation: 'fadeInUp 700ms ease-out both' }}
        >
          <h2 className="text-2xl font-extrabold text-gray-900 text-center">
            EPMS Login
          </h2>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
            <p className="font-semibold">Welcome Back</p>
            <p className="text-blue-800/80">Sign in to manage employees, departments and reports.</p>
          </div>

          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 active:scale-[0.99] transition shadow-sm font-semibold"
            >
              Login
            </button>
          </form>

          {/* Local keyframes via Tailwind arbitrary animation fallback */}
          <style>
            {`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} } 
               @keyframes float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }`}
          </style>
        </section>
        </div>
      </main>
    </div>
  );
};


export default Login;


