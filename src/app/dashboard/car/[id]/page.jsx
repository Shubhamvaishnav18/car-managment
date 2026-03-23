import Link from "next/link"

export default function CarDetailsPage() {
  return (
    // 'bg-background' use kiya hai jo aapke config me #f7f9fb hai
    <main className="w-full min-h-screen">
      <div className="max-w-[1400px] mx-auto p-8 flex flex-col gap-8">

        {/* Breadcrumbs & Actions Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <nav className="flex items-center font-[Manrope] gap-2 mb-2">
              <Link href="/dashboard" className="text-[10px] font-label font-semibold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Inventory</Link>
              <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
              <span className="text-[10px] font-label font-semibold uppercase tracking-widest text-slate-400">Sedans</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-[Manrope] font-extrabold tracking-tight text-[#002045]">2024 Sapphire GT-X</h1>
            <p className="text-[#57657A] font-[Manrope] mt-1">Premium Sports Touring • Last serviced 12 days ago</p>
          </div>

          <div className="flex font-[Manrope] gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#E0E3E5] text-[#191C1E] rounded-md font-headline text-sm font-bold tracking-tight hover:bg-surface-variant transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-lg">edit</span> Edit Details
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#FFDAD6] text-[#93000A] rounded-md font-headline text-sm font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95 duration-200">
              <span className="material-symbols-outlined text-lg">delete</span> Delete
            </button>
          </div>
        </header>

        {/* Media Section (Asymmetric Bento Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-md min-h-[550px] bg-surface-container-low group">
            <img
              alt="Main Car View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
            />
            <div className="absolute font-[Manrope] bottom-6 left-6 flex gap-2">
              <span className="bg-[#032142] backdrop-blur text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Exterior</span>
              <span className="bg-white/90 backdrop-blur text-[#1E3A5A] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">Main</span>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex-1 overflow-hidden rounded-md bg-surface-container-low group relative">
              <img
                alt="Interior Detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=400&auto=format&fit=crop"
              />
              <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-lg cursor-pointer hover:bg-white/40 transition-colors">
                <span className="material-symbols-outlined text-lg">zoom_in</span>
              </span>
            </div>
            <div className="flex-1 overflow-hidden rounded-md bg-surface-container-low group relative">
              <img
                alt="Engine Performance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale mix-blend-multiply opacity-90"
                src="https://images.unsplash.com/photo-1527383418406-f85a3b146499?q=80&w=400&auto=format&fit=crop"
              />
              <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-lg cursor-pointer hover:bg-white/40 transition-colors">
                <span className="material-symbols-outlined text-lg">zoom_in</span>
              </span>
            </div>
          </div>
        </section>

        {/* Specifications & Telemetry (Layered Surfaces) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Main Technical Specs */}
          <section className="lg:col-span-2 space-y-8">
            <div className="bg-surface-container-lowest rounded-md font-[Manrope] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-[#002045] rounded-full"></div>
                <h3 className="text-xl font-headline font-bold text-[#002045]">Technical Specifications</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-label font-bold uppercase tracking-[0.15em] text-[#5A687C]">Manufacturer</span>
                  <div className="flex items-center justify-between group cursor-default">
                    <span className="text-lg font-headline font-semibold text-[#002045]">Precision Dynamics</span>
                    <span className="text-[10px] font-bold px-3 py-2 bg-[#ECEEF0] text-[#7A7E83] rounded">OEM <br /> CERTIFIED</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-label font-bold uppercase tracking-[0.15em] text-[#5A687C]">Vehicle Model</span>
                  <span className="text-lg font-headline font-semibold text-[#002045]">Sapphire GT-X AWD</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-label font-bold uppercase tracking-[0.15em] text-[#5A687C]">Manufacturing Year</span>
                  <span className="text-lg font-headline font-semibold text-[#002045]">2024</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-label font-bold uppercase tracking-[0.15em] text-[#5A687C]">Odometer Mileage</span>
                  <span className="text-lg font-headline font-semibold text-[#002045]">2,418 km</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-label font-bold uppercase tracking-[0.15em] text-[#5A687C]">Fuel / Energy Type</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#F2BC82] text-lg">ev_station</span>
                    <span className="text-lg font-headline font-semibold text-[#002045]">Hybrid Electric (PHEV)</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-label font-bold uppercase tracking-[0.15em] text-[#5A687C]">VIN Registry</span>
                  <span className="text-lg font-headline font-bold text-[#002045] tracking-widest bg-[#F2F4F6] px-3 py-2 rounded inline-block">1HGCM82635A004351</span>
                </div>
              </div>
            </div>

            {/* Maintenance Log Brief */}
            <div className="bg-[#ECEEF0] font-[Manrope] rounded-md p-8">
              <h4 className="text-sm font-bold text-[#002045] mb-6 flex items-center justify-between">
                Recent Maintenance History
                <button className="text-xs text-[#2F4970] font-bold hover:underline">View All Logs</button>
              </h4>
              <div className="space-y-4">
                <div className="flex bg-white items-center justify-between p-4 bg-surface-container-lowest rounded-md border border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4F2E00] flex items-center justify-center text-on-tertiary-container">
                      <span className="material-symbols-outlined text-xs text-[#BC8C56]">build</span>
                    </div>
                    <div>
                      <p className="font-bold font-headline text-sm text-[#002045] leading-none">Diagnostic Scan & Calibration</p>
                      <p className="text-[10px] font-body text-slate-600 mt-1">October 14, 2024 • Service Center #04</p>
                    </div>
                  </div>
                  <span className="text-xs font-label font-bold text-[#CFA577]">COMPLETED</span>
                </div>
                <div className="flex bg-white items-center justify-between p-4 bg-surface-container-lowest rounded-md border border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D5E3FC] flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-sm text-[#57657A]">tire_repair</span>
                    </div>
                    <div>
                      <p className="font-bold font-headline text-sm text-[#002045] leading-none">Tire Rotation & Pressure Check</p>
                      <p className="text-[10px] font-body text-slate-600 mt-1">August 02, 2024 • Precision HQ</p>
                    </div>
                  </div>
                  <span className="text-xs font-label font-bold text-[#57657A]">COMPLETED</span>
                </div>
              </div>
            </div>
          </section>

          {/* Status Sidebar (Telemetry Cards) */}
          <aside className="space-y-6">

            <div className="bg-[#1A365D] font-[Manrope] text-white p-8 mt-[-60px] rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/30 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <span className="text-[10px] text-[#63778D] font-bold uppercase tracking-widest">Estimated Valuation</span>
              <div className="mt-2 text-3xl font-headline font-extrabold tracking-tight">$84,500.00</div>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center gap-1 text-[10px] font-bold bg-white/5 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[12px]">trending_up</span> +2.4%
                </span>
                <span className="text-[10px] font-[Inter] text-[#63778D]">Market average: $82.1k</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 font-[Manrope] rounded-md shadow-md space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-headline font-bold text-[#1A365D]">Vehicle Health</h4>
                <span className="material-symbols-outlined text-[#C6955E]">analytics</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-label font-bold text-[#5A687C] mb-2">
                    <span>BATTERY CAPACITY</span>
                    <span className="text-[#1A365D]">94%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-[#1A365D]" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-label font-bold text-[#5A687C] mb-2">
                    <span>TIRE PRESSURE (PSI)</span>
                    <span className="text-[#C6955E]">WARNING</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex-1 h-1.5 bg-[#1A365D] rounded-full"></div>
                    <div className="flex-1 h-1.5 bg-[#1A365D] rounded-full"></div>
                    <div className="flex-1 h-1.5 bg-[#4F2E00] rounded-full"></div>
                    <div className="flex-1 h-1.5 bg-[#1A365D] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-label font-bold text-[#5A687C] mb-2">
                    <span>SERVICE READINESS</span>
                    <span className="text-[#1A365D]">OPTIMAL</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-[#1A365D]" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-surface-container">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E6E8EA] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A365D] text-sm">security</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-headline font-bold text-[#1A365D]">Security System Active</span>
                    <span className="text-[12px] font-body text-slate-600">Remote monitoring enabled</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F2F4F6] min-h-[250px] font-[Manrope] p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#1A365D] shadow-sm">
                <span className="material-symbols-outlined">print</span>
              </div>
              <div>
                <p className="font-headline font-bold text-sm text-[#1A365D] mt-2">Export Datasheet</p>
                <p className="text-[10px] font-[Inter] text-on-secondary-container mt-2">Download technical PDF for compliance or sales.</p>
              </div>
              <button className="w-full py-3 mt-4 bg-white text-[#1A365D] border border-outline-variant/30 rounded-md text-xs font-bold hover:bg-surface-container-lowest transition-colors">
                Generate Report
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="w-full pt-5 mt-[20px] border-t border-slate-200 font-[Manrope] bg-transparent flex flex-col md:flex-row justify-between items-center">
        <p className="font-sans text-xs text-slate-500">© 2024 Kinetic Precision Framework. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-sans text-xs text-slate-500">
          <Link href="#" className="hover:text-[#0F294D] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#0F294D] transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-[#0F294D] transition-colors">Support</Link>
          <Link href="#" className="hover:text-[#0F294D] transition-colors">API Docs</Link>
        </div>
      </footer>
    </main>
  )
}