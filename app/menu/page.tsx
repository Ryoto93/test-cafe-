'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function MenuPage() {
  // menuItemsのキーだけを型として定義する
  type MenuCategory = keyof typeof menuItems;

  // useStateに<MenuCategory>を指定して、'activeCategory'がその型であることを明記する
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');

  const categories = [
    { id: 'coffee', name: 'コーヒー', icon: 'ri-cup-line' },
    { id: 'food', name: 'フード', icon: 'ri-restaurant-line' },
    { id: 'dessert', name: 'デザート', icon: 'ri-cake-line' },
    { id: 'tea', name: 'ティー', icon: 'ri-leaf-line' }
  ];

  const menuItems = {
    coffee: [
      {
        name: 'エスプレッソ',
        price: '450円',
        description: '濃厚で香り高い本格的なエスプレッソ',
        image: '/images/espresso.jpg'
      },
      {
        name: 'カフェラテ',
        price: '580円',
        description: 'なめらかなスチームミルクとエスプレッソの絶妙なバランス',
        image: '/images/latte.jpg'
      },
      {
        name: 'カプチーノ',
        price: '550円',
        description: 'ふわふわのミルクフォームが特徴の伝統的なカプチーノ',
        image: '/images/cappuccino.jpg'
      },
      {
        name: 'ドリップコーヒー',
        price: '480円',
        description: '毎日変わるシングルオリジンのドリップコーヒー',
        image: '/images/drip.jpg'
      },
      {
        name: 'アイスコーヒー',
        price: '520円',
        description: '夏にぴったりの冷たくて濃厚なアイスコーヒー',
        image: '/images/iced-coffee.jpg'
      },
      {
        name: 'モカ',
        price: '620円',
        description: 'チョコレートの甘さとコーヒーの苦味が絶妙',
        image: '/images/mocha.jpg'
      }
    ],
    food: [
      {
        name: 'クロワッサンサンド',
        price: '880円',
        description: 'バターの香りが豊かなクロワッサンにハムとチーズをサンド',
        image: '/images/croissant.jpg'
      },
      {
        name: 'アボカドトースト',
        price: '780円',
        description: '新鮮なアボカドとトマトを使ったヘルシーなトースト',
        image: '/images/avocado-toast.jpg'
      },
      {
        name: 'パスタセット',
        price: '1,200円',
        description: '日替わりパスタにサラダとドリンクがセット',
        image: '/images/pasta.jpg'
      },
      {
        name: 'キッシュ',
        price: '680円',
        description: 'ほうれん草とベーコンの手作りキッシュ',
        image: '/images/quiche.jpg'
      },
      {
        name: 'サラダボウル',
        price: '980円',
        description: '季節の野菜をたっぷり使ったヘルシーサラダ',
        image: '/images/salad.jpg'
      },
      {
        name: 'パニーニ',
        price: '850円',
        description: 'モッツァレラチーズとバジルのイタリアンパニーニ',
        image: '/images/panini.jpg'
      }
    ],
    dessert: [
      {
        name: 'ティラミス',
        price: '680円',
        description: 'マスカルポーネとコーヒーの絶妙なハーモニー',
        image: '/images/tiramisu.jpg'
      },
      {
        name: 'ニューヨークチーズケーキ',
        price: '720円',
        description: '濃厚でクリーミーなチーズケーキ',
        image: '/images/cheesecake.jpg'
      },
      {
        name: 'アップルパイ',
        price: '650円',
        description: '温かいアップルパイにバニラアイスクリーム',
        image: '/images/apple-pie.jpg'
      },
      {
        name: 'チョコレートブラウニー',
        price: '580円',
        description: '濃厚なチョコレートブラウニー',
        image: '/images/brownie.jpg'
      },
      {
        name: '季節のフルーツタルト',
        price: '780円',
        description: '旬のフルーツを使った手作りタルト',
        image: '/images/fruit-tart.jpg'
      },
      {
        name: 'パンケーキ',
        price: '880円',
        description: 'ふわふわのパンケーキにメープルシロップ',
        image: '/images/pancake.jpg'
      }
    ],
    tea: [
      {
        name: 'アールグレイ',
        price: '480円',
        description: 'ベルガモットの香りが上品な紅茶',
        image: '/images/earl-grey.jpg'
      },
      {
        name: 'ダージリン',
        price: '500円',
        description: 'マスカテルフレーバーが特徴の高級紅茶',
        image: '/images/darjeeling.jpg'
      },
      {
        name: 'ジャスミン茶',
        price: '450円',
        description: '花の香りが心地よい中国茶',
        image: '/images/jasmine.jpg'
      },
      {
        name: 'ルイボスティー',
        price: '420円',
        description: 'カフェインフリーで体に優しいハーブティー',
        image: '/images/rooibos.jpg'
      },
      {
        name: 'カモミールティー',
        price: '450円',
        description: 'リラックス効果のあるハーブティー',
        image: '/images/chamomile.jpg'
      },
      {
        name: 'ミントティー',
        price: '420円',
        description: '爽やかなミントの香りが楽しめるハーブティー',
        image: '/images/mint.jpg'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              メニュー
            </h1>
            <p className="text-xl text-amber-800">
              厳選された素材で作る、こだわりのメニューをご紹介します
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as MenuCategory)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-amber-800 hover:bg-amber-100'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                    <span className="text-xl font-bold text-amber-800">{item.price}</span>
                  </div>
                  <p className="text-amber-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
