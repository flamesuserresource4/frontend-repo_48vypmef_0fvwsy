import { Presentation, Printer, Code2, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Pembuatan Presentasi",
    desc: "Desain PPT profesional dengan alur cerita yang jelas dan visual yang kuat.",
    icon: Presentation,
    colorBox: "bg-blue-100 text-blue-700",
    glow: "from-blue-50/40",
    items: ["Template kustom", "Copywriting & storytelling", "Desain grafis & infografis"],
  },
  {
    title: "Percetakan",
    desc: "Hasil cetak tajam dan akurat untuk semua kebutuhan promosi Anda.",
    icon: Printer,
    colorBox: "bg-purple-100 text-purple-700",
    glow: "from-purple-50/40",
    items: ["Kartu nama & brosur", "Poster & banner", "Packaging & stiker"],
  },
  {
    title: "Software Development",
    desc: "Bangun solusi digital yang scalable dan elegan untuk bisnis Anda.",
    icon: Code2,
    colorBox: "bg-emerald-100 text-emerald-700",
    glow: "from-emerald-50/40",
    items: ["Website perusahaan", "Sistem internal", "Integrasi API & otomasi"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Layanan Komprehensif untuk Kebutuhan Bisnis Anda
          </h2>
          <p className="mt-4 text-gray-600">
            Kami memadukan kreativitas, ketepatan produksi, dan keahlian teknis untuk memberikan hasil terbaik.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${s.colorBox}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>

              <ul className="mt-4 space-y-2">
                {s.items.map((it, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> {it}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a href="#contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">Konsultasikan kebutuhan →</a>
              </div>

              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${s.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
