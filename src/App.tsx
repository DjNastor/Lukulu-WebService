
import React from "react";
import { AgencyFooter } from "./components/AgencyFooter";
import { AgencyHeader } from "./components/AgencyHeader";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { SmartForm } from "./components/SmartForm";
import { ToolsSection } from "./components/ToolsSection";
import { ValueStrip } from "./components/ValueStrip";

export function App() {
  return <div className="min-h-screen w-full overflow-x-hidden bg-[#fdfcfb] text-[#1a1817]"><AgencyHeader /><main><HeroSection /><ValueStrip /><PortfolioSection /><ServicesSection /><ToolsSection /><ProcessSection /><FAQSection /><SmartForm /><ContactSection /></main><AgencyFooter /></div>;
}