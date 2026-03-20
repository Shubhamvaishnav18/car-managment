import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center space-x-3 mb-8 px-2">
            <div className="w-8 h-8 bg-[#0F294D] rounded text-white flex items-center justify-center font-bold text-xs">KP</div>
            <div>
              <h2 className="font-bold text-sm text-slate-900 leading-tight">Precision Motors</h2>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider">FLEET MANAGER</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <div className="text-xs font-bold text-slate-400 mb-2 px-2 tracking-wider mt-6">OVERVIEW</div>
            <Link href="/dashboard" className="flex items-center px-2 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700">Fleet</Link>
            <Link href="#" className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50">Maintenance</Link>
            <Link href="#" className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50">Documents</Link>
            <Link href="#" className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50">Team</Link>
          </nav>
        </div>

        <div>
          <Link href="/dashboard/add-car">
            <Button className="w-full bg-[#0F294D] hover:bg-[#0B1727] text-white mb-6">+ Add New Vehicle</Button>
          </Link>
          <div className="space-y-1">
            <Link href="#" className="block px-2 py-2 text-sm text-slate-500 hover:text-slate-900">Help Center</Link>
            <Link href="/login" className="block px-2 py-2 text-sm text-slate-500 hover:text-slate-900">Logout</Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <nav className="flex space-x-6 text-sm font-medium">
            <span className="text-slate-900 border-b-2 border-slate-900 pb-[21px] pt-5">Dashboard</span>
            <span className="text-slate-500 hover:text-slate-900 cursor-pointer pt-5">Inventory</span>
            <span className="text-slate-500 hover:text-slate-900 cursor-pointer pt-5">Service</span>
            <span className="text-slate-500 hover:text-slate-900 cursor-pointer pt-5">Analytics</span>
          </nav>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search fleet..." className="bg-slate-100 border-none rounded-md px-4 py-1.5 text-sm outline-none" />
            <div className="w-8 h-8 bg-slate-200 rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}