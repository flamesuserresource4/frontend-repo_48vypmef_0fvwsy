import { Rocket, Phone, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Rocket className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">Flames Agency</p>
            <p className="text-xs text-gray-500 -mt-1">Present. Print. Build.</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-gray-600 hover:text-gray-900">Layanan</a>
          <a href="#process" className="text-gray-600 hover:text-gray-900">Proses</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Kontak</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Konsultasi Gratis
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-6 pb-20 pt-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-4">Agency presentasi • Percetakan • Software</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Ubah Ide Menjadi <span className="text-blue-600">Karya</span> yang Mengesankan
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Kami membantu bisnis Anda tampil profesional dengan presentasi yang memukau, percetakan berkualitas, dan solusi software yang dapat diandalkan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Lihat Layanan
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-5 py-3 rounded-xl hover:bg-gray-50">
              <Phone className="h-5 w-5" /> Hubungi Kami
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Respon cepat <span className="text-gray-400">•</span> Garansi puas
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-purple-200/50 rounded-3xl blur-3xl" />
          <div className="relative bg-white/60 backdrop-blur rounded-3xl border border-white/60 shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">Pembuatan PPT</p>
                <p className="text-xs text-blue-600/80 mt-1">Template kustom & storytelling</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <p className="text-sm text-purple-700 font-medium">Percetakan</p>
                <p className="text-xs text-purple-600/80 mt-1">Kartu nama, brosur, banner</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <p className="text-sm text-emerald-700 font-medium">Software Dev</p>
                <p className="text-xs text-emerald-600/80 mt-1">Web & aplikasi bisnis</p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <p className="text-sm text-amber-700 font-medium">Cepat & Tepat</p>
                <p className="text-xs text-amber-600/80 mt-1">Deadline terjaga</p>
              </div>
            </div>

            <div id="contact" className="mt-6 rounded-2xl border border-gray-200 p-4 bg-white">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Konsultasi Proyek</p>
                  <p className="text-xs text-gray-500">hello@flamesagency.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
