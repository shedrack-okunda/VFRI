import { NavLink } from 'react-router-dom'
import { FiFileText, FiLayers, FiMail, FiLogOut } from 'react-icons/fi'
import { supabase } from '../lib/supabase'

export default function Sidebar() {

  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  const linkClass = ({ isActive }) => `
    flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-all duration-200
    ${isActive
      ? 'bg-gold text-green-deep'
      : 'text-white/70 hover:bg-white/5 hover:text-gold'}
  `

  return (
    <aside className="w-[260px] bg-[#071b0d] border-r border-gold/10 p-6 hidden lg:flex flex-col">

      <div className="mb-10">
        <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
          VFRI CMS
        </p>

        <h2 className="font-display text-2xl text-white leading-tight">
          Admin Dashboard
        </h2>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <FiLayers /> Dashboard
        </NavLink>

        <NavLink to="/admin/programs" className={linkClass}>
          <FiFileText /> Programs
        </NavLink>

        <NavLink to="/admin/news" className={linkClass}>
          <FiFileText /> News
        </NavLink>

        <NavLink to="/admin/messages" className={linkClass}>
          <FiMail /> Messages
        </NavLink>
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm"
      >
        <FiLogOut /> Logout
      </button>
    </aside>
  )
}