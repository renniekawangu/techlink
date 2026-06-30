import { useMemo, useState } from 'react';
import {
  FaApple,
  FaAsymmetrik,
  FaBatteryFull,
  FaCheckCircle,
  FaDesktop,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLaptop,
  FaMapMarkerAlt,
  FaMicrochip,
  FaMobileAlt,
  FaNetworkWired,
  FaPhoneAlt,
  FaPrint,
  FaQuoteRight,
  FaSearch,
  FaShieldAlt,
  FaShoppingBag,
  FaStar,
  FaTabletAlt,
  FaTools,
  FaTruck,
  FaTwitter,
  FaWhatsapp,
  FaWifi,
} from 'react-icons/fa';
import { MdCameraswitch, MdEmail, MdOutlineStorage, MdSecurity } from 'react-icons/md';
import { SiAcer, SiAsus, SiDell, SiEpson, SiHp, SiLenovo, SiLogitech, SiSamsung } from 'react-icons/si';
import heroImage from './assets/iphone.png';

const product1 = 'https://media.johnlewiscontent.com/i/JohnLewis/013249427?fmt=auto&$background-off-white$';

const whatsappNumber = '260970000000';

const navItems = ['Home', 'About Us', 'Products', 'Services', 'Brands', 'Promotions', 'Contact'];

const categories = [
  { name: 'Smartphones', icon: FaMobileAlt },
  { name: 'Laptops', icon: FaLaptop },
  { name: 'Desktop Computers', icon: FaDesktop },
  { name: 'Gaming PCs', icon: FaAsymmetrik },
  { name: 'Tablets', icon: FaTabletAlt },
  { name: 'Monitors', icon: FaDesktop },
  { name: 'Printers', icon: FaPrint },
  { name: 'Networking Equipment', icon: FaNetworkWired },
  { name: 'CCTV Systems', icon: MdCameraswitch },
  { name: 'Computer Components', icon: FaMicrochip },
  { name: 'Storage Devices', icon: MdOutlineStorage },
  { name: 'Accessories', icon: FaHeadset },
];

const brands = [
  { name: 'Apple', icon: FaApple, focus: 'Premium phones, tablets, and Mac accessories' },
  { name: 'Samsung', icon: SiSamsung, focus: 'Galaxy smartphones, tablets, and displays' },
  { name: 'HP', icon: SiHp, focus: 'Business laptops, desktops, and printers' },
  { name: 'Dell', icon: SiDell, focus: 'Latitude, Inspiron, monitors, and workstations' },
  { name: 'Lenovo', icon: SiLenovo, focus: 'ThinkPad, IdeaPad, and office PCs' },
  { name: 'ASUS', icon: SiAsus, focus: 'Creator laptops, gaming PCs, and components' },
  { name: 'Acer', icon: SiAcer, focus: 'Affordable laptops, monitors, and desktops' },
  { name: 'MSI', icon: FaAsymmetrik, focus: 'Gaming laptops, boards, and graphics gear' },
  { name: 'Canon', icon: FaPrint, focus: 'Inkjet printers, scanners, and consumables' },
  { name: 'Epson', icon: SiEpson, focus: 'EcoTank printers and office printing' },
  { name: 'Logitech', icon: SiLogitech, focus: 'Keyboards, mice, webcams, and headsets' },
  { name: 'Kingston', icon: MdOutlineStorage, focus: 'Memory, SSDs, USB drives, and storage' },
  { name: 'SanDisk', icon: MdOutlineStorage, focus: 'Flash drives, memory cards, and SSDs' },
  { name: 'TP-Link', icon: FaWifi, focus: 'Routers, switches, mesh, and Wi-Fi gear' },
  { name: 'Hikvision', icon: MdSecurity, focus: 'CCTV cameras, DVRs, and security systems' },
];

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S26 5G',
    category: 'Smartphones',
    brand: 'Samsung',
    price: 18999,
    availability: 'In Stock',
    newest: true,
    warranty: '12 months official warranty',
    images: [product1],
    description: 'Flagship 5G smartphone with a bright AMOLED display, pro-grade camera system, and all-day battery life.',
    specs: ['6.8-inch Dynamic AMOLED', '256GB storage', '12GB RAM', '50MP triple camera', 'Fast charging'],
  },
  {
    id: 2,
    name: 'HP ProBook 450 G11',
    category: 'Laptops',
    brand: 'HP',
    price: 16950,
    availability: 'In Stock',
    newest: true,
    warranty: '12 months carry-in warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgSeYsRaLMoNx7UXJK2DE8DLPeLIy6SLwyfssbwP0nBhVkCUKY1T40Hs&s=10" ],
    description: 'Reliable business laptop for office teams, students, and professionals who need strong everyday performance.',
    specs: ['Intel Core Ultra 5', '16GB RAM', '512GB NVMe SSD', '15.6-inch FHD', 'Windows 11 Pro'],
  },
  {
    id: 3,
    name: 'Dell UltraSharp 27 Monitor',
    category: 'Monitors',
    brand: 'Dell',
    price: 7350,
    availability: 'In Stock',
    newest: false,
    warranty: '24 months warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mb8l6u0ZC2cOmitgNTV5F7WvGx9ErNxO6IEhSjgYjXVZsmg3eBzLY9cO&s=10"],
    description: 'Color-accurate QHD display with USB-C connectivity for tidy, modern workstations.',
    specs: ['27-inch QHD IPS', 'USB-C 90W', 'Height adjustable', '99% sRGB', 'ComfortView Plus'],
  },
  {
    id: 4,
    name: 'ASUS ROG Strix Gaming PC',
    category: 'Gaming PCs',
    brand: 'ASUS',
    price: 28900,
    availability: 'In Stock',
    newest: true,
    warranty: '12 months warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhHxo_brg_w3_0DH4QSotTBOikGCZFETQLovBPKfRclK6aIWNyHkPFodO&s=10"],
    description: 'High-performance gaming tower ready for esports, streaming, design, and demanding creative workloads.',
    specs: ['AMD Ryzen 7', 'RTX graphics', '32GB RAM', '1TB NVMe SSD', 'RGB airflow chassis'],
  },
  {
    id: 5,
    name: 'Epson EcoTank L3250',
    category: 'Printers',
    brand: 'Epson',
    price: 5450,
    availability: 'In Stock',
    newest: false,
    warranty: '12 months service warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLebjCJpRIdP1eIMMdhVwXJ3sI1fr4Lwd324v1DBOqQ&s=10"],
    description: 'Low-cost wireless ink tank printer for homes, schools, and small offices.',
    specs: ['Print, scan, copy', 'Wi-Fi printing', 'Borderless photo print', 'High-yield ink tanks', 'Mobile app support'],
  },
  {
    id: 6,
    name: 'TP-Link Archer AX72 Router',
    category: 'Networking Equipment',
    brand: 'TP-Link',
    price: 3650,
    availability: 'In Stock',
    newest: true,
    warranty: '12 months warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyrOfqaTH9LnT71Lmfi4DFBx4R74uvct6g72bDCoizQ&s=10"],
    description: 'Fast Wi-Fi 6 router for offices, shops, streaming households, and connected smart devices.',
    specs: ['Dual-band Wi-Fi 6', 'Gigabit LAN', 'OFDMA support', 'EasyMesh ready', 'Advanced security'],
  },
  {
    id: 7,
    name: 'Hikvision 8-Channel CCTV Kit',
    category: 'CCTV Systems',
    brand: 'Hikvision',
    price: 9850,
    availability: 'Out of Stock',
    newest: false,
    warranty: '12 months installation warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSS_qdQrCfzot6hxFnWtC5Ggs0r2AYpw7NcQx8IhmfJ03q9Vov3NNVyU&s=10"],
    description: 'Complete CCTV package for homes, retail shops, warehouses, and small business premises.',
    specs: ['8-channel DVR', '4 bullet cameras', 'Night vision', 'Remote viewing', '1TB surveillance drive'],
  },
  {
    id: 8,
    name: 'Kingston NV3 1TB NVMe SSD',
    category: 'Storage Devices',
    brand: 'Kingston',
    price: 2290,
    availability: 'In Stock',
    newest: true,
    warranty: '36 months warranty',
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWblwoEQVlLdlYyGvliSg56AtyWqs33RTzuVp7WRZYA&s=10"],
    description: 'Fast SSD upgrade for laptops and desktops that need faster boot, app, and file performance.',
    specs: ['1TB capacity', 'PCIe 4.0 NVMe', 'M.2 2280', 'Low power draw', 'Ideal upgrade part'],
  },
];

const services = [
  { title: 'Laptop repair', icon: FaLaptop, time: '1-3 days', text: 'Diagnostics, board-level checks, cooling, keyboard, hinge, and performance repairs.' },
  { title: 'Phone repair', icon: FaMobileAlt, time: 'Same day', text: 'Charging faults, speaker issues, camera checks, water damage assessment, and software faults.' },
  { title: 'Screen replacement', icon: FaTabletAlt, time: '2-24 hours', text: 'Genuine-quality laptop, phone, and tablet screens fitted with careful testing.' },
  { title: 'Battery replacement', icon: FaBatteryFull, time: 'Same day', text: 'Battery health checks and replacements for laptops, smartphones, and tablets.' },
  { title: 'Software installation', icon: FaTools, time: '2-4 hours', text: 'Windows setup, drivers, productivity apps, backups, and device optimization.' },
  { title: 'Virus removal', icon: FaShieldAlt, time: 'Same day', text: 'Malware cleanup, security hardening, data protection, and performance recovery.' },
  { title: 'Data recovery', icon: MdOutlineStorage, time: '1-5 days', text: 'Recovery assistance for failed drives, deleted files, damaged USB drives, and SSDs.' },
  { title: 'Printer servicing', icon: FaPrint, time: '1-2 days', text: 'Maintenance, roller cleaning, ink flow checks, driver setup, and network printing.' },
  { title: 'CCTV installation', icon: MdCameraswitch, time: '1-3 days', text: 'Site surveys, camera placement, DVR/NVR setup, remote viewing, and maintenance.' },
  { title: 'Network installation', icon: FaNetworkWired, time: '1-3 days', text: 'Routers, switches, cabling, Wi-Fi coverage, and secure business connectivity.' },
];

const promotions = [
  { title: 'New arrivals', tag: 'Fresh stock', text: 'Latest phones, business laptops, SSDs, routers, and accessories landing weekly.' },
  { title: 'Weekly specials', tag: 'Save more', text: 'Rotating deals on printers, monitors, storage, and essential office tech.' },
  { title: 'Student discounts', tag: 'Back to class', text: 'Quote bundles for laptops, bags, mouse kits, and productivity software.' },
  { title: 'Clearance sales', tag: 'Limited stock', text: 'Last-piece savings on displays, older laptop models, and selected accessories.' },
  { title: 'Limited-time offers', tag: 'Today only', text: 'Ask WhatsApp support for the current in-store bundle and repair service offers.' },
];

const testimonials = [
  { name: 'M. Phiri', role: 'Small business owner', quote: 'They helped us choose laptops, networking gear, and CCTV without overselling. The setup was clean and fast.' },
  { name: 'T. Banda', role: 'University student', quote: 'I got a fair laptop recommendation, warranty advice, and quick help moving my files from my old machine.' },
  { name: 'C. Mwansa', role: 'Office manager', quote: 'Responsive team, clear quotes, and dependable printer support. We now call them first for office tech.' },
];

function formatPrice(price) {
  return `K${price.toLocaleString('en-ZM')}`;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function App() {
  const [activePage, setActivePage] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showPrices, setShowPrices] = useState(true);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [availability, setAvailability] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sort, setSort] = useState('Newest');

  const filteredProducts = useMemo(() => {
    const ranges = {
      'Under K5,000': [0, 5000],
      'K5,000 - K15,000': [5000, 15000],
      'Above K15,000': [15000, Infinity],
    };

    return products
      .filter((product) => {
        const matchesQuery = [product.name, product.description, product.brand, product.category]
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesCategory = category === 'All' || product.category === category;
        const matchesBrand = brand === 'All' || product.brand === brand;
        const matchesAvailability = availability === 'All' || product.availability === availability;
        const matchesPrice =
          priceRange === 'All' || (product.price >= ranges[priceRange][0] && product.price <= ranges[priceRange][1]);
        return matchesQuery && matchesCategory && matchesBrand && matchesAvailability && matchesPrice;
      })
      .sort((a, b) => {
        if (sort === 'Price low to high') return a.price - b.price;
        if (sort === 'Price high to low') return b.price - a.price;
        return Number(b.newest) - Number(a.newest);
      });
  }, [availability, brand, category, priceRange, query, sort]);

  const navigate = (page) => {
    setActivePage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setActivePage('Products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header activePage={activePage} navigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        {activePage === 'Home' && (
          <HomePage navigate={navigate} openProduct={openProduct} showPrices={showPrices} setShowPrices={setShowPrices} />
        )}
        {activePage === 'About Us' && <AboutPage navigate={navigate} />}
        {activePage === 'Products' && (
          <ProductsPage
            products={filteredProducts}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            showPrices={showPrices}
            setShowPrices={setShowPrices}
            query={query}
            setQuery={setQuery}
            category={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
            availability={availability}
            setAvailability={setAvailability}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sort={sort}
            setSort={setSort}
          />
        )}
        {activePage === 'Services' && <ServicesPage />}
        {activePage === 'Brands' && <BrandsPage openProduct={openProduct} />}
        {activePage === 'Promotions' && <PromotionsPage navigate={navigate} />}
        {activePage === 'Contact' && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

function Header({ activePage, navigate, mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      {/*<div className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-sky-300" /> Lusaka digital showroom and repair desk</span>
          <span className="flex items-center gap-4">
            <a className="top-link" href="tel:+260970000000"><FaPhoneAlt /> Call +260 970 000 000</a>
            <a className="top-link" href={`https://wa.me/${whatsappNumber}`}><FaWhatsapp /> WhatsApp</a>
          </span>
        </div>
      </div>*/}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('Home')} className="flex items-center gap-3 text-left" aria-label="Go to home page">
          {/*<span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-700 text-xl text-white shadow-lg shadow-blue-700/20">
            <FaMicrochip />
          </span>*/}
          <span>
            <span className="block text-2xl font-black tracking-tight text-[#1B2C5A]">TECHLINK</span>
            <span className="block text-[0.50rem] text-center font-semibold uppercase tracking-[0.16em] text-[#1B2C5A]">Electronics</span>
          </span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => navigate(item)}
              className={`nav-link ${activePage === item ? 'nav-link-active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button onClick={() => navigate('Products')} className="btn btn-soft"><FaSearch /> Browse</button>
          <a href={`https://wa.me/${whatsappNumber}`} className="btn btn-primary"><FaWhatsapp /> Enquire</a>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-300 text-slate-800 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl font-bold">{mobileOpen ? 'x' : '='}</span>
        </button>
      </nav>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => navigate(item)}
              className={`block w-full rounded-md px-3 py-3 text-left text-sm font-bold ${activePage === item ? 'bg-blue-50 text-blue-800' : 'text-slate-700'}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function HomePage({ navigate, openProduct, showPrices, setShowPrices }) {
  const featured = products.slice(0, 4);
  const latest = products.filter((product) => product.newest).slice(0, 4);

  return (
    <>
      <section className="hero-band">
        <div className="mx-auto grid min-h-162.5 max-w-7xl items-center gap-10 px-4 py-12 lg:py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="promo-pill"><FaStar /> Mid-year tech deals now available in-store</div>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shop the Latest Technology
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Browse premium smartphones, laptops, computers, CCTV, printers, and repair services from trusted brands with local Zambian support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate('Products')} className="btn btn-primary btn-large"><FaShoppingBag /> View products</button>
              <button onClick={() => navigate('Services')} className="btn btn-white btn-large"><FaTools /> Book repair</button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 text-sm text-slate-200">
              <Stat value="500+" label="Devices supplied" />
              <Stat value="24h" label="Quote response" />
              <Stat value="15+" label="Trusted brands" />
            </div>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Modern laptop workstation" className="hero-image" />
            {/*<div className="stock-badge">
              <FaCheckCircle className="text-emerald-400" />
              <span><strong>Ready stock</strong> for business, home, and school</span>
            </div>*/}
          </div>
        </div>
      </section>

      <SectionIntro eyebrow="Featured Products" title="Popular technology customers ask for first" action={<PriceToggle showPrices={showPrices} setShowPrices={setShowPrices} />} />
      <ProductGrid products={featured} openProduct={openProduct} showPrices={showPrices} />

      <SectionIntro eyebrow="Shop by Category" title="Find what you need fast" />
      <CategoryGrid />

      <section className="section-shell grid gap-5 lg:grid-cols-4">
        {[
          ['Genuine guidance', 'Clear advice for your budget, use case, warranty needs, and upgrade path.', FaShieldAlt],
          ['Fast local support', 'Repairs, installation, and after-sales support handled by technicians in Lusaka.', FaTools],
          ['Business ready', 'Quote-friendly procurement for offices, schools, retailers, and growing teams.', FaTruck],
          ['Easy enquiry', 'WhatsApp, calls, forms, and product quote requests are one tap away.', FaWhatsapp],
        ].map(([title, text, Icon]) => (
          <div className="feature-card" key={title}>
            <Icon className="feature-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <SectionIntro eyebrow="Featured Brands" title="Authorised-quality technology from names customers trust" />
      <BrandStrip />

      <SectionIntro eyebrow="Latest Arrivals" title="Fresh stock and quote-ready products" />
      <ProductGrid products={latest} openProduct={openProduct} showPrices={showPrices} />

      <Testimonials />
      <PromotionsPreview navigate={navigate} />
      <RepairHighlight navigate={navigate} />
      <ContactPage compact />
    </>
  );
}

function ProductsPage(props) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const related = products
    .filter((product) => product.id !== props.selectedProduct.id && product.category === props.selectedProduct.category)
    .concat(products.filter((product) => product.id !== props.selectedProduct.id))
    .slice(0, 3);

  return (
    <div className="page-shell">
      <PageHero eyebrow="Digital showroom" title="Products" text="Search, filter, compare, and request a quote for the devices and systems your home, school, or business needs." />
      <div className="product-layout">
        <aside className="filter-panel">
          <label className="field-label" htmlFor="product-search">Search products</label>
          <div className="search-box">
            <FaSearch />
            <input id="product-search" value={props.query} onChange={(event) => props.setQuery(event.target.value)} placeholder="Search by product, brand, or spec" />
          </div>
          <button className="filter-toggle" type="button" onClick={() => setFiltersOpen(!filtersOpen)}>
            <span>Filters and sorting</span>
            <span>{filtersOpen ? 'Hide' : 'Show'}</span>
          </button>
          <div className={`filter-fields ${filtersOpen ? 'filter-fields-open' : ''}`}>
            <Select label="Category" value={props.category} onChange={props.setCategory} options={['All', ...categories.map((item) => item.name)]} />
            <Select label="Brand" value={props.brand} onChange={props.setBrand} options={['All', ...brands.map((item) => item.name)]} />
            <Select label="Price range" value={props.priceRange} onChange={props.setPriceRange} options={['All', 'Under K5,000', 'K5,000 - K15,000', 'Above K15,000']} />
            <Select label="Availability" value={props.availability} onChange={props.setAvailability} options={['All', 'In Stock', 'Out of Stock']} />
            <Select label="Sort" value={props.sort} onChange={props.setSort} options={['Newest', 'Price low to high', 'Price high to low']} />
            <PriceToggle showPrices={props.showPrices} setShowPrices={props.setShowPrices} />
          </div>
        </aside>

        <section className="product-results">
          <ProductDetail product={props.selectedProduct} showPrices={props.showPrices} />
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Browse catalogue</p>
              <h2 className="section-title">{props.products.length} matching products</h2>
            </div>
          </div>
          <ProductGrid products={props.products} openProduct={props.setSelectedProduct} showPrices={props.showPrices} />
          <SectionIntro eyebrow="Related Products" title="Customers also compare these" />
          <ProductGrid products={related} openProduct={props.setSelectedProduct} showPrices={props.showPrices} compact />
        </section>
      </div>
    </div>
  );
}

function ProductDetail({ product, showPrices }) {
  return (
    <article className="detail-panel">
      <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <img src={product.images[0]} alt={product.name} className="detail-image" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {product.images.map((image, idx) => (
              <img key={`${product.id}-${idx}`} src={image} alt={`${product.name} preview`} className="thumb-image" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`status-pill ${product.availability === 'In Stock' ? 'status-in' : 'status-out'}`}>{product.availability}</span>
            <span className="brand-pill">{product.brand}</span>
            <span className="brand-pill">{product.category}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">{product.name}</h2>
          <p className="mt-3 text-slate-600">{product.description}</p>
          <p className="mt-5 text-3xl font-black text-blue-800">{showPrices ? formatPrice(product.price) : 'Price on request'}</p>
          <p className="mt-2 text-sm font-semibold text-slate-500">{product.warranty}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <span key={spec} className="spec-item"><FaCheckCircle /> {spec}</span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`https://wa.me/${whatsappNumber}?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}><FaWhatsapp /> WhatsApp enquiry</a>
            <a className="btn btn-soft" href={`mailto:sales@techhubzambia.co.zm?subject=Request%20quote:%20${encodeURIComponent(product.name)}`}><MdEmail /> Request quote</a>
            <button
              className="btn btn-outline"
              onClick={() => navigator.share?.({ title: product.name, text: product.description, url: window.location.href })}
            >
              Share product
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ products: list, openProduct, showPrices, compact = false }) {
  if (!list.length) {
    return <div className="empty-state">No products match your current filters. Try clearing a filter or sending a quote request.</div>;
  }

  return (
    <div className={`section-shell grid gap-5 ${compact ? 'md:grid-cols-3' : 'sm:grid-cols-2 xl:grid-cols-4'}`}>
      {list.map((product) => (
        <article key={product.id} className="product-card">
          <button onClick={() => openProduct(product)} className="block w-full text-left" aria-label={`View ${product.name}`}>
            <img src={product.images[0]} alt={product.name} className="product-image" loading="lazy" />
            <div className="mt-4 flex items-center justify-between gap-2">
              <span className="brand-pill">{product.brand}</span>
              <span className={`status-dot ${product.availability === 'In Stock' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
            </div>
            <h3 className="mt-3 min-h-14 text-lg font-black leading-tight text-slate-950">{product.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <strong className="text-xl text-blue-800">{showPrices ? formatPrice(product.price) : 'Quote'}</strong>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{product.availability}</span>
            </div>
          </button>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a className="mini-btn mini-primary" href={`https://wa.me/${whatsappNumber}?text=I%20need%20details%20for%20${encodeURIComponent(product.name)}`}><FaWhatsapp /> Enquire</a>
            <a className="mini-btn" href={`mailto:sales@techhubzambia.co.zm?subject=Request%20quote:%20${encodeURIComponent(product.name)}`}>Quote</a>
          </div>
        </article>
      ))}
    </div>
  );
}

function AboutPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="About TechHub Zambia" title="Local electronics retail with serious after-sales support" text="We help customers buy the right devices, keep them running, and plan future upgrades without friction." />
      <section className="section-shell grid gap-8 lg:grid-cols-2">
        <div>
          <p className="content-text">
            TechHub Zambia is designed as a trusted local destination for smartphones, laptops, computers, printers, networking, CCTV, components, and repair services. The showroom experience focuses on clear categories, transparent quotes, reliable warranties, and quick WhatsApp support.
          </p>
          <p className="content-text mt-4">
            The platform is also ready for future Firebase-powered administration, including product, category, brand, banner, enquiry, repair request, promotion, and testimonial management.
          </p>
          <button onClick={() => navigate('Contact')} className="btn btn-primary mt-6"><MdEmail /> Talk to sales</button>
        </div>
        <div className="admin-panel">
          <p className="eyebrow">Future admin dashboard</p>
          <h2 className="section-title">Firebase-ready business controls</h2>
          {['Firebase Authentication for staff login', 'Cloud Firestore collections for catalogue data', 'Firebase Storage for product images and banners', 'Firebase Hosting deployment path'].map((item) => (
            <div className="admin-row" key={item}><FaCheckCircle /> {item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Repair and installation" title="Professional Services" text="Book reliable support for devices, printers, CCTV systems, software, networks, and data recovery." />
      <ServiceGrid />
    </div>
  );
}

function ServiceGrid() {
  return (
    <section className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, icon: Icon, time, text }) => (
        <article className="service-card" key={title}>
          <Icon className="service-icon" />
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="turnaround">{time}</span>
            <a className="mini-btn mini-primary" href={`https://wa.me/${whatsappNumber}?text=I%20want%20to%20book%20${encodeURIComponent(title)}`}>Book a Service</a>
          </div>
        </article>
      ))}
    </section>
  );
}

function BrandsPage({ openProduct }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Brands" title="Explore trusted manufacturers" text="Dedicated brand sections help customers browse the product families and support options they already know." />
      <section className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map(({ name, icon: Icon, focus }) => (
          <article className="brand-card" id={slugify(name)} key={name}>
            <Icon className="brand-logo" />
            <h3>{name}</h3>
            <p>{focus}</p>
            <button
              className="mini-btn mt-5"
              onClick={() => {
                const match = products.find((product) => product.brand === name) || products[0];
                openProduct(match);
              }}
            >
              View products
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

function PromotionsPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Promotions" title="Deals, bundles, and limited-time offers" text="Use promotions to highlight new arrivals, student bundles, weekly specials, clearance sales, and in-store offers." />
      <section className="section-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {promotions.map((promo) => (
          <article className="promo-card" key={promo.title}>
            <span>{promo.tag}</span>
            <h3>{promo.title}</h3>
            <p>{promo.text}</p>
            <button onClick={() => navigate('Contact')} className="mini-btn mini-primary mt-5">Claim offer</button>
          </article>
        ))}
      </section>
    </div>
  );
}

function ContactPage({ compact = false }) {
  return (
    <section className={compact ? 'section-shell' : 'page-shell'}>
      {!compact && <PageHero eyebrow="Contact" title="Visit, call, WhatsApp, or send an enquiry" text="Customers can contact sales, request quotes, book repairs, and view the store location from one place." />}
      {compact && <SectionIntro eyebrow="Contact and Location" title="Ready to enquire or visit the store?" />}
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Full name" placeholder="Your name" />
            <Input label="Phone number" placeholder="+260..." />
          </div>
          <Input label="Email address" placeholder="you@example.com" type="email" />
          <label className="field-label" htmlFor="message">Message</label>
          <textarea id="message" className="input min-h-36 resize-y" placeholder="Tell us what product, quote, or service you need." />
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary" type="submit"><MdEmail /> Send enquiry</button>
            <a className="btn btn-soft" href={`https://wa.me/${whatsappNumber}`}><FaWhatsapp /> WhatsApp us</a>
            <a className="btn btn-outline" href="tel:+260970000000"><FaPhoneAlt /> Call now</a>
          </div>
        </form>
        <div className="space-y-5">
          <div className="contact-card">
            <h3>TECHLINK Electronics Showroom</h3>
            <p><FaMapMarkerAlt /> Cairo Road, Lusaka, Zambia</p>
            <p><FaPhoneAlt /> +260 970 000 000</p>
            <p><MdEmail /> sales@techlinkzambia.co.zm</p>
            <p><FaCheckCircle /> Monday - Saturday, 08:00 - 18:00</p>
          </div>
          <iframe
            title="Google Maps location for Lusaka"
            className="map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Lusaka%20Zambia&output=embed"
          />
          <Newsletter />
        </div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map(({ name, icon: Icon }) => (
        <article className="category-card" key={name}>
          <Icon />
          <h3>{name}</h3>
        </article>
      ))}
    </section>
  );
}

function BrandStrip() {
  return (
    <section className="section-shell grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {brands.slice(0, 10).map(({ name, icon: Icon }) => (
        <div className="brand-tile" key={name}><Icon /> <span>{name}</span></div>
      ))}
    </section>
  );
}

function Testimonials() {
  return (
    <>
      <SectionIntro eyebrow="Customer Reviews" title="Trusted by buyers, students, and business teams" />
      <section className="section-shell grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <FaQuoteRight className="text-sky-600" />
            <p>{testimonial.quote}</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </article>
        ))}
      </section>
    </>
  );
}

function PromotionsPreview({ navigate }) {
  return (
    <section className="section-shell promo-band">
      <div>
        <p className="eyebrow text-sky-200">Current promotions</p>
        <h2 className="text-3xl font-black tracking-tight text-white">Weekly specials, student bundles, and clearance deals</h2>
        <p className="mt-3 max-w-2xl text-slate-200">Highlight fast-moving stock and in-store offers without needing checkout on day one.</p>
      </div>
      <button onClick={() => navigate('Promotions')} className="btn btn-white">View promotions</button>
    </section>
  );
}

function RepairHighlight({ navigate }) {
  return (
    <section className="section-shell repair-band">
      <div>
        <p className="eyebrow">Repair desk</p>
        <h2 className="section-title">Laptop, phone, printer, CCTV, and network support</h2>
        <p className="content-text">Book a diagnostic, request turnaround time, and receive clear service updates by phone or WhatsApp.</p>
      </div>
      <button onClick={() => navigate('Services')} className="btn btn-primary">Book a Service</button>
    </section>
  );
}

function Newsletter() {
  return (
    <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
      <div>
        <h3>Subscribe for arrivals and offers</h3>
        <p>Get product drops, student bundles, and repair promotions.</p>
      </div>
      <div className="flex gap-2">
        <input className="input" type="email" placeholder="Email address" aria-label="Email address" />
        <button className="btn btn-primary" type="submit">Subscribe</button>
      </div>
    </form>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-xl font-black">TECHLINK ELECTRONICS</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Premium electronics, devices, repairs, and installations for local customers and businesses.</p>
          <div className="mt-4 flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => <a key={index} className="social-link" href="https://example.com" aria-label="Social link"><Icon /></a>)}
          </div>
        </div>
        <FooterLinks title="Quick links" items={navItems} navigate={navigate} />
        <FooterLinks title="Categories" items={categories.slice(0, 6).map((item) => item.name)} navigate={() => navigate('Products')} />
        <div>
          <h3 className="footer-title">Contact</h3>
          <p className="footer-line">Cairo Road, Lusaka</p>
          <p className="footer-line">+260 970 000 000</p>
          <p className="footer-line">sales@techhubzambia.co.zm</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        Designed for Firebase Authentication, Cloud Firestore, Firebase Storage, and Firebase Hosting expansion.
      </div>
    </footer>
  );
}

function FooterLinks({ title, items, navigate }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <div className="mt-3 space-y-2">
        {items.map((item) => <button key={item} onClick={() => navigate(item)} className="block text-sm text-slate-300 hover:text-white">{item}</button>)}
      </div>
    </div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <p className="eyebrow text-sky-200">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function SectionIntro({ eyebrow, title, action }) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {action}
    </div>
  );
}

function PriceToggle({ showPrices, setShowPrices }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={showPrices} onChange={() => setShowPrices(!showPrices)} />
      <span />
      Show prices
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <select className="input" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function Input({ label, type = 'text', placeholder }) {
  const id = label.toLowerCase().replaceAll(' ', '-');
  return (
    <label className="block" htmlFor={id}>
      <span className="field-label">{label}</span>
      <input id={id} className="input" type={type} placeholder={placeholder} />
    </label>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <strong className="block text-2xl font-black text-white">{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default App;
