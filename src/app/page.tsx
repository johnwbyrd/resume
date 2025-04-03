import { Layout } from '@/components/Layout';
import { Resume } from '@/components/Resume';

export default function Home() {
  return (
    <Layout>
      <div className="resume-page">
        <Resume />
      </div>
    </Layout>
  );
}
