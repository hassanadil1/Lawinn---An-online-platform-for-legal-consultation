import { Footer_Boxes } from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import { LawyerGrid } from "@/components/LawyerGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar2 />
      {/* Header Section */}
      <section className="mt-40 relative bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Find the Best Lawyers for Your Legal Needs
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Explore expert lawyers across various legal fields, ready to represent and guide you through any legal challenge.
          </p>
          <a
            href="#lawyerGrid"
            className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Browse Lawyers
          </a>
        </div>
      </section>
      
      {/* Lawyer Grid Section */}
      <section id="lawyerGrid">
        <LawyerGrid />
      </section>

      {/* Footer Section */}
      <Footer_Boxes />
    </main>
  );
}
