
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-pacifico text-amber-800">
            Café Serenity
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-amber-800 hover:text-amber-900 transition-colors duration-200">
              ホーム
            </Link>
            <Link href="/menu" className="text-amber-800 hover:text-amber-900 transition-colors duration-200">
              メニュー
            </Link>
            <Link href="/reservation" className="text-amber-800 hover:text-amber-900 transition-colors duration-200">
              予約
            </Link>
            <Link href="/contact" className="text-amber-800 hover:text-amber-900 transition-colors duration-200">
              お問い合わせ
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl text-amber-800"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-amber-800 hover:text-amber-900">
                ホーム
              </Link>
              <Link href="/menu" className="block px-3 py-2 text-amber-800 hover:text-amber-900">
                メニュー
              </Link>
              <Link href="/reservation" className="block px-3 py-2 text-amber-800 hover:text-amber-900">
                予約
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-amber-800 hover:text-amber-900">
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}