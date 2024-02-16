// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Self Improvement App</title>
      </Head>
      <div>
        <h1>Welcome to the Self Improvement App</h1>
        <p>This is the landing page of your application. Add content here to introduce your app.</p>
      </div>
    </Layout>
  );
}
