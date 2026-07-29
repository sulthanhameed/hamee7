import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  { icon: '🍽️', name: 'Dine-In', desc: 'Full-service seating with a curated Middle Eastern ambience. Enjoy the complete Raaha experience with table service.', img: 'https://images.pexels.com/photos/5779773/pexels-photo-5779773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: '🚗', name: 'Drive-Through', desc: 'Quick grab without leaving your car. Order ahead and pick up fresh from our drive-through window.', img: 'https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: '🛵', name: 'No-Contact Delivery', desc: 'Delivered fresh to your door. Safe, hygienic, and contactless delivery across Madurai.', img: 'https://images.pexels.com/photos/18752152/pexels-photo-18752152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: '🥡', name: 'Takeaway', desc: 'Order ahead, skip the wait. Call us or order online, and your meal will be ready when you arrive.', img: 'https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: '🎉', name: 'Catering & Events', desc: 'Custom menus for celebrations, corporate events, and special occasions. Full-spread catering with Raaha quality.', img: 'https://images.pexels.com/photos/36691304/pexels-photo-36691304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: '🛋️', name: 'Private Dining Room', desc: 'Book our private space for intimate gatherings, business dinners, or celebrations. Exclusive ambience, personalized service.', img: '/images/restaurant-interior.jpg' },
  { icon: '🅿️', name: 'Valet Parking', desc: 'Complimentary valet service at the door. Arrive in comfort, leave with ease.', img: 'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: '♿', name: 'Accessible Dining', desc: 'Wheelchair-accessible entrance, seating, and restrooms. Assistive hearing loop available. Everyone is welcome at Raaha.', img: 'https://images.pexels.com/photos/17696653/pexels-photo-17696653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
];

export default function Services() {
  return (
    <div className="bg-[#161411] text-[#E9E1CE] font-body grain min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 bg-[#161411] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] rounded-full bg-[#7A1F2B]/[0.12] blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-4">
              What we <em className="italic text-[#C9A24B] font-light">offer</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] max-w-md mx-auto">
              From dine-in to delivery, private dining to catering — Raaha is here for every occasion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section className="py-10 sm:py-16 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group bg-[#1C1916] rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/30 hover:shadow-[0_8px_36px_rgba(0,0,0,0.35),0_0_20px_rgba(201,162,75,0.06)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={svc.img} alt={svc.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1916] via-[#1C1916]/40 to-transparent" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-full bg-[#161411]/80 border border-[#C9A24B]/30 flex items-center justify-center text-xl">
                    {svc.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg mb-2 group-hover:text-[#C9A24B] transition-colors">{svc.name}</h3>
                  <p className="text-[#E9E1CE]/40 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATERING CTA ═══ */}
      <section className="relative bg-[#2A0E13] py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[20rem] rounded-full bg-[#C9A24B]/[0.06] blur-[120px]" />
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 font-arabic text-[14rem] leading-none text-[#E9E1CE]/[0.03] select-none hidden md:block">راحة</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-5xl mb-4">🎉</motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02] mb-4">
              Planning an <em className="italic text-[#C9A24B] font-light">event?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] mb-8 max-w-md mx-auto">
              Let Raaha cater it. From intimate gatherings to grand celebrations, we bring the fire-grilled flavors to your event.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
              >
                Enquire About Catering <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/918681992233"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/50 hover:text-[#C9A24B] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
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
