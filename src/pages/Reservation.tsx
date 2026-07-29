import { motion } from 'framer-motion';
import { Phone, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '',
    partySize: '2', occasion: 'casual', seating: 'regular', specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = [];
  for (let h = 12; h <= 23; h++) {
    for (let m = 0; m < 60; m += 30) {
      if (h === 23 && m > 30) break;
      const hour = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? 'PM' : 'AM';
      timeSlots.push(`${hour}:${m === 0 ? '00' : m} ${ampm}`);
    }
  }

  const inputClass = "w-full px-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-lg text-sm text-[#E9E1CE] placeholder-[#E9E1CE]/20 focus:outline-none focus:border-[#C9A24B]/40 transition-colors";
  const labelClass = "block text-[10px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1.5";

  return (
    <div className="bg-[#161411] text-[#E9E1CE] font-body grain min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 bg-[#161411] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] rounded-full bg-[#7A1F2B]/[0.12] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A24B]/[0.05] blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Book a Table
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-4">
              Reserve your <em className="italic text-[#C9A24B] font-light">table</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] max-w-md mx-auto">
              Join us for an unforgettable Middle Eastern dining experience. Fire-grilled flavors await.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FORM ═══ */}
      <section className="py-8 sm:py-14 bg-[#161411]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#1C1916] rounded-2xl p-8 sm:p-12 text-center border border-[#C9A24B]/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-14 h-14 bg-[#C9A24B] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-6 h-6 text-[#161411]" />
              </motion.div>
              <h2 className="font-display font-medium text-2xl sm:text-3xl mb-3">Table <em className="italic text-[#C9A24B] font-light">Reserved!</em></h2>
              <p className="text-[#E9E1CE]/50 text-sm mb-1">
                Thank you, {formData.name}! We'll confirm your table shortly via SMS/call.
              </p>
              <p className="text-[#E9E1CE]/35 text-xs">
                {formData.partySize} guests · {formData.date} · {formData.time}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="tel:+918681992233"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors">
                  <Phone className="w-3.5 h-3.5" /> Call to Confirm
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', date: '', time: '', partySize: '2', occasion: 'casual', seating: 'regular', specialRequests: '' });
                  }}
                  className="text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/35 hover:text-[#C9A24B] transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              onSubmit={handleSubmit}
              className="bg-[#1C1916] rounded-2xl p-6 sm:p-10 border border-[#E9E1CE]/[0.06] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div variants={fadeUp}>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+91 XXXXX XXXXX" />
                </motion.div>
              </div>

              <motion.div variants={fadeUp}>
                <label className={labelClass}>Email (optional)</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div variants={fadeUp}>
                  <label className={labelClass}>Date *</label>
                  <input type="date" required value={formData.date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className={inputClass} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className={labelClass}>Time *</label>
                  <select required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className={inputClass}>
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                  </select>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div variants={fadeUp}>
                  <label className={labelClass}>Party Size *</label>
                  <select required value={formData.partySize} onChange={(e) => setFormData({ ...formData, partySize: e.target.value })} className={inputClass}>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3-4">3-4 Guests</option>
                    <option value="5-8">5-8 Guests</option>
                    <option value="8+">8+ Group / Private Dining</option>
                  </select>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className={labelClass}>Occasion</label>
                  <select value={formData.occasion} onChange={(e) => setFormData({ ...formData, occasion: e.target.value })} className={inputClass}>
                    <option value="casual">Casual</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                    <option value="family">Family Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
              </div>

              {/* Seating */}
              <motion.div variants={fadeUp}>
                <label className={labelClass}>Seating Preference</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'regular', label: 'Regular Table' },
                    { value: 'private', label: 'Private Dining' },
                    { value: 'outdoor', label: 'Outdoor' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-[0.12em] uppercase cursor-pointer transition-all duration-200 border ${
                        formData.seating === option.value
                          ? 'bg-[#7A1F2B] border-[#7A1F2B] text-[#E9E1CE]'
                          : 'bg-transparent border-[#E9E1CE]/[0.1] text-[#E9E1CE]/40 hover:border-[#C9A24B]/40 hover:text-[#E9E1CE]/70'
                      }`}
                    >
                      <input type="radio" name="seating" value={option.value} checked={formData.seating === option.value} onChange={(e) => setFormData({ ...formData, seating: e.target.value })} className="hidden" />
                      {option.label}
                    </label>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className={labelClass}>Special Requests</label>
                <textarea rows={3} value={formData.specialRequests} onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className={`${inputClass} resize-none`} placeholder="Allergies, dietary needs, seating preference…" />
              </motion.div>

              <motion.div variants={fadeUp}>
                <button type="submit"
                  className="w-full py-3.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors shadow-[0_0_20px_rgba(201,162,75,0.15)] hover:shadow-[0_0_30px_rgba(201,162,75,0.25)]">
                  Confirm Reservation
                </button>
              </motion.div>
            </motion.form>
          )}

          {/* Alternative booking */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="tel:+918681992233" className="flex items-center gap-3 p-4 bg-[#1C1916] rounded-xl border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/30 transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#E9E1CE]/[0.04] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#C9A24B]/70" />
              </div>
              <div>
                <p className="text-[#E9E1CE]/80 text-sm font-medium">Prefer to call?</p>
                <p className="text-[#C9A24B]/70 text-xs">+91 86819 92233</p>
              </div>
            </a>
            <a href="https://wa.me/918681992233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[#1C1916] rounded-xl border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/30 transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#E9E1CE]/[0.04] flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-[#C9A24B]/70" />
              </div>
              <div>
                <p className="text-[#E9E1CE]/80 text-sm font-medium">Book via WhatsApp</p>
                <p className="text-[#C9A24B]/70 text-xs">Quick & easy booking</p>
              </div>
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[#E9E1CE]/30 text-xs">
              🎉 Planning a large event? <a href="/contact" className="text-[#C9A24B]/70 hover:text-[#C9A24B] transition-colors">Enquire about catering →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ LOCATION STRIP ═══ */}
      <section className="py-8 bg-[#100F0C] border-t border-[#E9E1CE]/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-[#E9E1CE]/50 text-sm">📍 14, Gokhale Rd, Chinna Chokikulam, Madurai</p>
              <p className="text-[#E9E1CE]/30 text-xs mt-0.5">Open daily · Until 11:30 PM</p>
            </div>
            <a
              href="https://maps.google.com/?q=14+Gokhale+Rd+Chinna+Chokikulam+Madurai+Tamil+Nadu+625002"
              target="_blank" rel="noopener noreferrer"
              className="text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/40 hover:text-[#C9A24B] transition-colors"
            >
              View on Map →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
