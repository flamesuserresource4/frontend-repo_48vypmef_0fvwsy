import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-bold">Flames Agency</p>
            <p className="text-sm text-gray-600 mt-2">
              Partner kreatif dan teknologi untuk presentasi, percetakan, dan software development.
            </p>
          </div>
          <div>
            <p className="font-semibold">Kontak</p>
            <div className="mt-3 space-y-2 text-sm text-gray-700" id="contact">
              <a href="mailto:hello@flamesagency.com" className="flex items-center gap-2 hover:text-blue-600">
                <Mail className="h-4 w-4" /> hello@flamesagency.com
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-2 hover:text-blue-600">
                <Phone className="h-4 w-4" /> +62 812-3456-7890
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold">Jam Operasional</p>
            <p className="text-sm text-gray-600 mt-3">Senin - Sabtu, 09.00 - 18.00 WIB</p>
            <a href="#services" className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">Lihat layanan lengkap →</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Flames Agency. All rights reserved.</p>
          <div className="mt-3 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gray-700">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-700">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
