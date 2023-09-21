import Link from 'next/link';

export default function Navbar() {
 return (
  <nav className='flex justify-between bg-slate-400 mb-4 items-center px-10 font-bold text-black p-2'>
   <Link className='font-bold ' href='/'>
    Home
   </Link>

   <ul>
    <li>
     <Link href='/about'>About</Link>
    </li>
   </ul>
  </nav>
 );
}
