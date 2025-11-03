import { Rocket, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Brief & Riset",
    desc: "Kami memahami kebutuhan, audiens, dan tujuan bisnis Anda.",
  },
  {
    title: "Desain & Pengembangan",
    desc: "Tim kami membuat konsep visual, prototipe, dan pengembangan.",
  },
  {
    title: "Revisi Cepat",
    desc: "Perbaikan berbasis feedback hingga Anda benar-benar puas.",
  },
  {
    title: "Delivery & Support",
    desc: "File siap pakai, cetak, atau go-live dengan dukungan purna jual.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-flex items-center text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full mb-4">Cara kerja</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Proses yang Rapi, Hasil yang Rapi Juga
            </h2>
            <p className="mt-4 text-gray-600">
              Kolaborasi transparan dari awal hingga akhir, memastikan proyek berjalan tepat waktu dan sesuai ekspektasi.
            </p>

            <div className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-emerald-700 font-medium">
              Mulai proyek sekarang <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/40 to-emerald-100/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="rounded-2xl bg-gray-900 p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-semibold">Project Dashboard</p>
                    <p className="text-xs text-gray-400 -mt-1">Preview progres real-time</p>
                  </div>
                </div>
                <div className="mt-5 text-sm text-gray-300 space-y-2">
                  <p>• Timeline terstruktur</p>
                  <p>• File & revisi terdokumentasi</p>
                  <p>• Akses aman untuk tim Anda</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600" />
                <div className="h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600" />
                <div className="h-28 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
