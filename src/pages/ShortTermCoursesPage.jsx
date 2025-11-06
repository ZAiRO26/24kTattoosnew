import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

export default function ShortTermCoursesPage() {
  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section - Text over banner image (aligned like Academy) */}
      <section className="pt-16 pb-10 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden border border-minimal-border bg-white shadow-md">
            <div className="relative w-full aspect-video">
              <OptimizedImage
                src="/assets/Shortterm.jpg"
                alt="Short Term Tattoo Courses banner"
                className="w-full h-full"
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md mb-3">
                  Short Term Courses
                </h1>
                <p className="text-base md:text-xl text-white/90 max-w-2xl">
                  High-impact training in a condensed timeframe
                </p>
              </div>
            </div>
          </div>
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

      {/* CTA Section (color theme replicated from Basic Courses) */}
      <section className="bg-accent-gold py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
            Ready to Start Your Tattoo Journey?
          </h2>
          <p className="text-xl text-minimal-black mb-8">
            Join our Short Term Course and discover the world of tattoo artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="inline-block bg-minimal-black text-minimal-white px-8 py-4 font-medium hover:bg-minimal-dark-gray transition-colors duration-200"
            >
              ENROLL NOW
            </Link>
            <Link 
              to="/tattoo-academy"
              className="inline-block border-2 border-minimal-black text-minimal-black px-8 py-4 font-medium hover:bg-minimal-black hover:text-minimal-white transition-colors duration-200"
            >
              VIEW ALL COURSES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}