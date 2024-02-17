// pages/index.jsx
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home - Self Improvement App</title>
      </Head>
      <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/Beautiful brain.png')" }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Catalyst</h1>
          <p className="text-lg text-white">Ignite Your Journey</p>
          <button className="bg-gray-500 text-white px-4 py-2 mt-4 rounded">Get Started</button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
