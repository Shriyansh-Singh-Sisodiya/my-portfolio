import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    desc: 'Perfect for getting your business online quickly.',
    features: [
      'Single-page website',
      'Mobile responsive',
      'Contact form',
      'Basic SEO setup',
      'Google Maps integration',
      '1 revision round',
      '5-day delivery',
    ],
    cta: 'Get Started',
    accent: '#3b82f6',
    popular: false,
  },
  {
    name: 'Business',
    price: '₹6,999',
    desc: 'Full-featured website for growing businesses.',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'Contact + WhatsApp form',
      'Advanced SEO',
      'Google Maps & Analytics',
      '3 revision rounds',
      '7-day delivery',
      '1 month free support',
    ],
    cta: 'Most Popular',
    accent: '#8b5cf6',
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Custom',
    desc: 'Tailored for complex requirements.',
    features: [
      'Unlimited pages',
      'Custom animations',
      'Admin dashboard',
      'Payment integration',
      'Blog / News section',
      'Unlimited revisions',
      'Priority delivery',
      '3 months support',
    ],
    cta: "Let's Talk",
    accent: '#06b6d4',
    popular: false,
  },
]

const Pricing = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="eyebrow mb-4 reveal" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 className="section-heading text-slate-100 reveal">
            Simple,{' '}
            <span className="text-gradient" style={{ fontStyle: 'italic' }}>transparent</span>{' '}
            pricing
          </h2>
          <p className="text-slate-500 mt-4 reveal mx-auto" style={{ fontSize: 15, maxWidth: 440 }}>
          I genuinely enjoy it — so we can always work out a price that fits your budget. No hidden fees. No surprises. 
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="pricing-card glass"
              style={{
                border: plan.popular
                  ? '1px solid rgba(139,92,246,0.35)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: plan.popular
                  ? '0 0 60px rgba(139,92,246,0.15), 0 24px 64px rgba(0,0,0,0.6)'
                  : 'none',
                transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {plan.popular && (
                <div className="pricing-popular-badge">✦ Most Popular</div>
              )}

              {/* Plan name */}
              <div
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: plan.accent }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="pricing-price mb-2" style={{
                background: `linear-gradient(130deg, ${plan.accent}, ${plan.popular ? '#ec4899' : plan.accent}cc)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {plan.price}
              </div>

              <p className="text-slate-500 mb-8" style={{ fontSize: 13 }}>{plan.desc}</p>

              {/* Features */}
              <div className="mb-8">
                {plan.features.map(f => (
                  <div key={f} className="pricing-feature">
                    <div className="pricing-check">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="btn w-full"
                style={{
                  background: plan.popular
                    ? `linear-gradient(135deg, ${plan.accent}, #ec4899)`
                    : 'transparent',
                  border: plan.popular ? 'none' : `1px solid ${plan.accent}40`,
                  color: plan.popular ? '#fff' : plan.accent,
                  boxShadow: plan.popular ? `0 8px 28px ${plan.accent}40` : 'none',
                }}
              >
                {plan.cta} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-600 mt-10 reveal" style={{ fontSize: 13 }}>
          Not sure which plan? <button onClick={scrollToContact} className="underline" style={{ color: 'var(--c-accent)', background: 'none', border: 'none', cursor: 'none' }}>Let's chat and find the right fit →</button>
        </p>
      </div>
    </section>
  )
}

export default Pricing