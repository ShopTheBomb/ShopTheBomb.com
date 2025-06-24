export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A2E] via-[#1A1A2E] to-[#FF3B30] text-white">
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-bounce">
          💥 ShopTheBomb.com 💥
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          100% American-Made. 100% Bomb Deals.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
          Start Shopping
        </button>
        <div className="mt-10">
          <p className="text-sm">🎆 Fast U.S. Shipping · 🇺🇸 Small Business Support · 😎 Trendy AF</p>
        </div>
      </section>

      <section className="py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Apparel', icon: '👕' },
          { name: 'Home Goods', icon: '🏠' },
          { name: 'Accessories', icon: '🎒' },
          { name: 'Gifts', icon: '🎁' },
          { name: 'Tech Stuff', icon: '🔌' },
          { name: 'Drops', icon: '🔥' },
        ].map((cat) => (
          <div key={cat.name} className="bg-white text-black p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <p className="text-4xl mb-2">{cat.icon}</p>
            <h3 className="text-xl font-bold">{cat.name}</h3>
          </div>
        ))}
      </section>

      <section className="py-16 px-4 bg-[#FFD700] text-black text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          🎇 Limited Time Drops
        </h2>
        <p className="mb-4">Get in before it's gone! New USA-made goods every week.</p>
        <div className="bg-white rounded-xl p-4 inline-block">
          <p className="text-2xl font-mono">⏳ Drop ends in: 02:14:37</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#1A1A2E] text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Shop With Us?</h2>
        <ul className="space-y-3 text-lg">
          <li>🇺🇸 100% American Products</li>
          <li>💥 Small Business Support</li>
          <li>🚚 Fast Shipping from the U.S.A.</li>
          <li>😎 Gen Z & Millennial Friendly</li>
        </ul>
      </section>

      <footer className="text-center py-6 bg-black text-white">
        <p className="text-sm">© 2025 ShopTheBomb.com · Built for America 💣</p>
      </footer>
    </main>
  );
}