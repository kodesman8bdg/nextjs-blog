import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Tentang() {
    return (
        <Layout>
            <Head>
                <title>Tentang | Konservasi Delapan</title>
            </Head>
            <h1>Tentang Kami</h1>
            
        </Layout>
    )
  }

  const LogoKode = () => (
      <Image 
        scr="/images/logokode.jpg"
        height={144}
        width={144}
        alt="logo kode"
      />
  )