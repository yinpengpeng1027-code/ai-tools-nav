'use client';

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const PRICING_PLANS = [
  {
    name: "🆓 免费版",
    price: "¥0",
    period: "/永久",
    features: [
      { text: "访问 60% 免费资源", available: true },
      { text: "基础搜索功能", available: true },
      { text: "收藏工具", available: true },
      { text: "VIP 专属内容", available: false },
      { text: "深度教程", available: false },
    ],
    button: "当前套餐",
    variant: "basic",
  },
  {
    name: "💎 VIP 会员",
    price: "¥168",
    period: "/年",
    badge: "最受欢迎",
    features: [
      { text: "访问 80% 付费资源", available: true },
      { text: "深度教程与方案", available: true },
      { text: "无广告体验", available: true },
      { text: "专属客服支持", available: true },
      { text: "优先工具更新通知", available: true },
    ],
    button: "立即开通",
    variant: "popular",
  },
  {
    name: "👑 私域高端",
    price: "¥999",
    period: "/年起",
    features: [
      { text: "100% 资源访问", available: true },
      { text: "1v1 咨询服务", available: true },
      { text: "私董会门票", available: true },
      { text: "企业定制服务", available: true },
      { text: "早期内测资格", available: true },
    ],
    button: "联系咨询",
    variant: "premium",
  },
];

const FAQS = [
  {
    question: "💳 支持哪些支付方式？",
    answer: "我们支持微信支付、支付宝、银行卡等多种支付方式。",
  },
  {
    question: "🔄 可以退款吗？",
    answer: "VIP 会员购买后 7 天内可无条件退款。",
  },
  {
    question: "📱 会员可以多人共享吗？",
    answer: "VIP 会员仅限单人使用，企业版支持团队共享。",
  },
  {
    question: "🔒 支付安全吗？",
    answer: "我们使用正规支付渠道，所有交易都有安全保障。",
  },
];

export default function VipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <BrandLogo size="small" withText={true} />
            </Link>
            <div className="flex items-center gap-6">
              {['工具库', '分类', 'VIP 专区'].map((item, index) => (
                <Link
                  key={item}
                  href={index === 0 ? '/tools' : index === 1 ? '/categories' : '/vip'}
                  className={`text-sm transition-colors ${
                    index === 2 ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/login"
                className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              解锁全部 AI 资源
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            成为 VIP 会员，访问 80% 付费资源 + 深度教程 + 专属服务
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-3xl backdrop-blur-xl ${
                  plan.variant === 'popular'
                    ? 'relative bg-gradient-to-b from-indigo-50 to-pink-50 border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-medium text-white">
                    {plan.badge}
                  </div>
                )}
                <div className="text-2xl font-bold mb-2 text-slate-900">
                  {plan.name}
                </div>
                <div className="text-4xl font-bold mb-6 text-slate-900">
                  {plan.price}
                  <span className="text-lg text-slate-500 font-normal">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-3 ${
                        feature.available ? 'text-slate-700' : 'text-slate-400'
                      }`}
                    >
                      <span className={feature.available ? 'text-green-500' : 'text-slate-300'}>
                        {feature.available ? '✓' : '✗'}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-colors hover:shadow-md ${
                    plan.variant === 'popular'
                      ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90 shadow-lg shadow-indigo-500/30'
                      : 'border border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            常见问题
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-2xl cursor-pointer border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-slate-900 hover:text-indigo-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-900">AI 工具导航站</span>
            </Link>
            <div className="text-slate-500 text-sm">
              © 2026 AI 工具导航站 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm text-slate-600">
              {['关于我们', '联系我们', '隐私政策'].map((item, index) => (
                <Link
                  key={item}
                  href={index === 0 ? '/about' : index === 1 ? '/contact' : '/privacy'}
                  className="hover:text-slate-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
