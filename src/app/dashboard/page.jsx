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
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0F294D]">Fleet Overview</h1>
          <p className="text-slate-500 mt-1">Manage your technical inventory and operational readiness.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-white">Grid</Button>
          <Button variant="outline" className="bg-white">List</Button>
          <Button variant="outline" className="bg-white">Filters</Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border">
          <p className="text-xs font-bold text-slate-400 uppercase">Active Fleet</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">128</p>
          <p className="text-xs text-green-500 font-medium mt-1">↗ +4 this month</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-b-4 border-b-amber-500">
          <p className="text-xs font-bold text-slate-400 uppercase">In Service</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
        </div>
        <div className="bg-white p-5 rounded-xl border">
          <p className="text-xs font-bold text-slate-400 uppercase">Revenue / KM</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">$4.82</p>
          <p className="text-xs text-blue-500 font-medium mt-1">Standard Performance</p>
        </div>
        <div className="bg-[#0F294D] text-white p-5 rounded-xl border">
          <p className="text-xs font-bold text-slate-400 uppercase">Compliance Rate</p>
          <p className="text-3xl font-bold mt-2">99.2%</p>
          <p className="text-xs text-slate-300 font-medium mt-1">Excellent Safety Rating</p>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-xl border overflow-hidden flex flex-col">
            <div className="h-48 relative bg-slate-100">
              <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded text-white z-10 ${car.status === 'AVAILABLE' ? 'bg-[#0F294D]' : 'bg-amber-600'}`}>{car.status}</span>
              <img src={car.img} alt={car.make} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{car.make}</h3>
                    <p className="text-xs text-slate-500">{car.year} • {car.type}</p>
                  </div>
                  <div className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 font-mono">VIN: ...{car.vin}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{car.battery ? 'Battery' : 'Fuel'}</p>
                    <p className={`text-sm font-bold ${car.fuel && parseInt(car.fuel) < 25 ? 'text-red-500' : 'text-slate-900'}`}>{car.battery || car.fuel}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Odometer</p>
                    <p className="text-sm font-bold text-slate-900">{car.odo}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-2">
                <Link href={`/dashboard/car/${car.id}`} className="flex-1">
                  <Button variant="outline" className="w-full text-[#0F294D] border-slate-200">Details</Button>
                </Link>
                <Button variant="outline" className="px-3 text-slate-500">•••</Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Expand Fleet Card */}
        <div className="bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center min-h-[350px]">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl text-slate-400 mb-4">+</div>
          <h3 className="font-bold text-lg text-[#0F294D]">Expand Fleet</h3>
          <p className="text-xs text-slate-500 mt-2 max-w-[200px]">Register a new vehicle with VIN identification and telemetry sync.</p>
        </div>
      </div>
    </div>
  )
}