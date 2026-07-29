import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Star, Phone, MapPin } from 'lucide-react';
import { menuItems, formatPrice, MenuItem } from '../data/menuData';
import { useState } from 'react';
import DishDetailModal from '../components/DishDetailModal';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const dish = (id: string): MenuItem => menuItems.find((i) => i.id === id)!;

const popularIds = [
  'raaha-special-shawarma',
  'mutton-mandi',
  'butter-garlic-prawns',
  'chicken-biryani',
  'tandoori-non-veg-platter',
  'kunafa',
  'dragon-chicken',
  'fish-bbq-platter',
];

const categories = [
  { icon: '🍢', name: 'Grill & BBQ', id: 'grill-bbq' },
  { icon: '🍚', name: 'Biryani & Mandi', id: 'biryani-mandi' },
  { icon: '🦐', name: 'Seafood', id: 'seafood' },
  { icon: '🍲', name: 'Starters', id: 'starters' },
  { icon: '🥙', name: 'Shawarma', id: 'shawarma' },
  { icon: '🥤', name: 'Beverages', id: 'beverages' },
  { icon: '🍰', name: 'Desserts', id: 'desserts' },
];

const marqueeItems = [
  'Tandoor Grill', 'راحة', 'Mutton Mandi', 'Shawarma', 'Dum Biryani',
  'بالعافية', 'Kunafa', 'Charcoal BBQ', 'Butter Garlic Prawns', 'نار', 'Falooda',
];

// Floating food items for the hero composition
const heroFoods = [
  { id: 'raaha-special-shawarma', size: 'w-44 h-44 sm:w-56 sm:h-56', pos: 'top-[2%] left-[8%]', float: 'animate-float-1', z: 'z-20', ring: true },
  { id: 'mutton-mandi', size: 'w-32 h-32 sm:w-44 sm:h-44', pos: 'top-[8%] right-[2%]', float: 'animate-float-2', z: 'z-10', ring: false },
  { id: 'butter-garlic-prawns', size: 'w-36 h-36 sm:w-48 sm:h-48', pos: 'bottom-[5%] right-[12%]', float: 'animate-float-3', z: 'z-20', ring: true },
  { id: 'kunafa', size: 'w-28 h-28 sm:w-36 sm:h-36', pos: 'bottom-[15%] left-[2%]', float: 'animate-float-4', z: 'z-10', ring: false },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <div className="bg-[#161411] text-[#E9E1CE] grain font-body">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-[#7A1F2B]/[0.18] blur-[130px]" />
          <div className="absolute top-24 right-[-10rem] w-[30rem] h-[30rem] rounded-full bg-[#C9A24B]/[0.07] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#C9A24B]/[0.06] blur-[100px]" />
        </div>

        {/* Drifting embers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { left: '18%', delay: '0s', size: 3 },
            { left: '32%', delay: '2.4s', size: 2 },
            { left: '57%', delay: '4.1s', size: 3 },
            { left: '71%', delay: '1.2s', size: 2 },
            { left: '84%', delay: '5.6s', size: 3 },
            { left: '45%', delay: '7s', size: 2 },
          ].map((e, i) => (
            <span
              key={i}
              className="ember absolute bottom-24 rounded-full bg-[#C9A24B]"
              style={{
                left: e.left,
                width: e.size,
                height: e.size,
                animationDelay: e.delay,
                boxShadow: '0 0 8px 2px rgba(201,162,75,0.35)',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-10 min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            {/* ─── LEFT: Text ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:pr-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#C9A24B]" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B]">
                  Middle Eastern Grill · Madurai
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="font-display font-medium text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] mb-6"
              >
                Where fire
                <br />
                meets{' '}
                <em className="italic text-[#C9A24B] font-light">soul</em>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-[#E9E1CE]/50 font-light text-base sm:text-lg max-w-md leading-relaxed mb-8"
              >
                Raaha — <span className="font-arabic text-[#C9A24B]/80">راحة</span> — comfort, in Arabic.
                Charcoal-grilled platters, slow mandi, and hospitality that treats every guest as family.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
                >
                  Explore the Menu
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/reservation"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#C9A24B]/30 text-[12px] font-medium tracking-[0.22em] uppercase text-[#C9A24B] rounded-full hover:bg-[#C9A24B]/10 transition-colors"
                >
                  Reserve a Table
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

              {/* Rating + Info row */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[#E9E1CE]/40 text-xs tracking-[0.12em] uppercase">
                <span className="flex items-center gap-2">
                  <span className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-[#C9A24B] fill-[#C9A24B]" />
                    ))}
                  </span>
                  <span className="text-[#E9E1CE]/60">4.7</span>
                  <span>· 5,113 reviews</span>
                </span>
                <span className="hidden sm:inline text-[#C9A24B]/40">◆</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C9A24B]/60" />
                  Gokhale Rd, Madurai
                </span>
                <span className="hidden sm:inline text-[#C9A24B]/40">◆</span>
                <span>Open daily · Until 11:30 PM</span>
              </motion.div>

              {/* Phone number */}
              <motion.div variants={fadeUp} className="mt-6">
                <a href="tel:+918681992233" className="inline-flex items-center gap-2 text-[#E9E1CE]/30 hover:text-[#C9A24B] transition-colors text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-display text-lg text-[#C9A24B]/70">+91 86819 92233</span>
                </a>
              </motion.div>
            </motion.div>

            {/* ─── RIGHT: Floating food composition ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[420px] sm:h-[520px] lg:h-[580px] hidden sm:block"
            >
              {/* Tilted elliptical rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="animate-ring-1 absolute top-1/2 left-1/2 w-[85%] h-[70%] rounded-full border border-[#C9A24B]/[0.12] origin-center" />
                <div className="animate-ring-2 absolute top-1/2 left-1/2 w-[95%] h-[80%] rounded-full border border-[#E9E1CE]/[0.06] origin-center" />
                <div className="animate-ring-3 absolute top-1/2 left-1/2 w-[75%] h-[60%] rounded-full border border-[#C9A24B]/[0.08] origin-center" />
              </div>

              {/* Arabic watermark */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[10rem] leading-none text-[#E9E1CE]/[0.04] select-none pointer-events-none">
                راحة
              </span>

              {/* Floating food images */}
              {heroFoods.map((food, i) => {
                const item = dish(food.id);
                return (
                  <motion.div
                    key={food.id}
                    initial={{ opacity: 0, scale: 0.6, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute ${food.pos} ${food.z} ${food.float}`}
                  >
                    <div className="relative group cursor-pointer" onClick={() => setSelectedItem(item)}>
                      {/* Outer ring */}
                      {food.ring && (
                        <div className="absolute -inset-3 rounded-full border border-[#C9A24B]/25 group-hover:border-[#C9A24B]/50 transition-colors duration-500" />
                      )}
                      {/* Glow */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#C9A24B]/10 blur-xl rounded-full" />
                      {/* Image */}
                      <div className={`${food.size} rounded-full overflow-hidden border-2 border-[#E9E1CE]/10 group-hover:border-[#C9A24B]/50 transition-colors duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      {/* Label */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                        <span className="text-[11px] tracking-[0.15em] uppercase text-[#E9E1CE]/50 group-hover:text-[#C9A24B] transition-colors">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Small decorative dots on rings */}
              <div className="absolute top-[15%] left-[45%] w-2 h-2 rounded-full bg-[#C9A24B]/40" />
              <div className="absolute top-[60%] right-[8%] w-1.5 h-1.5 rounded-full bg-[#C9A24B]/30" />
              <div className="absolute bottom-[20%] left-[20%] w-2 h-2 rounded-full bg-[#E9E1CE]/20" />
              <div className="absolute top-[35%] right-[25%] w-1 h-1 rounded-full bg-[#C9A24B]/50" />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#E9E1CE]/25">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-[#E9E1CE]/15 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-[#C9A24B]/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="bg-[#100F0C] border-y border-[#E9E1CE]/[0.06] py-4 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((track) => (
            <div key={track} className="flex items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={i} className="flex items-center">
                  <span className={`mx-6 whitespace-nowrap ${
                    /[\u0600-\u06FF]/.test(item)
                      ? 'font-arabic text-2xl text-[#C9A24B]/50'
                      : 'font-display italic text-2xl sm:text-3xl text-[#E9E1CE]/45'
                  }`}>
                    {item}
                  </span>
                  <span className="text-[#C9A24B]/40 text-[10px]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ CATEGORY STRIP ═══════════ */}
      <section className="py-16 sm:py-20 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-2">Browse by Category</motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-4xl">What are you <em className="italic text-[#C9A24B] font-light">craving?</em></motion.h2>
          </motion.div>

          <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide justify-start sm:justify-center pb-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/menu?category=${cat.id}`}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1C1916] border border-[#E9E1CE]/[0.06] flex items-center justify-center text-3xl sm:text-4xl group-hover:border-[#C9A24B]/40 group-hover:shadow-[0_0_24px_rgba(201,162,75,0.1)] transition-all duration-300">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#E9E1CE]/40 group-hover:text-[#C9A24B] transition-colors text-center max-w-[80px]">
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ POPULAR DISHES GRID ═══════════ */}
      <section className="py-16 sm:py-24 bg-[#100F0C]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-2">Popular Picks</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02]">
                From the <em className="italic text-[#C9A24B] font-light">charcoal</em>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link to="/menu" className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/45 hover:text-[#C9A24B] transition-colors">
                View Full Menu <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularIds.map((id, i) => {
              const item = dish(id);
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-[#1C1916] rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1916] via-transparent to-transparent" />
                    {item.isChefRecommended && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C9A24B] text-[#161411] text-[9px] font-bold tracking-[0.15em] uppercase rounded-full">
                        ★ Chef's Pick
                      </span>
                    )}
                    {/* Veg/Non-veg */}
                    <div className="absolute top-3 right-3">
                      {item.isVeg ? (
                        <span className="w-4 h-4 bg-[#1C1916]/80 border border-green-500 flex items-center justify-center rounded-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                        </span>
                      ) : (
                        <span className="w-4 h-4 bg-[#1C1916]/80 border border-red-500 flex items-center justify-center rounded-sm">
                          <span className="w-2 h-2 bg-red-500 rounded-full" />
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-lg mb-1 group-hover:text-[#C9A24B] transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[#E9E1CE]/35 text-[11px] mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-[#C9A24B]">{formatPrice(item.price)}</span>
                      <span className="w-8 h-8 rounded-full bg-[#C9A24B]/10 flex items-center justify-center text-[#C9A24B] group-hover:bg-[#C9A24B] group-hover:text-[#161411] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT / STORY STRIP ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Photo collage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[28rem] sm:h-[32rem]"
            >
              <div className="absolute top-0 left-0 w-56 sm:w-64 rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06] rotate-[-3deg] hover:rotate-0 transition-transform duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <img src="/images/restaurant-interior.jpg" alt="Interior" className="w-full h-40 sm:h-48 object-cover" />
                <div className="bg-[#1C1916] p-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#E9E1CE]/30 text-center">The Room</p>
                </div>
              </div>
              <div className="absolute top-20 right-0 w-48 sm:w-56 rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06] rotate-[3deg] hover:rotate-0 transition-transform duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <img src="/images/about-hero.jpg" alt="Chef" className="w-full h-40 sm:h-48 object-cover" />
                <div className="bg-[#1C1916] p-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#E9E1CE]/30 text-center">The Hands</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-10 sm:left-16 w-52 sm:w-60 rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06] rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <img src="https://images.pexels.com/photos/36691304/pexels-photo-36691304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Kunafa" className="w-full h-36 sm:h-44 object-cover" />
                <div className="bg-[#1C1916] p-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#E9E1CE]/30 text-center">The Sweet</p>
                </div>
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[7rem] text-[#C9A24B]/[0.06] select-none pointer-events-none">راحة</span>
            </motion.div>

            {/* Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">Our Story</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02] mb-6">
                Warm light, <em className="italic text-[#C9A24B] font-light">warmer</em> tables
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#E9E1CE]/50 font-light text-[15px] leading-relaxed mb-4 max-w-lg">
                Raaha was born from a love of fire-grilled flavor and generous hospitality — where every platter is shared, every guest is family. Our name means "comfort" and "soul" in Arabic.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#E9E1CE]/50 font-light text-[15px] leading-relaxed mb-8 max-w-lg">
                From the smoky char of our tandoor to the slow-cooked perfection of our mandi, every dish is crafted with respect for tradition and a passion for flavor. Food is not just nourishment — it is memory, season, and gratitude.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { v: '80+', l: 'Dishes' },
                  { v: '4.7', l: 'Rating' },
                  { v: '5,113', l: 'Reviews' },
                  { v: '12', l: 'Chefs' },
                ].map((s) => (
                  <div key={s.l} className="border-l border-[#C9A24B]/20 pl-4">
                    <div className="font-display text-2xl sm:text-3xl text-[#C9A24B]">{s.v}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#E9E1CE]/30 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link to="/about" className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors">
                  Read Our Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ QUOTE ═══════════ */}
      <section className="bg-[#100F0C] border-y border-[#E9E1CE]/[0.06] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block font-arabic text-3xl text-[#C9A24B]/60 mb-6">راحة</motion.span>
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display italic font-light text-xl sm:text-3xl leading-snug mb-6">
            "Food is not just nourishment — it is memory, season, and gratitude. Every plate that leaves our kitchen carries a piece of our soul."
          </motion.blockquote>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[11px] tracking-[0.35em] uppercase text-[#E9E1CE]/30">
            — The Grill Master, Raaha
          </motion.p>
        </div>
      </section>

      {/* ═══════════ SERVICES STRIP ═══════════ */}
      <section className="py-16 sm:py-20 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-2">What We Offer</motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-4xl">Our <em className="italic text-[#C9A24B] font-light">Services</em></motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🍽️', name: 'Dine-In' },
              { icon: '🚗', name: 'Drive-Through' },
              { icon: '🛵', name: 'Delivery' },
              { icon: '🥡', name: 'Takeaway' },
              { icon: '🎉', name: 'Catering' },
              { icon: '🛋️', name: 'Private Dining' },
            ].map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[#1C1916] rounded-xl p-5 text-center border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/25 hover:shadow-[0_0_20px_rgba(201,162,75,0.06)] transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{svc.icon}</div>
                <p className="text-[#E9E1CE]/50 text-[11px] tracking-[0.12em] uppercase group-hover:text-[#C9A24B] transition-colors">{svc.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RESERVATION CTA ═══════════ */}
      <section className="relative bg-[#2A0E13] py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[22rem] rounded-full bg-[#C9A24B]/[0.06] blur-[120px]" />
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 font-arabic text-[14rem] leading-none text-[#E9E1CE]/[0.03] select-none hidden md:block">راحة</span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-4">Reservations</motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl md:text-6xl leading-[1.02] mb-5">
              The fire is lit.
              <br />The table is <em className="italic text-[#C9A24B] font-light">yours.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] mb-10 max-w-md mx-auto">
              Open daily until 11:30 PM — Gokhale Road, Chinna Chokikulam, Madurai.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/reservation"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
              >
                Reserve a Table
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918681992233"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#E9E1CE]/15 text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/60 hover:border-[#C9A24B]/50 hover:text-[#C9A24B] transition-colors rounded-full"
              >
                <Phone className="w-3.5 h-3.5" /> +91 86819 92233
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ LOCATION STRIP ═══════════ */}
      <section className="py-10 bg-[#161411] border-t border-[#E9E1CE]/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5 text-[#E9E1CE]/50 text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24B]/60" />
                14, Gokhale Rd, Chinna Chokikulam, Madurai
              </span>
              <span className="text-[#E9E1CE]/30 text-sm">Open daily · Until 11:30 PM</span>
            </div>
            <Link to="/contact" className="text-[12px] font-medium tracking-[0.22em] uppercase text-[#C9A24B]/60 hover:text-[#C9A24B] transition-colors">
              Get Directions →
            </Link>
          </div>
        </div>
      </section>

      <DishDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectItem={(item) => setSelectedItem(item)}
      />
    </div>
  );
}
