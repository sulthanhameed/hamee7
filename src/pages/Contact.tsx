import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Car, Accessibility } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', enquiryType: 'general' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '', enquiryType: 'general' });
  };

  return (
    <div className="bg-[#161411] text-[#E9E1CE] font-body grain min-h-screen">
      {/* ═══ HERO BAND ═══ */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 bg-[#100F0C] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] rounded-full bg-[#7A1F2B]/[0.12] blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Find Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-4">
              Visit <em className="italic text-[#C9A24B] font-light">Raaha</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] max-w-md mx-auto">
              We'd love to host you. Find us, call us, or drop us a message.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ INFO + MAP ═══ */}
      <section className="py-10 sm:py-16 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-4xl mb-8">
                Get in <em className="italic text-[#C9A24B] font-light">touch</em>
              </motion.h2>

              <div className="space-y-5">
                {[
                  { icon: MapPin, title: 'Address', text: '14, Gokhale Rd, Chinna Chokikulam, Madurai, Tamil Nadu 625002' },
                  { icon: Phone, title: 'Phone', text: '+91 86819 92233', href: 'tel:+918681992233' },
                  { icon: Clock, title: 'Hours', text: 'Open daily · Until 11:30 PM' },
                  { icon: Car, title: 'Parking', text: 'Free street parking + valet service' },
                  { icon: Accessibility, title: 'Accessibility', text: 'Wheelchair-accessible entrance & car park' },
                ].map((item) => (
                  <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.06] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#C9A24B]/70" />
                    </div>
                    <div>
                      <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#E9E1CE]/35 mb-0.5">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-[#E9E1CE]/70 text-sm hover:text-[#C9A24B] transition-colors">{item.text}</a>
                      ) : (
                        <p className="text-[#E9E1CE]/70 text-sm">{item.text}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <motion.div variants={fadeUp} className="mt-6 pt-6 border-t border-[#E9E1CE]/[0.06]">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/25 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://instagram.com', label: 'Instagram', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                    { href: 'https://facebook.com', label: 'Facebook', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                    { href: 'https://wa.me/918681992233', label: 'WhatsApp', svg: <MessageCircle className="w-4 h-4" /> },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#E9E1CE]/[0.1] flex items-center justify-center text-[#E9E1CE]/50 hover:bg-[#C9A24B] hover:text-[#161411] hover:border-[#C9A24B] transition-all duration-300" aria-label={s.label}>
                      {s.svg}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Directions */}
              <motion.div variants={fadeUp} className="mt-6">
                <a
                  href="https://maps.google.com/?q=14+Gokhale+Rd+Chinna+Chokikulam+Madurai+Tamil+Nadu+625002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" /> Get Directions
                </a>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1!2d78.12!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRaaha+Restaurant+%26+Grill!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raaha Location"
                className="w-full h-[400px] sm:h-[500px] grayscale-[0.3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section className="py-16 sm:py-24 bg-[#100F0C] border-t border-[#E9E1CE]/[0.06]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3 text-center">
              Get in Touch
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-4xl mb-2 text-center">
              Send us a <em className="italic text-[#C9A24B] font-light">message</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/35 text-sm text-center mb-8">
              Have a question or special request? We'd love to hear from you.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#1C1916] rounded-2xl p-8 sm:p-12 text-center border border-[#C9A24B]/20">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-display text-xl mb-2">Message Sent!</h3>
              <p className="text-[#E9E1CE]/50 text-sm">We'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#1C1916] rounded-2xl p-6 sm:p-10 border border-[#E9E1CE]/[0.06] space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1.5">Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-lg text-sm text-[#E9E1CE] placeholder-[#E9E1CE]/20 focus:outline-none focus:border-[#C9A24B]/40 transition-colors"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1.5">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-lg text-sm text-[#E9E1CE] placeholder-[#E9E1CE]/20 focus:outline-none focus:border-[#C9A24B]/40 transition-colors"
                    placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1.5">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-lg text-sm text-[#E9E1CE] placeholder-[#E9E1CE]/20 focus:outline-none focus:border-[#C9A24B]/40 transition-colors"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1.5">Enquiry Type</label>
                <select value={formData.enquiryType} onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-lg text-sm text-[#E9E1CE] focus:outline-none focus:border-[#C9A24B]/40 transition-colors">
                  <option value="general">General Enquiry</option>
                  <option value="catering">Catering</option>
                  <option value="feedback">Feedback</option>
                  <option value="reservation">Reservation</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1.5">Message *</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-lg text-sm text-[#E9E1CE] placeholder-[#E9E1CE]/20 focus:outline-none focus:border-[#C9A24B]/40 transition-colors resize-none"
                  placeholder="Your message…" />
              </div>
              <button type="submit"
                className="w-full py-3 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ═══ FOOTER STRIP ═══ */}
      <section className="py-6 bg-[#161411] border-t border-[#E9E1CE]/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {['🍽️ Dine-In', '🚗 Drive-Through', '🛵 Delivery', '🥡 Takeaway', '🎉 Catering'].map((s) => (
              <span key={s} className="text-[#E9E1CE]/30 text-[11px] tracking-[0.15em] uppercase">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
