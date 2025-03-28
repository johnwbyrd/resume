import '@/styles/globals.scss';
import { loadResumeData } from '@/utils/loadResumeData';
import { Resume } from '@/components/Resume';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  // Load resume data server-side - this gets statically generated
  const resumeData = loadResumeData();
  const { basics } = resumeData || {};
  
  return (
    <div className="layout">
      <Header initialName={basics?.name} initialLabel={basics?.label} />
      <main className="main-content">
        <div className="container">
          <div className="resume-page">
            <Resume resumeData={resumeData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
