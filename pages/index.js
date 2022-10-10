// import type { NextPage } from 'next'
import Head from 'next/head';
// import Image from 'next/image'
// import { title } from 'process';
import { PostCard, Categories, PostWidget } from '../components';

const posts = [
  { title: 'She-Hulk: Emasculation at Large', excerpt: 'Everything Wrong With Episode 7' },
  { title: 'She-Hulk: Emasculation at Large2', excerpt: 'Everything Wrong With Episode 7' },
  { title: 'She-Hulk: Emasculation at Large3', excerpt: 'Everything Wrong With Episode 7' }
];


export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>What Matters Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>


    </div>
  )
}
