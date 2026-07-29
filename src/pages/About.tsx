import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <div className="bg-[#161411] text-[#E9E1CE] font-body grain">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#100F0C]">
        <div className="absolute inset-0">
          <img src="/images/about-hero.jpg" alt="Chef at work" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100F0C] via-[#100F0C]/60 to-[#100F0C]/30" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[16rem] rounded-full bg-[#C9A24B]/[0.06] blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Our Story
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-4">
              Crafted with fire,
              <br />served with <em className="italic text-[#C9A24B] font-light">soul</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] max-w-md mx-auto">
              Middle Eastern Dining in the Heart of Madurai
            </motion.p>
          </motion.div>
          <div className="text-left mt-6 text-[10px] tracking-[0.3em] uppercase text-[#E9E1CE]/25">
            <Link to="/" className="hover:text-[#C9A24B] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#C9A24B]/60">About</span>
          </div>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-20 sm:py-28 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
                The Story
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02] mb-6">
                Where fire meets <em className="italic text-[#C9A24B] font-light">flavor</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#E9E1CE]/50 font-light text-[15px] leading-relaxed mb-4">
                Raaha was born from a love of fire-grilled flavor and generous hospitality — where every platter is shared, every guest is family. Our name, meaning "comfort" and "soul" in Arabic, captures the essence of what we bring to every table.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#E9E1CE]/50 font-light text-[15px] leading-relaxed mb-4">
                Nestled in the heart of Madurai, we bring the rich traditions of Middle Eastern grilling to a city that knows and loves its food. From the smoky char of our tandoor to the slow-cooked perfection of our mandi, every dish is crafted with respect for tradition and a passion for flavor.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#E9E1CE]/50 font-light text-[15px] leading-relaxed">
                At Raaha, we believe that food is not just nourishment — it is memory, season, and gratitude. Come share a meal with us, and taste the difference that fire and soul make.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]">
                  <img src="/images/restaurant-interior.jpg" alt="Interior" className="w-full h-40 sm:h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]">
                  <img src="https://images.pexels.com/photos/5779773/pexels-photo-5779773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Grill" className="w-full h-32 sm:h-44 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]">
                  <img src="https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Biryani" className="w-full h-32 sm:h-44 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]">
                  <img src="https://images.pexels.com/photos/36691304/pexels-photo-36691304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Kunafa" className="w-full h-40 sm:h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 sm:py-20 bg-[#100F0C] border-y border-[#E9E1CE]/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: '80+', label: 'Signature Dishes' },
              { value: '4.7', label: 'Guest Rating' },
              { value: '5+', label: 'Years Serving Madurai' },
              { value: '12', label: 'Master Grill Chefs' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center border-l border-[#C9A24B]/20 pl-0 first:border-l-0 sm:pl-6 sm:first:pl-0">
                <div className="font-display text-3xl sm:text-4xl text-[#C9A24B] mb-1">{stat.value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#E9E1CE]/35">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-20 sm:py-28 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              What Makes Us Special
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02]">
              The Raaha <em className="italic text-[#C9A24B] font-light">difference</em>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔥', title: 'Authentic Grill Techniques', desc: 'Traditional charcoal & tandoor grilling, just as it\'s done in the Middle East' },
              { icon: '🌿', title: 'Fresh, Quality Ingredients', desc: 'Handpicked spices and produce sourced daily for peak flavor' },
              { icon: '🤝', title: 'Warm Hospitality', desc: 'Every guest is family — generous portions, attentive service' },
              { icon: '🏆', title: '4.7★ · 5,113 Reviews', desc: 'Consistently rated among the best in Madurai' },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#1C1916] rounded-2xl p-6 border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
                <h3 className="font-display text-lg mb-2">{val.title}</h3>
                <p className="text-[#E9E1CE]/40 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHEF ═══ */}
      <section className="py-20 sm:py-28 bg-[#100F0C]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]">
                <img src="/images/about-hero.jpg" alt="Head Chef" className="w-full h-64 sm:h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#C9A24B]/10 rounded-xl flex items-center justify-center border border-[#C9A24B]/30">
                <Flame className="w-8 h-8 text-[#C9A24B]" />
              </div>
              <span className="absolute -top-6 -left-6 font-arabic text-7xl text-[#C9A24B]/[0.08] select-none hidden sm:block">راحة</span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
                Meet the Chef
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02] mb-6">
                The master behind the <em className="italic text-[#C9A24B] font-light">grill</em>
              </motion.h2>
              <motion.blockquote variants={fadeUp} className="font-display italic text-lg sm:text-xl text-[#E9E1CE]/70 leading-relaxed mb-8">
                "Food is not just nourishment — it is memory, season, and gratitude. Every plate that leaves our kitchen carries a piece of our soul."
              </motion.blockquote>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
                {[
                  { v: '80+', l: 'Signature Dishes' },
                  { v: '5+', l: 'Years of Craft' },
                  { v: '4.7★', l: 'Guest Rating' },
                ].map((s) => (
                  <div key={s.l} className="border-l border-[#C9A24B]/30 pl-4">
                    <div className="font-display text-2xl text-[#C9A24B]">{s.v}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#E9E1CE]/35 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="py-20 sm:py-28 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              The Ambience
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02]">
              Step inside <em className="italic text-[#C9A24B] font-light">Raaha</em>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              '/images/restaurant-interior.jpg',
              'https://images.pexels.com/photos/5779773/pexels-photo-5779773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/36691304/pexels-photo-36691304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/18752152/pexels-photo-18752152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl overflow-hidden group border border-[#E9E1CE]/[0.06]"
              >
                <img src={src} alt="Ambience" className="w-full h-40 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mt-10">
            {['♿ Accessible', '🏳️‍🌈 LGBTQ+ Friendly', '🛋️ Private Dining', '🅿️ Valet Parking'].map((badge) => (
              <span key={badge} className="px-4 py-1.5 rounded-full border border-[#E9E1CE]/[0.1] text-[10px] tracking-[0.12em] uppercase text-[#E9E1CE]/35">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative bg-[#2A0E13] py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[20rem] rounded-full bg-[#C9A24B]/[0.06] blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02] mb-4">
              Come experience <em className="italic text-[#C9A24B] font-light">Raaha</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] mb-8 max-w-md mx-auto">
              Fire-grilled flavors, warm hospitality, and unforgettable moments await.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/reservation"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
              >
                Reserve a Table <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/menu"
                className="text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/50 hover:text-[#C9A24B] transition-colors"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
