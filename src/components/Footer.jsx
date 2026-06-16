import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-custom-bg text-text-grey pt-16 pb-8 border-t border-black/10 dark:border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand column */}
        <div className="flex flex-col items-start text-right">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" className="h-10 w-auto" alt="EduBridge Logo" />
          </div>
          <p className="text-text-grey text-sm leading-relaxed mb-6 font-semibold">
            منظومة رقمية رائدة تربط أركان التعليم، تم تصميمها وتطويرها كشاهد على دمج قوة Laravel لخدمات الويب وتطبيق الموبايل الموثوق بـ Flutter.
          </p>

        </div>

        {/* Links column */}
        <div className="text-right">
          <h4 className="text-lg font-extrabold mb-6 text-text-dark border-r-4 border-primary pr-3">روابط سريعة</h4>
          <ul className="space-y-3 font-semibold text-text-grey text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">عن المنصة</a></li>
            <li><a href="#audience" className="hover:text-primary transition-colors">الفئات المستهدفة</a></li>
            <li><a href="#features" className="hover:text-primary transition-colors">ميزات النظام</a></li>
            <li><a href="#demo" className="hover:text-primary transition-colors">المحاكي التفاعلي</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="text-right">
          <h4 className="text-lg font-extrabold mb-6 text-text-dark border-r-4 border-primary pr-3">معلومات التواصل</h4>
          <ul className="space-y-4 font-semibold text-text-grey text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span>سوريا، دمشق</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <span>mghannam954@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span dir="ltr">+963 997 685 906</span>
            </li>
          </ul>
        </div>

        {/* Graduation Project details column */}
        <div className="text-right">
          <h4 className="text-lg font-extrabold mb-6 text-text-dark border-r-4 border-primary pr-3">مشروع تخرج</h4>
          <div className="bg-card-bg p-5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 text-primary mb-3">
              <GraduationCap className="w-5 h-5" />
              <span className="font-extrabold text-sm text-text-dark">طوِّرَ هذا المشروع لـ:</span>
            </div>
            <p className="text-xs text-text-grey leading-relaxed font-semibold">
              تم تطوير هذا النظام كلياً للوفاء بمتطلبات التخرج وتجسيد الحلول البرمجية العملية لمشاكل المجتمع المحلي.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-black/10 dark:border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-text-grey font-semibold gap-4">
        <div>
          <span>جميع الحقوق محفوظة © {currentYear} لمنصة </span>
          <span className="text-primary font-bold">Edu Bridge</span>
        </div>
        <div className="flex gap-4">
          <span>تم التطوير بكل شغف ❤️</span>
        </div>
      </div>
    </footer>
  );
}
