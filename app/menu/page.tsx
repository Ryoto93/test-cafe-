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
        image: 'https://readdy.ai/api/search-image?query=Professional%20espresso%20shot%20in%20white%20ceramic%20cup%20with%20perfect%20crema%2C%20minimalist%20presentation%20on%20wooden%20table%2C%20warm%20lighting%2C%20coffee%20beans%20scattered%20around%2C%20high%20quality%20food%20photography&width=300&height=200&seq=espresso&orientation=landscape'
      },
      {
        name: 'カフェラテ',
        price: '580円',
        description: 'なめらかなスチームミルクとエスプレッソの絶妙なバランス',
        image: 'https://readdy.ai/api/search-image?query=Beautiful%20cafe%20latte%20with%20latte%20art%20in%20white%20ceramic%20cup%2C%20creamy%20milk%20foam%2C%20warm%20lighting%2C%20wooden%20table%20surface%2C%20professional%20food%20photography%20style&width=300&height=200&seq=latte&orientation=landscape'
      },
      {
        name: 'カプチーノ',
        price: '550円',
        description: 'ふわふわのミルクフォームが特徴の伝統的なカプチーノ',
        image: 'https://readdy.ai/api/search-image?query=Classic%20cappuccino%20with%20thick%20milk%20foam%20and%20cocoa%20powder%20dusting%2C%20ceramic%20white%20cup%2C%20elegant%20presentation%20on%20wooden%20surface%2C%20professional%20food%20photography&width=300&height=200&seq=cappuccino&orientation=landscape'
      },
      {
        name: 'ドリップコーヒー',
        price: '480円',
        description: '毎日変わるシングルオリジンのドリップコーヒー',
        image: 'https://readdy.ai/api/search-image?query=Pour%20over%20drip%20coffee%20in%20clear%20glass%20cup%2C%20coffee%20dripper%20visible%2C%20wooden%20table%20setting%2C%20coffee%20beans%20scattered%2C%20warm%20natural%20lighting%2C%20professional%20food%20photography&width=300&height=200&seq=drip&orientation=landscape'
      },
      {
        name: 'アイスコーヒー',
        price: '520円',
        description: '夏にぴったりの冷たくて濃厚なアイスコーヒー',
        image: 'https://readdy.ai/api/search-image?query=Iced%20coffee%20in%20tall%20glass%20with%20ice%20cubes%2C%20dark%20rich%20coffee%2C%20condensation%20on%20glass%2C%20wooden%20table%2C%20refreshing%20summer%20drink%2C%20professional%20food%20photography&width=300&height=200&seq=iced-coffee&orientation=landscape'
      },
      {
        name: 'モカ',
        price: '620円',
        description: 'チョコレートの甘さとコーヒーの苦味が絶妙',
        image: 'https://readdy.ai/api/search-image?query=Mocha%20coffee%20with%20chocolate%20syrup%20and%20whipped%20cream%2C%20ceramic%20mug%2C%20chocolate%20shavings%20on%20top%2C%20warm%20cozy%20lighting%2C%20professional%20food%20photography&width=300&height=200&seq=mocha&orientation=landscape'
      }
    ],
    food: [
      {
        name: 'クロワッサンサンド',
        price: '880円',
        description: 'バターの香りが豊かなクロワッサンにハムとチーズをサンド',
        image: 'https://readdy.ai/api/search-image?query=Buttery%20croissant%20sandwich%20with%20ham%20and%20cheese%2C%20golden%20brown%20pastry%2C%20fresh%20lettuce%2C%20served%20on%20white%20plate%20with%20side%20salad%2C%20natural%20lighting%2C%20professional%20food%20photography&width=300&height=200&seq=croissant&orientation=landscape'
      },
      {
        name: 'アボカドトースト',
        price: '780円',
        description: '新鮮なアボカドとトマトを使ったヘルシーなトースト',
        image: 'https://readdy.ai/api/search-image?query=Avocado%20toast%20with%20sliced%20tomatoes%20on%20artisan%20bread%2C%20fresh%20herbs%2C%20olive%20oil%20drizzle%2C%20served%20on%20wooden%20board%2C%20healthy%20breakfast%2C%20professional%20food%20photography&width=300&height=200&seq=avocado-toast&orientation=landscape'
      },
      {
        name: 'パスタセット',
        price: '1,200円',
        description: '日替わりパスタにサラダとドリンクがセット',
        image: 'https://readdy.ai/api/search-image?query=Delicious%20pasta%20dish%20with%20fresh%20basil%2C%20cherry%20tomatoes%2C%20parmesan%20cheese%2C%20served%20in%20white%20bowl%20with%20side%20salad%2C%20restaurant%20quality%20presentation%2C%20professional%20food%20photography&width=300&height=200&seq=pasta&orientation=landscape'
      },
      {
        name: 'キッシュ',
        price: '680円',
        description: 'ほうれん草とベーコンの手作りキッシュ',
        image: 'https://readdy.ai/api/search-image?query=Homemade%20quiche%20with%20spinach%20and%20bacon%2C%20golden%20pastry%20crust%2C%20creamy%20egg%20filling%2C%20served%20on%20ceramic%20plate%20with%20garnish%2C%20professional%20food%20photography&width=300&height=200&seq=quiche&orientation=landscape'
      },
      {
        name: 'サラダボウル',
        price: '980円',
        description: '季節の野菜をたっぷり使ったヘルシーサラダ',
        image: 'https://readdy.ai/api/search-image?query=Fresh%20colorful%20salad%20bowl%20with%20mixed%20greens%2C%20cherry%20tomatoes%2C%20cucumber%2C%20avocado%2C%20nuts%2C%20served%20in%20wooden%20bowl%2C%20healthy%20meal%2C%20professional%20food%20photography&width=300&height=200&seq=salad&orientation=landscape'
      },
      {
        name: 'パニーニ',
        price: '850円',
        description: 'モッツァレラチーズとバジルのイタリアンパニーニ',
        image: 'https://readdy.ai/api/search-image?query=Grilled%20panini%20sandwich%20with%20mozzarella%20and%20basil%2C%20golden%20brown%20bread%2C%20melted%20cheese%2C%20served%20on%20wooden%20board%20with%20pickles%2C%20Italian%20style%2C%20professional%20food%20photography&width=300&height=200&seq=panini&orientation=landscape'
      }
    ],
    dessert: [
      {
        name: 'ティラミス',
        price: '680円',
        description: 'マスカルポーネとコーヒーの絶妙なハーモニー',
        image: 'https://readdy.ai/api/search-image?query=Classic%20tiramisu%20dessert%20with%20mascarpone%20cream%2C%20coffee%20soaked%20ladyfingers%2C%20cocoa%20powder%20dusting%2C%20served%20in%20glass%20cup%2C%20elegant%20presentation%2C%20professional%20food%20photography&width=300&height=200&seq=tiramisu&orientation=landscape'
      },
      {
        name: 'ニューヨークチーズケーキ',
        price: '720円',
        description: '濃厚でクリーミーなチーズケーキ',
        image: 'https://readdy.ai/api/search-image?query=Rich%20New%20York%20cheesecake%20slice%20with%20graham%20cracker%20crust%2C%20berry%20compote%2C%20served%20on%20white%20plate%20with%20mint%20garnish%2C%20professional%20dessert%20photography&width=300&height=200&seq=cheesecake&orientation=landscape'
      },
      {
        name: 'アップルパイ',
        price: '650円',
        description: '温かいアップルパイにバニラアイスクリーム',
        image: 'https://readdy.ai/api/search-image?query=Warm%20apple%20pie%20slice%20with%20flaky%20pastry%20crust%2C%20cinnamon%20apple%20filling%2C%20vanilla%20ice%20cream%20scoop%2C%20served%20on%20ceramic%20plate%2C%20comfort%20dessert%2C%20professional%20food%20photography&width=300&height=200&seq=apple-pie&orientation=landscape'
      },
      {
        name: 'チョコレートブラウニー',
        price: '580円',
        description: '濃厚なチョコレートブラウニー',
        image: 'https://readdy.ai/api/search-image?query=Rich%20chocolate%20brownie%20with%20fudgy%20texture%2C%20powdered%20sugar%20dusting%2C%20served%20with%20vanilla%20ice%20cream%2C%20chocolate%20drizzle%2C%20professional%20dessert%20photography&width=300&height=200&seq=brownie&orientation=landscape'
      },
      {
        name: '季節のフルーツタルト',
        price: '780円',
        description: '旬のフルーツを使った手作りタルト',
        image: 'https://readdy.ai/api/search-image?query=Beautiful%20seasonal%20fruit%20tart%20with%20fresh%20berries%2C%20kiwi%2C%20mango%2C%20custard%20cream%2C%20pastry%20crust%2C%20colorful%20presentation%2C%20professional%20dessert%20photography&width=300&height=200&seq=fruit-tart&orientation=landscape'
      },
      {
        name: 'パンケーキ',
        price: '880円',
        description: 'ふわふわのパンケーキにメープルシロップ',
        image: 'https://readdy.ai/api/search-image?query=Fluffy%20pancake%20stack%20with%20butter%20pat%2C%20maple%20syrup%20drizzle%2C%20fresh%20berries%2C%20served%20on%20white%20plate%2C%20breakfast%20favorite%2C%20professional%20food%20photography&width=300&height=200&seq=pancake&orientation=landscape'
      }
    ],
    tea: [
      {
        name: 'アールグレイ',
        price: '480円',
        description: 'ベルガモットの香りが上品な紅茶',
        image: 'https://readdy.ai/api/search-image?query=Earl%20Grey%20tea%20in%20elegant%20porcelain%20teacup%20with%20saucer%2C%20steam%20rising%2C%20bergamot%20leaves%2C%20sophisticated%20tea%20service%2C%20warm%20lighting%2C%20professional%20beverage%20photography&width=300&height=200&seq=earl-grey&orientation=landscape'
      },
      {
        name: 'ダージリン',
        price: '500円',
        description: 'マスカテルフレーバーが特徴の高級紅茶',
        image: 'https://readdy.ai/api/search-image?query=Darjeeling%20tea%20in%20fine%20china%20teacup%2C%20amber%20colored%20tea%2C%20tea%20leaves%20scattered%2C%20elegant%20presentation%2C%20natural%20lighting%2C%20professional%20beverage%20photography&width=300&height=200&seq=darjeeling&orientation=landscape'
      },
      {
        name: 'ジャスミン茶',
        price: '450円',
        description: '花の香りが心地よい中国茶',
        image: 'https://readdy.ai/api/search-image?query=Jasmine%20tea%20in%20clear%20glass%20teapot%2C%20jasmine%20flowers%20floating%2C%20light%20green%20tea%20color%2C%20Asian%20tea%20ceremony%20style%2C%20peaceful%20atmosphere%2C%20professional%20beverage%20photography&width=300&height=200&seq=jasmine&orientation=landscape'
      },
      {
        name: 'ルイボスティー',
        price: '420円',
        description: 'カフェインフリーで体に優しいハーブティー',
        image: 'https://readdy.ai/api/search-image?query=Rooibos%20tea%20in%20clear%20glass%20mug%2C%20reddish%20amber%20color%2C%20loose%20tea%20leaves%2C%20healthy%20herbal%20drink%2C%20natural%20lighting%2C%20professional%20beverage%20photography&width=300&height=200&seq=rooibos&orientation=landscape'
      },
      {
        name: 'カモミールティー',
        price: '450円',
        description: 'リラックス効果のあるハーブティー',
        image: 'https://readdy.ai/api/search-image?query=Chamomile%20tea%20in%20ceramic%20teacup%2C%20dried%20chamomile%20flowers%2C%20calming%20herbal%20drink%2C%20peaceful%20setting%2C%20soft%20lighting%2C%20professional%20beverage%20photography&width=300&height=200&seq=chamomile&orientation=landscape'
      },
      {
        name: 'ミントティー',
        price: '420円',
        description: '爽やかなミントの香りが楽しめるハーブティー',
        image: 'https://readdy.ai/api/search-image?query=Fresh%20mint%20tea%20in%20glass%20teapot%2C%20fresh%20mint%20leaves%2C%20refreshing%20green%20herbal%20drink%2C%20moroccan%20style%2C%20natural%20lighting%2C%20professional%20beverage%20photography&width=300&height=200&seq=mint&orientation=landscape'
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
