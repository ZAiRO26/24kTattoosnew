import React from 'react';
import { Link } from 'react-router-dom';

export default function BasicTattooCoursesPage() {
  return (
    <div className="min-h-screen bg-minimal-white">
      {/* Hero Section */}
      <section className="relative bg-minimal-black text-minimal-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            Basic Tattoo Courses
          </h1>
          <p className="text-xl md:text-2xl text-minimal-gray font-light">
            Gateway to professional artistry
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-minimal-black leading-relaxed">
            <p className="text-xl mb-8">
              The Basic Tattoo Course is the academy's gateway to professional artistry—a meticulously structured program for beginners determined to excel. It covers every element needed to progress from amateur to confident tattoo artist, offering a blend of the latest trends, technical grounding, and creative inspiration.
            </p>
            
            <p className="text-lg mb-8">
              Students explore drawing, sketching, and custom design creation, working on paper before transitioning to hands-on tattoo work. Training includes in-depth study of modern wireless tattoo machines, needle types, and pigment science, with lessons on both manual and digital stencil creation. Topics such as skin types, tattoo placement, and the healing process prepare learners for real-world challenges.
            </p>
            
            <p className="text-lg mb-8">
              This course emphasizes safety and hygiene above all else, ensuring students master responsible practices—sanitization, cross-contamination prevention, and studio setup. Practical sessions focus on machine handling, outlining, shading, and coloring, first on artificial skin, then moving under supervision to live tattooing.
            </p>
            
            <p className="text-lg mb-12">
              Throughout, students receive ongoing feedback, portfolio guidance, and creative coaching. Graduates leave with strong foundational skills, a collection of completed works, and readiness for advanced training. The academy's structured curriculum and supportive mentoring guarantee a transformative experience for all newcomers.
            </p>
          </div>

          {/* Course Curriculum */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-minimal-light-gray p-8 rounded-lg shadow-lg border border-minimal-border">
              <h3 className="text-2xl font-bold text-minimal-black mb-4">
                Technical Skills
              </h3>
              <ul className="text-minimal-gray space-y-3">
                <li>• Drawing and sketching fundamentals</li>
                <li>• Custom design creation</li>
                <li>• Modern wireless tattoo machines</li>
                <li>• Needle types and pigment science</li>
                <li>• Manual and digital stencil creation</li>
                <li>• Machine handling techniques</li>
                <li>• Outlining, shading, and coloring</li>
                <li>• Skin types and tattoo placement</li>
              </ul>
            </div>

            <div className="bg-minimal-light-gray p-8 rounded-lg shadow-lg border border-minimal-border">
              <h3 className="text-2xl font-bold text-minimal-black mb-4">
                Safety & Professional Practice
              </h3>
              <ul className="text-minimal-gray space-y-3">
                <li>• Sanitization and hygiene protocols</li>
                <li>• Cross-contamination prevention</li>
                <li>• Professional studio setup</li>
                <li>• Healing process understanding</li>
                <li>• Portfolio development</li>
                <li>• Creative coaching and feedback</li>
                <li>• Live tattooing under supervision</li>
                <li>• Industry best practices</li>
              </ul>
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mt-16 bg-accent-gold/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-minimal-black mb-6 text-center">
              Your Learning Journey
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-minimal-black mb-2">Foundation</h4>
                <p className="text-sm text-minimal-gray">Drawing and design basics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-minimal-black mb-2">Equipment</h4>
                <p className="text-sm text-minimal-gray">Machine and needle mastery</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-minimal-black mb-2">Practice</h4>
                <p className="text-sm text-minimal-gray">Artificial skin training</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-minimal-black font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-minimal-black mb-2">Live Work</h4>
                <p className="text-sm text-minimal-gray">Supervised real tattooing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-gold py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
            Start Your Tattoo Journey
          </h2>
          <p className="text-xl text-minimal-black mb-8">
            Join our Basic Tattoo Course and transform your passion into professional expertise.
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