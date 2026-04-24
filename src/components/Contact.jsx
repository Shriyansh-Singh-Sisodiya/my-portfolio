import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
    {
        icon: Phone,
        label: 'Phone / WhatsApp',
        value: '+91 8964021179',
        href: 'tel:+918964021179',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'shriyanshsinghsisodiya@gmail.com',
        href: 'mailto:shriyanshsinghsisodiya@gmail.com',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'India (Available remotely)',
        href: null,
    },
]

const FloatField = ({ label, type = 'text', name, value, onChange, rows }) => {
    const Tag = rows ? 'textarea' : 'input'
    return (
        <div className="field-wrap">
            <Tag
                className="field-input"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder=" "
                required
                rows={rows}
                style={rows ? { paddingTop: 24 } : {}}
            />
            <label className="field-label">{label}</label>
        </div>
    )
}

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

    const handleChange = e =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('sending')
        // Simulate — replace with emailjs.send() or fetch to Formspree
        await new Promise(r => setTimeout(r, 1400))
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">

                {/* Header */}
                <div className="max-w-xl mb-16">
                    <div className="eyebrow mb-4 reveal">Get In Touch</div>
                    <h2 className="section-heading text-slate-100 reveal">
                        Let's talk{' '}
                        <span className="text-gradient" style={{ fontStyle: 'italic' }}>business</span>
                    </h2>
                    <p className="text-slate-500 mt-4 reveal" style={{ fontSize: 15, lineHeight: 1.7 }}>
                        Have a project in mind? I'd love to hear about your business and figure out how to help you grow.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* ── Left: Contact info ── */}
                    <div className="lg:col-span-2 flex flex-col gap-4 reveal-left">
                        {contactInfo.map(({ icon: Icon, label, value, href }) => (
                            <div
                                key={label}
                                className="contact-info-item glass"
                                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                <div className="contact-info-icon">
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-600 mb-0.5 tracking-wide uppercase">{label}</p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="text-slate-300 text-sm font-medium hover:text-white transition-colors break-all"
                                            style={{ cursor: 'none' }}
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <span className="text-slate-400 text-sm">{value}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Response time note */}
                        <div
                            className="glass rounded-xl px-5 py-4 mt-2"
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <p className="text-slate-500" style={{ fontSize: 13, lineHeight: 1.7 }}>
                                ⚡ I typically respond within <strong className="text-slate-300">2–4 hours</strong> during working hours. For urgent projects, WhatsApp is fastest.
                            </p>
                        </div>
                    </div>

                    {/* ── Right: Form ── */}
                    <div className="lg:col-span-3 reveal-right">
                        <div
                            className="glass rounded-2xl p-8"
                            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            {status === 'sent' ? (
                                <motion.div
                                    className="flex flex-col items-center text-center py-10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                                        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
                                    >
                                        <CheckCircle2 size={30} style={{ color: '#22c55e' }} />
                                    </div>
                                    <h3
                                        className="text-slate-100 mb-2"
                                        style={{ fontFamily: 'Instrument Serif, serif', fontSize: 24, fontStyle: 'italic' }}
                                    >
                                        Message Sent!
                                    </h3>
                                    <p className="text-slate-500 mb-6" style={{ fontSize: 14 }}>
                                        Thanks for reaching out. I'll get back to you within a few hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus(null)}
                                        className="btn btn-ghost"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={async (e) => {
                                        e.preventDefault()
                                        setStatus('sending')

                                        const data = new FormData(e.target)

                                        await fetch('https://formsubmit.co/ajax/shriyanshsinghsisodiya@gmail.com', {
                                            method: 'POST',
                                            body: data,
                                        })

                                        setStatus('sent')
                                        setForm({ name: '', email: '', message: '' })
                                    }}
                                    className="flex flex-col gap-5"
                                >
                                    <h3
                                        className="text-slate-100 mb-2"
                                        style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, fontStyle: 'italic' }}
                                    >
                                        Send a message
                                    </h3>

                                    {/* Hidden config */}
                                    <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    {/* Optional redirect (we'll handle below) */}
                                    {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <FloatField label="Your Name" name="name" value={form.name} onChange={handleChange} />
                                        <FloatField label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} />
                                    </div>

                                    <FloatField
                                        label="Tell me about your project..."
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary mt-1"
                                    >
                                        <Send size={15} /> Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact