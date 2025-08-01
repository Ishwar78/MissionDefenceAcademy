import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

// Service Pages
import IndianArmy from "./pages/services/IndianArmy";
import IndianNavy from "./pages/services/IndianNavy";
import IndianAirForce from "./pages/services/IndianAirForce";
import NDA from "./pages/services/NDA";
import Hostel from "./pages/services/Hostel";
import MessFacility from "./pages/services/MessFacility";

// Academic Pages
import ArmySpecialBatch from "./pages/academics/ArmySpecialBatch";
import AirForceSpecialBatch from "./pages/academics/AirForceSpecialBatch";
import NavySpecialBatch from "./pages/academics/NavySpecialBatch";
import NDASpecialBatch from "./pages/academics/NDASpecialBatch";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />

          {/* About route */}
          <Route path="/about" element={<About />} />

          {/* Gallery route */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Service routes */}
          <Route path="/services/indian-army" element={<IndianArmy />} />
          <Route path="/services/indian-navy" element={<IndianNavy />} />
          <Route path="/services/indian-air-force" element={<IndianAirForce />} />
          <Route path="/services/nda" element={<NDA />} />
          <Route path="/services/hostel" element={<Hostel />} />
          <Route path="/services/mess-facility" element={<MessFacility />} />


          {/* Academic routes */}
          <Route path="/academics/army-special-batch" element={<ArmySpecialBatch />} />
          <Route path="/academics/air-force-special-batch" element={<AirForceSpecialBatch />} />
          <Route path="/academics/navy-special-batch" element={<NavySpecialBatch />} />
          <Route path="/academics/nda-special-batch" element={<NDASpecialBatch />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Footer link routes */}
          <Route
            path="/blog"
            element={
              <PlaceholderPage
                title="Blog"
                description="Read the latest articles, tips, and success stories from Mission Defence Academy."
              />
            }
          />
          <Route
            path="/faq"
            element={
              <PlaceholderPage
                title="FAQ"
                description="Find answers to frequently asked questions about our courses and admission process."
              />
            }
          />
          <Route
            path="/authors"
            element={
              <PlaceholderPage
                title="Authors"
                description="Meet our expert faculty and trainers who guide students towards success."
              />
            }
          />
          <Route
            path="/events"
            element={
              <PlaceholderPage
                title="Events"
                description="Stay updated with upcoming events, workshops, and special training programs."
              />
            }
          />
          <Route
            path="/shop"
            element={
              <PlaceholderPage
                title="Shop"
                description="Purchase study materials, books, and training equipment from our academy store."
              />
            }
          />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
