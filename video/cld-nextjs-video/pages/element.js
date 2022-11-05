import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CloudinaryVideoElement from '../components/video-element';
import Navigation from '../components/navigation';

import dynamic from 'next/dynamic';
const DynamicVideoPlayer = dynamic(() => import('../components/video-player'), {
  ssr: false,
});

export default function Home() {
  const cloudName = 'cloudinary-training';
  const publicId = 'skiing-test';
  return (
    <div className={styles.container}>
      <Navigation />
      <Head>
        <title>Video Download vs Streaming </title>
        <meta
          name='description'
          content='Compare ABR in Video Player with Video Element'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Video Download vs Streaming</h1>

        <div className='container'>
          <div>
            <h3>Video Element</h3>
            <CloudinaryVideoElement cloudName={cloudName} publicId={publicId} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
