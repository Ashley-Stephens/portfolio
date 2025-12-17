import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Resume.scss";

function Resume() {
   const resumeUrl = process.env.PUBLIC_URL + "/AshleyStephens_Resume.pdf";

   return (
      <>
         <Header />

         <main className="resume-page">
            <div className="resume-actions">
               <a className="resume-download" href={resumeUrl} download>
                  Download PDF
               </a>

               <a className="resume-open" href={resumeUrl} target="_blank" rel="noreferrer">
                  Open in new tab
               </a>
            </div>

            <div className="resume-viewer">
               <iframe title="Resume PDF" src={resumeUrl} />
            </div>
         </main>

         <Footer />
      </>
   );
}

export default Resume;
