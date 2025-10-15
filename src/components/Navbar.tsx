import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const Navbar = async () => {
  const navbar = await createClient().getSingle("navbar");
  
  return (
    <div>
      <h1>{navbar.data.title}</h1>
      <Link href={"/"} aria-label='Home'>
        <img src={navbar.data.logo.url || ""} alt={navbar.data.title || ""} />
      </Link>
      <ul>
        {navbar.data.navigation.map((link, k) => (
          <li key={(link as any)?.key ?? k}>
            <PrismicNextLink field={link.link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
