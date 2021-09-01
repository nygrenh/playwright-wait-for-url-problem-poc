import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1>Page 1</h1>
      <Link href="page-2"><a>Page 2</a></Link>
    </div>
  )
}
