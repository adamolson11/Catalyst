// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Self Improvement App</title>
      </Head>
      <div className="container mx-auto px-4 py-8 bg-blue-500 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Self Improvement App</h1>
        <p className="text-lg">This is the landing page of your application. Add content here to introduce your app.</p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">
          Get Started
        </button>
      </div>
    </Layout>
  );
}
