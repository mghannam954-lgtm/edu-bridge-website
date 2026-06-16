import React from 'react';
import { ArrowLeft, Smartphone, Laptop, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-custom-bg via-custom-bg to-primary/5" dir="rtl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-right">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-6 animate-bounce">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>مشروع التخرج المتميز 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textDark leading-tight mb-6">
            منصة <span className="text-primary">Edu Bridge</span> المتكاملة 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent-light">
              جسر التواصل التعليمي الذكي
            </span>
          </h1>
          
          <p className="text-lg text-text-grey font-medium leading-relaxed max-w-2xl mb-8">
            منظومة رقمية آمنة تربط أركان العملية التعليمية. تدمج لوحة تحكم ويب إدارية ذكية مبنية بـ Laravel، مع تطبيق جوال تفاعلي لأولياء الأمور والطلاب مبني بـ Flutter لمتابعة مستجدات التعليم الفورية والتواصل المغلق.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#about" 
              className="bg-primary text-black font-bold px-8 py-4 rounded-2xl hover:bg-primary-dark transition-all duration-200 shadow-xl shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <span>اكتشف التفاصيل</span>
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a 
              href="#demo" 
              className="bg-card-bg border border-white/5 hover:border-primary/20 text-text-dark font-bold px-8 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md transform hover:-translate-y-1"
            >
              <span>محاكي الحضور والـ QR</span>
            </a>
          </div>

          {/* Quick stats / Features badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full border-t border-white/5 pt-8">
            <div>
              <h4 className="text-2xl font-extrabold text-primary">100%</h4>
              <p className="text-sm font-semibold text-text-grey mt-1">تكامل ومزامنة فورية</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-primary">QR Code</h4>
              <p className="text-sm font-semibold text-text-grey mt-1">تسجيل حضور آمن ومحمي</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-primary">Laravel & Flutter</h4>
              <p className="text-sm font-semibold text-text-grey mt-1">بيئة عمل متماسكة وقوية</p>
            </div>
          </div>
        </div>

        {/* Visual Presentation (Mockups) */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
          {/* Glassmorphic Background Card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent-dark/10 rounded-3xl transform rotate-6 scale-95 opacity-70 blur-lg"></div>
          
          {/* Web Dashboard Mockup (Laravel) */}
          <div className="w-full max-w-md bg-card-bg rounded-2xl shadow-2xl border border-white/5 overflow-hidden transform -rotate-3 transition-transform hover:rotate-0 duration-500">
            {/* Browser top bar */}
            <div className="bg-black/20 px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="bg-black/30 text-[10px] text-text-grey px-3 py-0.5 rounded-full flex-grow text-center truncate ml-4">
                edubridge-admin.web
              </div>
            </div>
            {/* Browser Mock Content */}
            <div className="p-4 bg-card-bg/50">
              <div className="flex gap-3 mb-4">
                <div className="w-1/4 h-20 bg-primary/10 rounded-xl p-3 flex flex-col justify-between">
                  <Laptop className="w-5 h-5 text-primary" />
                  <div className="h-2 w-10 bg-primary/30 rounded"></div>
                </div>
                <div className="flex-grow bg-card-bg border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                  <div className="h-3 w-24 bg-white/20 rounded"></div>
                  <div className="h-2 w-16 bg-white/10 rounded mt-1"></div>
                  <div className="h-1.5 w-32 bg-primary/20 rounded mt-2"></div>
                </div>
              </div>
              <div className="bg-card-bg border border-white/5 rounded-xl p-3 space-y-2.5">
                <div className="flex justify-between items-center">
                  <div className="h-2.5 w-16 bg-white/20 rounded"></div>
                  <div className="h-2.5 w-8 bg-primary/20 text-primary px-1.5 py-0.5 rounded text-[8px] font-bold text-center">نشط</div>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded"></div>
                <div className="h-1.5 w-4/5 bg-white/10 rounded"></div>
                <div className="h-1.5 w-3/5 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>

          {/* Mobile Phone Mockup (Flutter app) - floating in front */}
          <div className="absolute -bottom-6 -right-4 w-48 bg-gray-950 rounded-[2.5rem] shadow-2xl p-2.5 border-4 border-gray-900 transform rotate-6 transition-transform hover:rotate-2 duration-500">
            {/* Speaker & camera notch */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-950 rounded-full flex justify-center items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-900"></div>
              <div className="w-6 h-1 rounded-full bg-gray-900"></div>
            </div>
            {/* Phone screen content (Dark theme with Gold) */}
            <div className="bg-custom-bg rounded-[2rem] overflow-hidden h-72 p-3 pt-6 flex flex-col justify-between text-right">
              <div className="flex justify-between items-center">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Smartphone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-[9px] font-bold text-white">تطبيق الطلاب والأهالي</span>
              </div>
              
              <div className="bg-card-bg rounded-xl p-2.5 border border-white/5 shadow-sm mt-3 flex-grow flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                    <span className="text-[10px] font-bold text-primary">🎓</span>
                  </div>
                  <div className="h-2 w-20 bg-white/80 rounded"></div>
                  <div className="h-1.5 w-12 bg-text-grey rounded mt-1"></div>
                </div>
                
                {/* QR Mini Graphic */}
                <div className="flex flex-col items-center gap-1 mt-2">
                  <div className="w-12 h-12 bg-white/10 rounded border border-primary/20 flex items-center justify-center p-1.5">
                    <div className="w-full h-full border-2 border-primary border-dashed rounded flex items-center justify-center">
                      <span className="text-[6px] text-primary">QR</span>
                    </div>
                  </div>
                  <span className="text-[6px] text-primary font-bold">تسجيل الحضور بالـ QR</span>
                </div>
              </div>

              <div className="bg-primary text-black text-[9px] font-black py-1.5 text-center rounded-xl mt-2">
                لوحة التحكم الرئيسية
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
