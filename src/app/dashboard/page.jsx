import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const cars = [
  { id: 1, make: "Porsche Taycan", year: "2023", type: "Electric", vin: "694Z", battery: "84%", odo: "12,402 km", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=600&auto=format&fit=crop", status: "AVAILABLE" },
  { id: 2, make: "BMW M5 Competition", year: "2022", type: "V8 Twin-Turbo", vin: "8821", fuel: "22%", odo: "300 km", img: "https://images.unsplash.com/photo-1555008872-f03b347fd05e?q=80&w=600&auto=format&fit=crop", status: "MAINTENANCE" },
  { id: 3, make: "Audi e-tron GT", year: "2024", type: "Electric", vin: "4481", battery: "100%", odo: "420 km", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop", status: "AVAILABLE" },
]

export default function HomePage() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-extrabold font-[Manrope] tracking-tighter text-[#0F294D] mb-2">Fleet Overview</h1>
            <p className="text-slate-800 font-[Inter]">Manage your technical inventory and operational readiness.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex font-[Manrope] bg-slate-100 rounded-sm p-1">
              <button className="px-4 py-2 bg-white rounded-sm shadow-sm text-sm font-bold flex items-center gap-2 text-slate-900">
                <span className="material-symbols-outlined text-base">grid_view</span> Grid
              </button>
              <button className="px-4 py-2 text-slate-500 text-sm font-bold flex items-center gap-2 hover:bg-slate-200/50 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-base">format_list_bulleted</span> List
              </button>
            </div>
            <button className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-sm text-sm font-[Manrope] font-bold border border-slate-200 shadow-sm hover:bg-slate-50 transition-all text-slate-900">
              <span className="material-symbols-outlined text-base">filter_list</span> Filters
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-[Manrope] gap-6 mb-12">

          {/* Stat Card 1 */}
          <div className="bg-white p-5 rounded-md shadow-[0_12px_40px_rgba(25,28,30,0.06)] flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#565960]">Active Fleet</span>
              <span className="material-symbols-outlined text-[#0F294D]">directions_car</span>
            </div>
            <div>
              <h3 className="text-3xl font-black font-[Manrope] text-[#0F294D]">128</h3>
              <p className="text-[10px] text-green-600 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +4 this month
              </p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white p-5 rounded-md shadow-[0_12px_40px_rgba(25,28,30,0.06)] flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#565960]">In Service</span>
              <span className="material-symbols-outlined text-[#C6955E]">build</span>
            </div>
            <div>
              <h3 className="text-3xl font-black font-[Manrope] text-[#0F294D]">12</h3>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#4F2E00] h-full w-[12%]"></div>
              </div>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white p-5 rounded-md shadow-[0_12px_40px_rgba(25,28,30,0.06)] flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#565960]">Revenue / KM</span>
              <span className="material-symbols-outlined text-[#0F294D]">payments</span>
            </div>
            <div>
              <h3 className="text-3xl font-black font-[Manrope] text-[#0F294D]">$4.82</h3>
              <p className="text-[10px] text-blue-600 font-bold">Standard Performance</p>
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-[#0F294D] text-white p-5 rounded-md shadow-xl shadow-blue-900/10 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Compliance Rate</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <div>
              <h3 className="text-3xl font-black font-[Manrope]">99.2%</h3>
              <p className="text-[10px] opacity-80 font-bold">Excellent Safety Rating</p>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white font-[Manrope] rounded-xl border overflow-hidden flex flex-col">
              <div className="h-55 relative bg-slate-100">
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded text-white z-10 ${car.status === 'AVAILABLE' ? 'bg-[#0F294D]' : 'bg-[#492C03]'}`}>{car.status}</span>
                <img src={car.img} alt={car.make} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-extrabold text-lg text-slate-900">{car.make}</h3>
                      <p className="text-sm text-slate-800">{car.year} • {car.type}</p>
                    </div>
                    <div className="text-[10px] bg-[#ECEEF0] px-2 py-1 rounded text-slate-900">VIN: ...{car.vin}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase">{car.battery ? 'Battery' : 'Fuel'}</p>
                      <p className={`text-sm font-extrabold ${car.fuel && parseInt(car.fuel) < 25 ? 'text-red-500' : 'text-slate-900'}`}>{car.battery || car.fuel}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Odometer</p>
                      <p className="text-sm font-bold text-slate-900">{car.odo}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-2">
                  <Link href={`/dashboard/car/${car.id}`} className="flex-1">
                    <Button variant="outline" className="w-full text-[#0F294D] py-5 font-bold rounded-sm bg-gray-100 border-slate-200">DETAILS</Button>
                  </Link>
                  <Button variant="outline" className="px-3 text-[#0F294D] py-5 font-bold rounded-sm">•••</Button>
                </div>
              </div>
            </div>
          ))}

          {/* Expand Fleet Card */}
          <div className="bg-[#ECEEF0] rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center min-h-[350px]">
            <div className="w-12 h-12 rounded-md bg-[white] font-bold shadow-sm flex items-center justify-center text-2xl text-[#002045] mb-4">+</div>
            <h3 className="font-extrabold font-[Manrope] text-lg text-[#002045]">Expand Fleet</h3>
            <p className="text-xs font-[Inter] font-bold text-[#43474E] mt-2 max-w-[200px]">Register a new vehicle with VIN identification and telemetry sync.</p>
          </div>
        </div>


      </div>
      <footer className="w-full pt-5 mt-[20px] border-t border-slate-200 font-[Manrope] bg-transparent flex flex-col md:flex-row justify-between items-center">
        <p className="font-sans text-xs text-slate-500">© 2024 Kinetic Precision Framework. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-sans text-xs text-slate-500">
          <Link href="#" className="hover:text-[#0F294D] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#0F294D] transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-[#0F294D] transition-colors">Support</Link>
          <Link href="#" className="hover:text-[#0F294D] transition-colors">API Docs</Link>
        </div>
      </footer>
    </>
  )
}