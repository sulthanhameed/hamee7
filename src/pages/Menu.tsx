import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, ArrowUpRight } from 'lucide-react';
import { categories, menuItems, getCategoryItems, formatPrice, MenuItem } from '../data/menuData';
import DishDetailModal from '../components/DishDetailModal';

const filterCategories = [
  { id: 'all', name: 'All' },
  { id: 'grill-bbq', name: 'Grill & BBQ' },
  { id: 'biryani-mandi', name: 'Biryani & Mandi' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'starters', name: 'Starters' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'shawarma', name: 'Shawarma' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('grill-bbq');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = activeFilter === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeFilter);

  const searchedItems = searchQuery
    ? filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredItems;

  const tabItems = getCategoryItems(activeTab);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#161411] text-[#E9E1CE] font-body grain min-h-screen">
      {/* ═══ HERO BAND ═══ */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 bg-[#161411] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] rounded-full bg-[#7A1F2B]/[0.12] blur-[120px]" />
          <div className="absolute top-0 left-1/4 bottom-0 w-px bg-[#E9E1CE]/[0.04]" />
          <div className="absolute top-0 right-1/4 bottom-0 w-px bg-[#E9E1CE]/[0.04]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Our Menu
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-4">
              Flavors of the <em className="italic text-[#C9A24B] font-light">fire</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/45 font-light text-[15px] max-w-md mx-auto">
              From smoky grills to aromatic biryanis — every dish carries the soul of Middle Eastern cuisine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CATEGORY ICON STRIP ═══ */}
      <section className="py-6 bg-[#161411] border-y border-[#E9E1CE]/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveFilter(cat.id); setActiveTab(cat.id); }}
                className="flex-shrink-0 flex flex-col items-center gap-2.5 group"
              >
                <div className={`w-14 h-14 sm:w-[4.2rem] sm:h-[4.2rem] rounded-full flex items-center justify-center text-2xl transition-all duration-300 border ${
                  activeFilter === cat.id
                    ? 'border-[#C9A24B]/50 bg-[#C9A24B]/10 shadow-[0_0_20px_rgba(201,162,75,0.1)]'
                    : 'border-[#E9E1CE]/[0.08] bg-[#E9E1CE]/[0.02] group-hover:border-[#C9A24B]/30'
                }`}>
                  {cat.icon}
                </div>
                <span className={`text-[10px] tracking-[0.2em] uppercase text-center max-w-[72px] transition-colors ${
                  activeFilter === cat.id ? 'text-[#C9A24B]' : 'text-[#E9E1CE]/35 group-hover:text-[#E9E1CE]/60'
                }`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FILTER PILLS + DISH GRID ═══ */}
      <section className="py-10 sm:py-14 bg-[#161411]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E9E1CE]/25" />
              <input
                type="text"
                placeholder="Search dishes…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#E9E1CE]/[0.04] border border-[#E9E1CE]/[0.08] rounded-full text-sm text-[#E9E1CE] placeholder-[#E9E1CE]/25 focus:outline-none focus:border-[#C9A24B]/40 transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full sm:w-auto">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 text-[11px] font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-200 ${
                    activeFilter === cat.id
                      ? 'bg-[#7A1F2B] text-[#E9E1CE] shadow-[0_0_16px_rgba(122,31,43,0.3)]'
                      : 'bg-transparent border border-[#E9E1CE]/[0.1] text-[#E9E1CE]/50 hover:border-[#7A1F2B]/50 hover:text-[#E9E1CE]/80'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {searchedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-[#1C1916] rounded-2xl p-5 border border-[#E9E1CE]/[0.06] hover:border-[#C9A24B]/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
                >
                  <div className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36">
                    <div className="absolute -inset-2 rounded-full border border-[#C9A24B]/0 group-hover:border-[#C9A24B]/30 transition-colors duration-500" />
                    <div className="w-full h-full rounded-full overflow-hidden border border-[#E9E1CE]/[0.08]">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {item.isChefRecommended && (
                      <span className="absolute -top-1 -right-1 px-2 py-0.5 bg-[#C9A24B] text-[#161411] text-[8px] font-bold tracking-[0.15em] uppercase rounded-full">
                        ★ Chef's
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0">
                      {item.isVeg ? (
                        <span className="w-4 h-4 bg-[#1C1916]/90 border border-green-500 flex items-center justify-center rounded-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                        </span>
                      ) : (
                        <span className="w-4 h-4 bg-[#1C1916]/90 border border-red-500 flex items-center justify-center rounded-sm">
                          <span className="w-2 h-2 bg-red-500 rounded-full" />
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display text-center text-lg sm:text-xl leading-tight mb-1 group-hover:text-[#C9A24B] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#E9E1CE]/35 text-[11px] text-center mb-2 line-clamp-2">{item.description}</p>
                  <p className="text-center font-display text-lg text-[#C9A24B]">{formatPrice(item.price)}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {searchedItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#E9E1CE]/35 text-sm">No dishes found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ ITEMIZED MENU LIST ═══ */}
      <section className="py-16 sm:py-24 bg-[#100F0C] border-t border-[#E9E1CE]/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Complete Menu
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-5xl leading-[1.02]">
              All <em className="italic text-[#C9A24B] font-light">dishes</em>
            </motion.h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-8 justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 px-4 py-2 text-[11px] font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-[#7A1F2B] text-[#E9E1CE] shadow-[0_0_16px_rgba(122,31,43,0.3)]'
                    : 'bg-transparent border border-[#E9E1CE]/[0.1] text-[#E9E1CE]/50 hover:border-[#7A1F2B]/50 hover:text-[#E9E1CE]/80'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#1C1916] rounded-2xl overflow-hidden border border-[#E9E1CE]/[0.06]"
            >
              {tabItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group cursor-pointer px-5 sm:px-8 py-4 flex items-start justify-between gap-4 hover:bg-[#E9E1CE]/[0.02] transition-colors ${
                    index !== tabItems.length - 1 ? 'border-b border-[#C9A24B]/[0.08]' : ''
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {item.isVeg ? (
                        <span className="w-3.5 h-3.5 border border-green-500 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        </span>
                      ) : (
                        <span className="w-3.5 h-3.5 border border-red-500 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        </span>
                      )}
                      <h4 className="font-display text-[15px] group-hover:text-[#C9A24B] transition-colors">
                        {item.name}
                      </h4>
                      {item.isChefRecommended && (
                        <span className="text-[#C9A24B] text-[10px]">★</span>
                      )}
                    </div>
                    <p className="text-[#E9E1CE]/35 text-xs ml-5.5">{item.description}</p>
                  </div>
                  <span className="font-display text-[#C9A24B] text-base shrink-0">{formatPrice(item.price)}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Download */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#E9E1CE]/35 hover:text-[#C9A24B] transition-colors">
              <Download className="w-3.5 h-3.5" /> Download Menu PDF
            </button>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 sm:py-20 bg-[#161411] border-t border-[#E9E1CE]/[0.06]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.35em] uppercase text-[#C9A24B] mb-3">
              Not sure what to order?
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-medium text-3xl sm:text-4xl mb-4">
              Let the chef <em className="italic text-[#C9A24B] font-light">guide</em> you
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#E9E1CE]/40 text-sm mb-8 max-w-md mx-auto font-light">
              Call us or message on WhatsApp and we'll curate the perfect spread for your table.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/918681992233"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.22em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
              >
                Order via WhatsApp
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="tel:+918681992233"
                className="text-[12px] font-medium tracking-[0.22em] uppercase text-[#E9E1CE]/50 hover:text-[#C9A24B] transition-colors"
              >
                +91 86819 92233
              </a>
            </motion.div>
          </motion.div>
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
