import Head from 'next/head';
import Layout from '../components/Layout';

const Signup = () => {
  return (
    <Layout>
      <Head>
        <title>Sign Up - Catalyst</title>
      </Head>
      <div className="relative min-h-screen flex items-center justify-center">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/images/signup_page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            {/* Add your sign-up form here */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
