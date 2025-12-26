import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Main.scss";

const Main = () => {
   const heroImg = process.env.PUBLIC_URL + "/ashley.png"; // /public/ashley.png

   const featured = [
      {
         slug: "mixflow",
         title: "Mixflow — Music playback UX",
         desc:
            "Reduced “what do I play?” friction with better queue and shuffle controls.",
         thumb: "/mixflow.png" // optional: put in /public (or set "" to use placeholder)
      },
      {
         slug: "shelfsaver",
         title: "ShelfSaver — Food tracking concept",
         desc:
            "Helped users track food and reduce waste with reminders and recipe ideas.",
         thumb: "/leftoverchef.png"
      }
   ];

   return (
      <div className="home-page">
         <Header />

         <main className="home-wrap">
            {/* HERO */}
            <section className="hero">
               <div className="hero-left">
                  <h1 className="hero-title">Hey, I’m Ashley</h1>
                  <div className="hero-role">UX / UI Designer</div>

                  <p className="hero-desc">
                     Designing clear, human-centered interfaces backed by systems thinking.
                  </p>

                  <div className="hero-actions">
                     <Link className="btn primary" to="/projects">
                        View Projects
                     </Link>
                     <Link className="btn ghost" to="/resume">
                        Resume
                     </Link>
                  </div>
               </div>

               <div className="hero-right">
                  <div className="hero-portrait">
                     <img className="hero-img" src={heroImg} alt="Ashley" />
                  </div>
               </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section className="featured">
               <h2 className="section-title">Featured Projects</h2>

               <div className="card-grid">
                  {featured.map((p) => (
                     <div key={p.slug} className="work-card">
                        <div className="work-thumb">
                           {p.thumb ? (
                              <img
                                 src={process.env.PUBLIC_URL + p.thumb}
                                 alt={`${p.title} thumbnail`}
                              />
                           ) : (
                              <div className="thumb-placeholder" />
                           )}
                        </div>

                        <div className="work-body">
                           <div className="work-title">{p.title}</div>
                           <div className="work-desc">{p.desc}</div>

                           <Link className="work-link" to={`/projects/${p.slug}`}>
                              View case study →
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            {/* QUICK FACTS */}
            <section className="facts">
               <h2 className="section-title">Quick facts</h2>

               <div className="facts-row">
                  <div className="fact">• CS @ Santa Clara University</div>
                  <div className="fact">• UX focus: systems + usability</div>
                  <div className="fact">• Open to internships / roles</div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
};

export default Main;
