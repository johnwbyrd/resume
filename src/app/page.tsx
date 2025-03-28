import '@/styles/home.scss';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="home-page">
        <section className="summary-section">
          <h2>Summary</h2>
          <p>Welcome to my resume website. This site is currently under development.</p>
        </section>
      </div>
    </Layout>
  );
}
