'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'API Documentation', href: '/api-documentation' },
    { name: 'Province Crop Forecasting', href: '/province-crop-forecasting' },
    { name: 'Countries HW-Forecasting', href: '/hw-countries-forecasting' },
  ];

  return (
    <nav className="bg-green-600 p-4">
      <ul className="flex justify-center space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === item.href
                  ? 'bg-green-700 text-white'
                  : 'text-green-100 hover:bg-green-500 hover:text-white transition-colors duration-200'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}