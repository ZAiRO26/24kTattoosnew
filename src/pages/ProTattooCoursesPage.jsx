import React from 'react';
import { Link } from 'react-router-dom';

export default function ProTattooCoursesPage() {
  return (
    <div className="min-h-screen bg-minimal-white">
      {/* Hero Section */}
      <section className="relative bg-minimal-black text-minimal-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            Pro Tattoo Courses
          </h1>
          <p className="text-xl md:text-2xl text-minimal-gray font-light">
            Master advanced techniques and become an industry leader
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-minimal-black leading-relaxed">
            <p className="text-xl mb-8">
              The Pro Tattoo Courses are designed for artists aspiring to push boundaries and become industry leaders. This extensive program unlocks mastery in advanced tattoo techniques—realism, portraiture, illustrative works, intricate shading, and bespoke client-driven projects.
            </p>
            
            <p className="text-lg mb-8">
              Each module immerses students in advanced skin science, pigment blending, and specialized styles, such as black and grey, watercolor, and neo-traditional tattoos. Learners receive thorough instruction on body dynamics, detailed stencil creation, and designing tattoos that flow naturally with anatomy. Real-skin practice, supervised application, and model-based exams cement technical proficiency.
            </p>
            
            <p className="text-lg mb-8">
              A distinct feature is the focus on business skills, marketing, and studio management. Students create a professional portfolio, learn photography/videography to promote their work, and receive guidance in branding, online presence, and client communication. The academy provides extended support for those planning to launch studios or work independently, including supply sourcing and strategic growth advice.
            </p>
            
            <p className="text-lg mb-12">
              Graduates of the Pro Courses emerge not just with flawless technique but with the confidence, insight, and entrepreneurial skills to thrive. Each artist is empowered to build a career defined by innovation, excellence, and lasting impact in the tattoo community.
            </p>
          </div>

          {/* Advanced Techniques */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-minimal-light-gray p-8 rounded-lg shadow-lg border border-minimal-border">
              <h3 className="text-2xl font-bold text-minimal-black mb-4">
                Advanced Techniques
              </h3>
              <ul className="text-minimal-gray space-y-3">
                <li>• Realism and portraiture mastery</li>
                <li>• Illustrative works and intricate shading</li>
                <li>• Black and grey specialization</li>
                <li>• Watercolor tattoo techniques</li>
                <li>• Neo-traditional style development</li>
                <li>• Advanced pigment blending</li>
                <li>• Body dynamics and anatomy flow</li>
                <li>• Complex stencil creation</li>
              </ul>
            </div>

            <div className="bg-minimal-light-gray p-8 rounded-lg shadow-lg border border-minimal-border">
              <h3 className="text-2xl font-bold text-minimal-black mb-4">
                Business & Professional Skills
              </h3>
              <ul className="text-minimal-gray space-y-3">
                <li>• Professional portfolio development</li>
                <li>• Photography and videography</li>
                <li>• Personal branding strategies</li>
                <li>• Online presence and marketing</li>
                <li>• Client communication excellence</li>
                <li>• Studio management and operations</li>
                <li>• Supply sourcing and partnerships</li>
                <li>• Strategic business growth</li>
              </ul>
            </div>
          </div>

          {/* Specialization Areas */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-minimal-black mb-8 text-center">
              Specialization Areas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-accent-gold/10 p-6 rounded-lg text-center">
                <h4 className="font-bold text-minimal-black mb-3">Realism Master</h4>
                <p className="text-sm text-minimal-gray">Photorealistic portraits and detailed artwork</p>
              </div>
              <div className="bg-accent-gold/10 p-6 rounded-lg text-center">
                <h4 className="font-bold text-minimal-black mb-3">Style Innovator</h4>
                <p className="text-sm text-minimal-gray">Watercolor, neo-traditional, and custom styles</p>
              </div>
              <div className="bg-accent-gold/10 p-6 rounded-lg text-center">
                <h4 className="font-bold text-minimal-black mb-3">Studio Owner</h4>
                <p className="text-sm text-minimal-gray">Business management and entrepreneurship</p>
              </div>
            </div>
          </div>

          {/* Career Path */}
          <div className="mt-16 bg-minimal-light-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-minimal-black mb-6 text-center">
              Your Career Path
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-minimal-black mb-2">Master Skills</h4>
                <p className="text-sm text-minimal-gray">Advanced techniques and artistry</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-minimal-black mb-2">Build Portfolio</h4>
                <p className="text-sm text-minimal-gray">Professional showcase creation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-minimal-black mb-2">Launch Career</h4>
                <p className="text-sm text-minimal-gray">Studio work or independent practice</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-minimal-black mb-2">Industry Leader</h4>
                <p className="text-sm text-minimal-gray">Innovation and excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-gold py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
            Become an Industry Leader
          </h2>
          <p className="text-xl text-minimal-black mb-8">
            Master advanced techniques and build a thriving career with our Pro Tattoo Course.
          </p>
          <Link 
            to="/book-now"
            className="inline-block bg-minimal-black text-minimal-white px-8 py-4 font-medium hover:bg-minimal-dark-gray transition-colors duration-200"
          >
            ENROLL NOW
          </Link>
        </div>
      </section>
    </div>
  );
}