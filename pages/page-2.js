import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <Link href="/"><a>Page 1</a></Link>
    </div>
  )
}
