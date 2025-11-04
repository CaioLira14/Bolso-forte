import { motion } from "framer-motion"; import { ShoppingCart, TrendingUp, Wallet } from "lucide-react";

export default function App() { const PRODUCTS = [ { name: "Guia Rápido de Finanças Pessoais", price: "R$49,90", description: "Aprenda os princípios básicos para controlar seu dinheiro e multiplicar sua renda.", icon: Wallet, link: "https://wa.me/5511999999999?text=Quero%20comprar%20o%20Guia%20de%20Finanças%20Pessoais!", }, { name: "Mini Curso: Investindo do Zero", price: "R$89,90", description: "Descubra como começar a investir com pouco dinheiro e alcançar liberdade financeira.", icon: TrendingUp, link: "https://wa.me/5511999999999?text=Quero%20comprar%20o%20curso%20Investindo%20do%20Zero!", }, { name: "Planilha Bolso Forte (Premium)", price: "R$29,90", description: "Organize seus gastos, defina metas e visualize sua evolução financeira com esta planilha exclusiva.", icon: ShoppingCart, link: "https://wa.me/5511999999999?text=Quero%20comprar%20a%20Planilha%20Bolso%20Forte!", }, ];

return ( <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6"> <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-center mb-8 text-amber-400" > 💰 Bolso Forte </motion.h1>

<motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-gray-300 text-center max-w-md mb-10"
  >
    Domine suas finanças e conquiste liberdade. Escolha seu produto abaixo e comece agora.
  </motion.p>

  <div className="grid gap-6 max-w-md w-full">
    {PRODUCTS.map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + i * 0.1 }}
        className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col border border-gray-700 hover:border-amber-400 transition-all"
      >
        <div className="flex items-center gap-3 mb-3">
          <p.icon className="text-amber-400 w-6 h-6" />
          <h2 className="text-xl font-semibold">{p.name}</h2>
        </div>
        <p className="text-gray-400 mb-4">{p.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-amber-400">{p.price}</span>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-amber-300 transition"
          >
            Comprar
          </a>
        </div>
      </motion.div>
    ))}
  </div>

  <footer className="mt-10 text-gray-500 text-sm text-center">
    © 2025 Bolso Forte — Educação Financeira para Todos.
  </footer>
</div>

); }
