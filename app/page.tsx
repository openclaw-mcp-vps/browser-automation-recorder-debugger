export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Browser Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record Actions.{" "}
          <span className="text-[#58a6ff]">Debug Failures.</span>{" "}
          Ship Faster.
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          AutoRec captures every click, input, and navigation in your browser, then generates clean automation scripts with AI-powered failure analysis so you fix bugs in minutes, not hours.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recording — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required for trial.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Playwright & Puppeteer output", "AI failure analysis", "Step-by-step debugger", "Selector healing", "CI/CD ready exports"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Install Extension", desc: "Add the AutoRec browser extension and start recording any workflow with one click." },
            { step: "02", title: "Generate Script", desc: "AutoRec converts your actions into a clean, readable Playwright or Puppeteer script instantly." },
            { step: "03", title: "Debug with AI", desc: "When a script fails, AI pinpoints the root cause and suggests a targeted fix." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-mono text-xs mb-2">{item.step}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited recordings",
              "Playwright & Puppeteer export",
              "AI failure analysis",
              "Selector auto-healing",
              "Team sharing (up to 5 seats)",
              "Priority support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which browsers and frameworks are supported?",
              a: "AutoRec works with Chrome and Edge. It exports scripts for Playwright (TypeScript/JavaScript) and Puppeteer, with Selenium support coming soon."
            },
            {
              q: "How does the AI failure analysis work?",
              a: "When a script run fails, AutoRec captures the error, the DOM snapshot, and the network log, then uses AI to identify the root cause and suggest a concrete fix — usually a selector update or a timing adjustment."
            },
            {
              q: "Can I use AutoRec in my CI/CD pipeline?",
              a: "Yes. Every generated script is a standard file you can commit to your repo and run in any CI environment. AutoRec also provides a CLI for triggering runs and fetching results programmatically."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} AutoRec. All rights reserved.
      </footer>
    </main>
  );
}
