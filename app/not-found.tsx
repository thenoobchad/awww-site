import Link from 'next/link'

export const metadata = {
    title: "Page Not Found"
  };

export default function NotFound() {
  return (
    <div className='px-2 w-full'>
        <p className='text-2xl'>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}
