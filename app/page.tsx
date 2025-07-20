
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20modern%20coffee%20shop%20interior%20with%20warm%20wood%20tones%2C%20comfortable%20seating%20areas%2C%20soft%20natural%20lighting%20streaming%20through%20large%20windows%2C%20minimalist%20design%20with%20plants%20and%20books%2C%20cozy%20atmosphere%20perfect%20for%20relaxation%20and%20conversation%2C%20professional%20photography%20style&width=1920&height=1080&seq=hero-cafe&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              心地よい空間で<br />
              最高のひとときを
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              厳選されたコーヒーと手作りのお食事で、特別な時間をお過ごしください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/reservation" 
                className="bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                席を予約する
              </Link>
              <Link 
                href="/menu" 
                className="bg-white text-amber-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                メニューを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Café Serenityの特徴
            </h2>
            <p className="text-xl text-amber-800">
              私たちが大切にしていること
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-cup-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900">厳選コーヒー</h3>
              <p className="text-amber-700">
                世界各地から厳選した高品質なコーヒー豆を使用。バリスタが一杯一杯丁寧に淹れます。
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-restaurant-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900">手作り料理</h3>
              <p className="text-amber-700">
                新鮮な食材を使った手作りの料理とスイーツ。季節に合わせたメニューもご用意。
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-heart-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900">居心地の良い空間</h3>
              <p className="text-amber-700">
                リラックスできる温かみのある空間で、読書や会話、仕事など様々な用途でご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                私たちのストーリー
              </h2>
              <p className="text-lg text-amber-800 mb-6">
                Café Serenityは、コーヒーを通じて人々の心を豊かにしたいという想いから生まれました。
                2018年の開業以来、地域の皆様に愛され続けています。
              </p>
              <p className="text-lg text-amber-800 mb-8">
                私たちは単なるカフェではありません。お客様が日常の忙しさから離れ、
                静寂と安らぎを見つけられる特別な場所を提供したいと考えています。
              </p>
              <Link 
                href="/contact" 
                className="bg-amber-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-900 transition-colors whitespace-nowrap cursor-pointer inline-block"
              >
                お問い合わせ
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Cozy%20coffee%20shop%20interior%20with%20barista%20preparing%20coffee%2C%20warm%20lighting%2C%20wooden%20counters%2C%20coffee%20beans%20and%20equipment%20visible%2C%20professional%20and%20inviting%20atmosphere%2C%20natural%20light%20from%20windows%2C%20plants%20and%20comfortable%20seating&width=600&height=400&seq=story-cafe&orientation=landscape"
                alt="カフェの様子"
                className="rounded-lg shadow-lg object-cover w-full h-96 object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              お客様の声
            </h2>
            <p className="text-xl text-amber-800">
              実際にご利用いただいたお客様からの声
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20smiling%20Japanese%20woman%20in%20her%2030s%2C%20natural%20lighting%2C%20clean%20background%2C%20friendly%20and%20approachable%20expression%2C%20business%20casual%20attire&width=80&height=80&seq=customer1&orientation=squarish"
                  alt="田中様"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">田中 美咲様</h4>
                  <div className="flex text-amber-600">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <p className="text-amber-700">
                "コーヒーが本当に美味しくて、店内の雰囲気も最高です。仕事の合間によく利用させていただいています。"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20smiling%20Japanese%20man%20in%20his%2040s%2C%20natural%20lighting%2C%20clean%20background%2C%20friendly%20and%20approachable%20expression%2C%20business%20casual%20attire&width=80&height=80&seq=customer2&orientation=squarish"
                  alt="佐藤様"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">佐藤 健太様</h4>
                  <div className="flex text-amber-600">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <p className="text-amber-700">
                "家族でよく利用しています。子供にも優しいスタッフの皆さんで、いつも温かく迎えてくれます。"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20smiling%20Japanese%20woman%20in%20her%2020s%2C%20natural%20lighting%2C%20clean%20background%2C%20friendly%20and%20approachable%20expression%2C%20casual%20attire&width=80&height=80&seq=customer3&orientation=squarish"
                  alt="山田様"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">山田 あゆみ様</h4>
                  <div className="flex text-amber-600">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <p className="text-amber-700">
                "パスタもデザートも絶品！友達とのランチによく使わせてもらっています。予約も取りやすくて助かります。"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            特別な時間を過ごしませんか？
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            今すぐご予約して、最高のコーヒー体験をお楽しみください
          </p>
          <Link 
            href="/reservation" 
            className="bg-white text-amber-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            今すぐ予約する
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}