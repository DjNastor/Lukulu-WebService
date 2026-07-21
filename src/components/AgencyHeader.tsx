import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const navigation = [
{ label: "Portfolio", href: "#portfolio" },
{ label: "Services", href: "#services" },
{ label: "Tools", href: "#tools" },
{ label: "Process", href: "#process" }];


export function AgencyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#c28d4b]/15 bg-white/80 px-4 py-3 shadow-[0_12px_38px_rgba(26,24,23,0.07)] backdrop-blur-xl sm:px-6" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 text-[#1a1817]" aria-label="Lukulu home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a1817] font-serif text-xl font-bold text-white">L</span>
          <span className="font-serif text-xl font-bold tracking-tight">Lukulu</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) =>
          <a key={item.href} href={item.href} className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-700 transition-colors hover:text-[#c28d4b]">
              {item.label}
            </a>
          )}
        </div>
        <a href="#contact" className="hidden rounded-full bg-[#1a1817] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#92400e] sm:inline-flex">
          Request a Quote
        </a>
        <button type="button" className="rounded-lg p-2 text-[#1a1817] lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation menu">
          {menuOpen ? <XIcon size={23} /> : <MenuIcon size={23} />}
        </button>
      </nav>
      {menuOpen &&
      <div id="mobile-navigation" className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#c28d4b]/15 bg-white p-5 shadow-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) =>
          <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-bold text-stone-800 hover:bg-stone-50">
                {item.label}
              </a>
          )}
            <a href="#contact" onClick={closeMenu} className="mt-2 rounded-xl bg-[#1a1817] px-4 py-3 text-center text-sm font-bold text-white">Request a Quote</a>
          </div>
        </div>
      }
    </header>);

}