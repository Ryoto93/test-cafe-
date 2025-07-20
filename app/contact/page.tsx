'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-id': 'cafe-contact-form',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'subject': formData.subject,
          'message': formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              お問い合わせ
            </h1>
            <p className="text-xl text-amber-800">
              ご質問やご要望がございましたら、お気軽にお問い合わせください
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6 text-amber-900">お問い合わせフォーム</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">
                    お問い合わせありがとうございました。3営業日以内にご返信いたします。
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">
                    送信に失敗しました。もう一度お試しください。
                  </p>
                </div>
              )}

              <form id="cafe-contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
                    件名 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm pr-8"
                  >
                    <option value="">選択してください</option>
                    <option value="予約について">予約について</option>
                    <option value="メニューについて">メニューについて</option>
                    <option value="アレルギー対応">アレルギー対応</option>
                    <option value="パーティー・イベント">パーティー・イベント</option>
                    <option value="営業時間について">営業時間について</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    maxLength={500}
                    required
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                  <p className="text-xs text-amber-600 mt-1">
                    {formData.message.length}/500文字
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4 text-amber-900">店舗情報</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-store-line mr-3 text-amber-800"></i>
                    <div>
                      <p className="font-medium text-amber-900">Café Serenity</p>
                      <p className="text-amber-700">カフェ・セレニティ</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="ri-map-pin-line mr-3 text-amber-800"></i>
                    <div>
                      <p className="font-medium text-amber-900">住所</p>
                      <p className="text-amber-700">〒150-0001 東京都渋谷区123-456</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="ri-phone-line mr-3 text-amber-800"></i>
                    <div>
                      <p className="font-medium text-amber-900">電話番号</p>
                      <p className="text-amber-700">03-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="ri-mail-line mr-3 text-amber-800"></i>
                    <div>
                      <p className="font-medium text-amber-900">メールアドレス</p>
                      <p className="text-amber-700">info@cafe-serenity.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4 text-amber-900">営業時間</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-amber-900">月曜日〜金曜日</span>
                    <span className="text-amber-700">7:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-amber-900">土曜日・日曜日</span>
                    <span className="text-amber-700">8:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-amber-900">祝日</span>
                    <span className="text-amber-700">8:00 - 22:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4 text-amber-900">アクセス</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-train-line mr-3 text-amber-800"></i>
                    <p className="text-amber-700">JR山手線「渋谷駅」徒歩5分</p>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-subway-line mr-3 text-amber-800"></i>
                    <p className="text-amber-700">東京メトロ「表参道駅」徒歩8分</p>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-car-line mr-3 text-amber-800"></i>
                    <p className="text-amber-700">提携駐車場あり（2時間まで無料）</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1195872641707!2d139.69171531525515!3d35.68958128019472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca40b4f8bff%3A0x7cb7c6c8b3a8b5a7!2z44CSMTA4LTAwMTQg5p2x5Lqs6YO95riL6LC35Yy66YCg77yR5LiB55uu77yR!5e0!3m2!1sja!2sjp!4v1649325678901!5m2!1sja!2sjp"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="カフェセレニティの地図"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
