import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Dedication() {
  return (
    <section id="dedication" className="py-20 bg-custom-bg relative overflow-hidden border-t border-black/10 dark:border-white/10" dir="rtl">
      {/* Soft background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Card Wrapper */}
        <div className="bg-card-bg border border-primary/20 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
          
          {/* Decorative Corner Icons */}
          <div className="absolute top-6 left-6 text-primary/20 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-6 right-6 text-primary/20 animate-pulse delay-700">
            <Star className="w-8 h-8" />
          </div>

          {/* Heart Badge */}
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Heart className="w-8 h-8 text-primary fill-primary/20" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-black text-text-dark mb-4 tracking-wide">
            باقة إهداء وتقدير
          </h2>
          
          {/* Poetic Subtitle */}
          <p className="text-sm md:text-base text-text-grey font-semibold italic max-w-2xl mx-auto mb-10 leading-relaxed">
            "إلى الذين غمرونا بدعواتهم الصادقة في ظلمات الليالي، وإلى من بذلوا الغالي والنفيس لنقف اليوم شاماتٍ بالعلم والنجاح..."
          </p>

          {/* Dedication Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            
            {/* Mothers */}
            <div className="bg-custom-bg/60 border border-black/5 dark:border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-primary/20 shadow-md">
              <h3 className="font-extrabold text-base text-primary mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                أمهاتنا الغاليات
              </h3>
              <p className="text-xs text-text-grey font-semibold leading-relaxed">
                نبع الحنان الدائم ودعاء السفر المستمر الذي رافق خطانا وأنار دروبنا بالدفء والأمل في كل خطوة.
              </p>
            </div>

            {/* Fathers */}
            <div className="bg-custom-bg/60 border border-black/5 dark:border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-primary/20 shadow-md">
              <h3 className="font-extrabold text-base text-primary mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                آبائنا الأفاضل
              </h3>
              <p className="text-xs text-text-grey font-semibold leading-relaxed">
                سندنا الراسخ وقدوتنا الأولى، من علمونا أن التميّز لا يُنال إلا بالجد والاجتهاد، ودفعوا بنا دائماً نحو القمة.
              </p>
            </div>

            {/* Families & Siblings */}
            <div className="bg-custom-bg/60 border border-black/5 dark:border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-primary/20 shadow-md">
              <h3 className="font-extrabold text-base text-primary mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                إخوتنا وعائلاتنا
              </h3>
              <p className="text-xs text-text-grey font-semibold leading-relaxed">
                من تقاسموا معنا عناء السهر وتفاصيل الرحلة الطويلة، وكانوا ملاذنا الآمن ومصدر تشجيعنا الدائم.
              </p>
            </div>

            {/* Teachers */}
            <div className="bg-custom-bg/60 border border-black/5 dark:border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-primary/20 shadow-md">
              <h3 className="font-extrabold text-base text-primary mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                أساتذتنا الأجلاء
              </h3>
              <p className="text-xs text-text-grey font-semibold leading-relaxed">
                أصحاب العطاء اللامحدود، من أضاؤوا لنا شموع المعرفة ومهدوا لنا طريق التميّز والنجاح بنصحهم وعلمهم القَيّم.
              </p>
            </div>

          </div>

          {/* Closure sentence */}
          <p className="text-xs text-text-grey font-bold mt-10 opacity-70">
            لكم جميعاً منا كل الحب والامتنان والوفاء.
          </p>

        </div>

      </div>
    </section>
  );
}
