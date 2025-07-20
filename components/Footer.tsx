'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-pacifico text-amber-100 mb-4">Café Serenity</h3>
            <p className="text-amber-200">
              心地よい空間で、最高のコーヒーと美味しいお食事をお楽しみください。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">営業時間</h4>
            <div className="text-amber-200 space-y-2">
              <p>月〜金: 7:00 - 22:00</p>
              <p>土〜日: 8:00 - 23:00</p>
              <p>祝日: 8:00 - 22:00</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お店の情報</h4>
            <div className="text-amber-200 space-y-2">
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                東京都渋谷区123-456
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                03-1234-5678
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                info@cafe-serenity.com
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <i className="ri-facebook-line"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
          <p>&copy; 2025 Café Serenity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}