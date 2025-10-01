import React from 'react';
import { Link } from 'react-router-dom';

export default function ShortTermCoursesPage() {
  return (
    <div className="min-h-screen bg-minimal-white">
      {/* Hero Section */}
      <section className="relative bg-minimal-black text-minimal-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            Short Term Courses
          </h1>
          <p className="text-xl md:text-2xl text-minimal-gray font-light">
            High-impact training in a condensed timeframe
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-minimal-black leading-relaxed">
            <p className="text-xl mb-8 text-minimal-black">
              Our Short Term Courses are designed for individuals who wish to gain core tattooing skills in a condensed time frame without compromising on quality. These intensive modules provide high-impact no-nonsense training for hobbyists, art students, or professionals from other fields seeking a glimpse into the world of tattoo craft.
            </p>
            
            <p className="text-lg mb-8 text-minimal-black">
              Over several specialized sessions, participants are introduced to essential tattooing techniques, safety standards, and studio etiquette. Major topics include line work, stencil preparation, basic shading, and understanding machine configurations. Sessions are highly interactive—students use professional equipment and participate in guided exercises, ensuring hands-on learning.
            </p>
            
            <p className="text-lg mb-8 text-minimal-black">
              The curriculum balances theoretical knowledge, such as tattoo history and skin anatomy, with practical lessons covering the assembly of tools, pigment application, and aftercare guidance. Emphasis is placed on building confidence and skill with artificial skin, enabling learners to practice repeatedly in a low-pressure setting.
            </p>
            
            <p className="text-lg mb-12 text-minimal-black">
              By the end of this course, students achieve a solid understanding of the craft, studio processes, and industry best practices, making this program a perfect stepping stone toward more in-depth learning. Flexible scheduling and expert mentorship make this ideal for those with busy lives who want meaningful creative exposure.
            </p>
          </div>

          {/* Course Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-minimal-light-gray p-8 rounded-lg shadow-lg border border-minimal-border">
              <h3 className="text-2xl font-bold text-minimal-black mb-4">
                What You'll Learn
              </h3>
              <ul className="text-minimal-gray space-y-3">
                <li>• Essential tattooing techniques</li>
                <li>• Safety standards and studio etiquette</li>
                <li>• Line work and stencil preparation</li>
                <li>• Basic shading techniques</li>
                <li>• Machine configurations</li>
                <li>• Tattoo history and skin anatomy</li>
                <li>• Tool assembly and pigment application</li>
                <li>• Aftercare guidance</li>
              </ul>
            </div>

            <div className="bg-minimal-light-gray p-8 rounded-lg shadow-lg border border-minimal-border">
              <h3 className="text-2xl font-bold text-minimal-black mb-4">
                Course Benefits
              </h3>
              <ul className="text-minimal-gray space-y-3">
                <li>• Hands-on learning with professional equipment</li>
                <li>• Interactive guided exercises</li>
                <li>• Practice on artificial skin</li>
                <li>• Low-pressure learning environment</li>
                <li>• Flexible scheduling options</li>
                <li>• Expert mentorship</li>
                <li>• Industry best practices</li>
                <li>• Perfect stepping stone to advanced courses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-minimal-dark-gray py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-white mb-6">
            Ready to Start Your Tattoo Journey?
          </h2>
          <p className="text-xl text-minimal-white mb-8">
            Join our Short Term Course and discover the world of tattoo artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="inline-block bg-minimal-black text-minimal-white px-8 py-4 font-medium hover:bg-minimal-gray transition-colors duration-200"
            >
              ENROLL NOW
            </Link>
            <Link 
              to="/tattoo-academy"
              className="inline-block border-2 border-minimal-white text-minimal-white px-8 py-4 font-medium hover:bg-minimal-white hover:text-minimal-black transition-colors duration-200"
            >
              VIEW ALL COURSES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}