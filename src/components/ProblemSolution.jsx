import React from 'react';
import { AlertCircle, CheckCircle, ArrowLeftRight, BellRing, QrCode } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="about" className="py-20 bg-custom-bg border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-textDark mb-4">
            لماذا قمنا ببناء منصة <span className="text-primary">Edu Bridge</span>؟
          </h2>
          <p className="text-text-grey font-semibold text-lg">
            نهدف لحل الفجوة التقليدية وتأخر المعاملات في الإدارة المدرسية عبر أتمتة تدفق البيانات وتوفير آليات حضور مبتكرة وآمنة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Problem Card (Dark with red accent) */}
          <div className="bg-card-bg rounded-3xl p-8 md:p-10 border border-red-500/10 hover:border-red-500/20 transition-colors flex flex-col justify-between shadow-xl">
            <div>
              <div className="bg-red-500/10 text-red-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-textDark mb-4">التحديات والمشاكل التقليدية</h3>
              <p className="text-text-grey font-semibold mb-8">
                تعاني المنظومات المدرسية من عقبات تقليدية تؤثر سلباً على أداء الطلاب وسرعة اتخاذ القرار:
              </p>
              <ul className="space-y-4 font-semibold text-text-grey">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg mt-0.5">•</span>
                  <span className="text-textDark/80">تلاعب الطلاب في كشوف الحضور والغياب اليدوية وغياب المصداقية.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg mt-0.5">•</span>
                  <span className="text-textDark/80">تأخر وصول التنبيهات والإشعارات الهامة لأولياء الأمور حول سلوك ودرجات الأبناء.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-lg mt-0.5">•</span>
                  <span className="text-textDark/80">تشتت مستندات الإدارة والدرجات بين شيتات الإكسل وغياب التكامل البرمجي.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-text-grey/50 font-semibold">
              * قمنا بدراسة هذه المشاكل لبناء حل يربط السيرفر بتطبيق المستخدم مباشرة.
            </div>
          </div>

          {/* Solution Card (Dark with gold accent) */}
          <div className="bg-card-bg rounded-3xl p-8 md:p-10 border border-primary/10 hover:border-primary/20 transition-colors flex flex-col justify-between shadow-xl">
            <div>
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 shadow-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4">حلول منصة Edu Bridge الذكية</h3>
              <p className="text-text-grey font-semibold mb-8">
                منظومة برمجية متماسكة مبنية على التكامل التام بين الويب والموبايل لتوفير تجربة تعليمية رائدة:
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-custom-bg p-2.5 rounded-xl border border-white/5 text-primary flex-shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-textDark text-base">تسجيل حضور فوري بالـ QR</h4>
                    <p className="text-text-grey text-sm mt-0.5 font-medium">توليد رمز حضور مشفر ومتغير من قبل الأستاذ، ومسحه من كاميرا الطالب لتوثيق فوري بدون تلاعب.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-custom-bg p-2.5 rounded-xl border border-white/5 text-primary flex-shrink-0">
                    <ArrowLeftRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-textDark text-base">مزامنة تامة لقواعد البيانات</h4>
                    <p className="text-text-grey text-sm mt-0.5 font-medium">أي علامة مرصودة أو غياب مسجل يُحدث السيرفر فوراً ويظهر في شاشة ولي الأمر بلحظتها.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-custom-bg p-2.5 rounded-xl border border-white/5 text-primary flex-shrink-0">
                    <BellRing className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-textDark text-base">حلقة إشعارات تفاعلية مغلقة</h4>
                    <p className="text-text-grey text-sm mt-0.5 font-medium">إخطار أولياء الأمور فلياً بجميع أحداث أبنائهم من واجبات ودرجات وسلوكيات مباشرة.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-primary/60 font-semibold">
              * يوفر النظام مرونة كاملة للربط والتشغيل السريع.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
