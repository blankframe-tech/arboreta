export default function HomePage() {
  const categories = [
    { id: 'seeds', label: 'Seeds', icon: '🌱' },
    { id: 'flowers', label: 'Flower Trees', icon: '🌸' },
    { id: 'seasonal', label: 'Seasonal', icon: '🍂' },
    { id: 'bonsai', label: 'Bonsais', icon: '🌲' },
    { id: 'fruit', label: 'Fruit Trees', icon: '🥭' },
    { id: 'fertilizers', label: 'Fertilizers', icon: '🧪' },
    { id: 'office', label: 'Office Plants', icon: '🪴' },
  ];

  const featuredPlants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      latinName: 'Variegata',
      price: 45000,
      image: '🪨',
      rarity: 'Rare',
    },
    {
      id: 2,
      name: 'Japanese Black Pine',
      latinName: 'Bonsai Specimen',
      price: 120000,
      image: '🌲',
      rarity: 'Ultra-rare',
    },
    {
      id: 3,
      name: 'Corpse Flower',
      latinName: 'Amorphophallus titanium',
      price: 35000,
      image: '🌺',
      rarity: 'Ultra-rare',
    },
    {
      id: 4,
      name: 'Dragon Fruit Tree',
      latinName: 'Hylocereus',
      price: 18000,
      image: '🐉',
      rarity: 'Rare',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest-700 to-forest-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-700 via-sage-400 to-forest-700" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-7xl text-cream-50 font-display font-bold mb-6 leading-tight">
            Cultivate the<br />
            <span className="text-gold-300">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-cream-100 font-body mb-8 opacity-90">
            Curated botanical specimens for the discerning collector
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Explore Our Collection
          </button>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-display font-bold mb-16 text-forest-700">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="flex flex-col items-center p-6 rounded-lg bg-white card-shadow hover:bg-cream-100 transition-smooth group"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-center font-body text-sm font-600 text-forest-700">
                  {cat.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rarest Finds */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-forest-700 mb-4">
              This Month's Rarest Finds
            </h2>
            <p className="text-lg text-charcoal/60 font-body">
              Hand-selected specimens for the collector's garden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlants.map((plant) => (
              <a
                key={plant.id}
                href={`/products/${plant.id}`}
                className="group flex flex-col card-shadow rounded-lg overflow-hidden hover:shadow-card-hover transition-smooth"
              >
                {/* Image Area */}
                <div className="relative h-80 bg-gradient-to-b from-sage-200 to-cream-100 flex items-center justify-center overflow-hidden">
                  <span className="text-8xl group-hover:scale-110 transition-transform">
                    {plant.image}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between bg-cream-50">
                  <div>
                    <h3 className="text-xl font-display font-bold text-forest-700 mb-1">
                      {plant.name}
                    </h3>
                    <p className="text-sm font-accent italic text-charcoal/60 mb-4">
                      {plant.latinName}
                    </p>
                    <div className="flex gap-2 mb-6">
                      <span className="text-xs uppercase tracking-widest font-body font-600 px-2 py-1 rounded-xs bg-terracotta/20 text-terracotta">
                        {plant.rarity}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-display text-gold-400 font-bold">
                      ৳ {plant.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-6 pt-6 border-t border-cream-200">
                    <button className="flex-1 py-2 px-4 bg-forest-700 text-cream-50 rounded-xs font-body font-600 text-sm hover:bg-forest-800 transition-smooth">
                      Add to Cart
                    </button>
                    <button className="py-2 px-4 border border-forest-700 text-forest-700 rounded-xs font-body font-600 text-sm hover:bg-forest-50 transition-smooth">
                      ♡
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-forest-700 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-display font-bold mb-12">
            Why Collectors Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-display text-2xl mb-3">Curated Selection</h3>
              <p className="text-cream-100/80 font-body">
                Every plant is hand-selected for health, rarity, and beauty
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-display text-2xl mb-3">Ethically Sourced</h3>
              <p className="text-cream-100/80 font-body">
                Sourced from sustainable nurseries and expert growers worldwide
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-display text-2xl mb-3">Expert Care Guides</h3>
              <p className="text-cream-100/80 font-body">
                Detailed care instructions and botanical knowledge included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-forest-700 mb-6">
            Get Monthly Curator's Picks
          </h2>
          <p className="text-lg text-charcoal/60 font-body mb-8">
            Receive exclusive access to rare specimens and expert care tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white border border-forest-400 rounded-xs focus:outline-none focus:border-gold-300 placeholder:italic placeholder:text-charcoal/40"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
