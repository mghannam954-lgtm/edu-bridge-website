import React from 'react';
import { ShieldCheck, Zap, Bell, LayoutGrid, Award, BarChart3, RefreshCw, KeyRound, CheckCircle } from 'lucide-react';

export default function Features() {
  const list = [
    {
      title: 'أمان وصلاحيات دقيقة (Role-based)',
      description: 'نظام حماية متطور مبني على الأدوار لمنع الوصول غير المصرح به لقواعد البيانات، وتحديد صلاحيات دقيقة لكل مستخدم.',
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      title: 'مزامنة فائقة السرعة',
      description: 'تنفيذ واجهات برمجية (APIs) محسنة تضمن تحديث الحالات والأحداث فوراً وعرضها في الموبايل في الوقت الفعلي.',
      icon: <Zap className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      title: 'نظام إشعارات تفاعلي',
      description: 'إطلاق إشعارات فورية وبشكل فوري لأولياء الأمور بمجرد تسجيل أي غياب، أو واجب منزلي، أو رصد علامة اختبار.',
      icon: <Bell className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      title: 'حلقة تواصل مغلقة ومترابطة',
      description: 'الحدث الذي يقوم به المعلم يراه فوراً الطالب وولي الأمر، والطلب الذي يقدمه ولي الأمر يبت فيه شؤون الطلاب ورئيس القسم.',
      icon: <RefreshCw className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      title: 'تسجيل الحضور بالـ QR لمنع التلاعب',
      description: 'توليد كود حضور مشفر ومتغير بمؤقت زمني من قبل المدرس، ليقوم الطالب بمسحه من كاميرا الجوال لتسجيل الحضور.',
      icon: <KeyRound className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      title: 'تقارير وإحصائيات كبرى للكلية',
      description: 'واجهة مخصصة للمدير ورؤساء الأقسام لفلترة واستعراض إحصائيات عامة حول الحضور ونسب النجاح اليومية والإجمالية.',
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    }
  ];

  return (
    <section id="features" className="py-20 bg-custom-bg" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-textDark mb-4">
            نقاط القوة والميزات التقنية للمنظومة
          </h2>
          <p className="text-text-grey font-semibold text-lg">
            تم تطبيق أفضل المعايير الهندسية لربط قاعدة بيانات Laravel مع واجهات Flutter بصورة متكاملة وآمنة تماماً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl border border-white/5 hover:border-primary/20 bg-card-bg transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 transform hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-textDark mb-3">
                {item.title}
              </h3>
              <p className="text-text-grey text-sm leading-relaxed font-semibold">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
