// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Self Improvement App</title>
      </Head>
      <div className="container mx-auto px-4 py-8 bg-orange-500">
        <h1 className="text-3xl font-bold mb-4 bg-blue-500">Welcome to the Self Improvement App</h1>
        <p className="text-lg bg-pink-500">This is the landing page of your application. Add content here to introduce your app.</p>
      </div>
    </Layout>
  );
}
