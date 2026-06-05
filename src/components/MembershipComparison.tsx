export default function MembershipComparison() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Compare Plans</p>
          <h2 className="mt-3 text-2xl font-bold text-white">Choose the tier that matches your goals</h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full table-fixed text-sm">
            <thead>
              <tr className="bg-[#0b0b0b]">
                <th className="w-1/3 p-4 text-left text-slate-400">Features</th>
                <th className="p-4 text-center text-white">Basic</th>
                <th className="p-4 text-center bg-brand-gold text-black font-semibold">Premium</th>
                <th className="p-4 text-center text-white">Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/6">
                <td className="p-4 text-slate-300">Gym Access</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-t border-white/6">
                <td className="p-4 text-slate-300">Diet Guidance</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-t border-white/6">
                <td className="p-4 text-slate-300">Personal Training</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓ (add-on)</td>
                <td className="p-4 text-center">Weekly</td>
              </tr>
              <tr className="border-t border-white/6">
                <td className="p-4 text-slate-300">Recovery Therapy</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-t border-white/6">
                <td className="p-4 text-slate-300">Price (monthly)</td>
                <td className="p-4 text-center">₹3,499</td>
                <td className="p-4 text-center font-bold bg-brand-gold text-black">₹9,999</td>
                <td className="p-4 text-center">₹22,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
