import React, { useState } from 'react';
import { Users, GraduationCap, UserCheck, ShieldAlert, FileText, Settings, Send } from 'lucide-react';

export default function Audience() {
  const [activeTab, setActiveTab] = useState('student');

  const roles = {
    student: {
      title: 'الطالب',
      description: 'واجهة تطبيق الموبايل المخصصة لتسهيل الحضور وتلقي الدروس وحل التقييمات بيسر وسرعة.',
      icon: <GraduationCap className="w-5 h-5" />,
      features: [
        'تسجيل الحضور الفوري بالـ QR: مسح رمز الـ QR الذي يولده المعلم في القاعة الدراسية عبر كاميرا التطبيق لتسجيل الحضور فورياً وبشكل آمن.',
        'متابعة المحاضرات والجدول: استعراض جدول الحصص اليومي والأسبوعي، والوصول المباشر للمحاضرات والمرفقات المرفوعة.',
        'إدارة الواجبات والمهام: تلقي الواجبات الدراسية وحلها ومتابعة تقييماتها أولاً بأول.',
        'التواصل الأكاديمي المباشر: مراسلة المعلمين مباشرة للاستفسار عن الدروس في بيئة تواصل آمنة.'
      ],
      color: 'from-amber-500 to-yellow-600',
    },
    parents: {
      title: 'ولي الأمر',
      description: 'متابعة شاملة ومستمرة للأبناء لتوفير راحة البال والاطمئنان الكامل للأهالي.',
      icon: <Users className="w-5 h-5" />,
      features: [
        'التبديل المرن ومراقبة الأداء الشامل: ربط عدة أبناء بحساب واحد ومتابعة الأداء الأكاديمي والغياب والحضور برسوم بيانية تفاعلية.',
        'الاستئذان الرقمي: إرسال طلبات إذن غياب رسمية ومبررة لإدارة المدرسة مباشرة من التطبيق مع متابعة حالة الطلب.',
        'متابعة الواجبات والدرجات بالتفصيل: تصفح نتائج الاختبارات التفصيلية لكل مادة، وتتبع التزام الابن بحل واجباته.',
        'التواصل الفوري والدردشة: إمكانية التحدث المباشر مع أساتذة الأبناء لمناقشة مستواهم الدراسي.'
      ],
      color: 'from-orange-500 to-yellow-600',
    },
    teachers: {
      title: 'المعلم',
      description: 'أدوات رقمية تسهم في تقليل الأعباء الإدارية والتركيز التام على جودة التعليم ورصد العلامات.',
      icon: <UserCheck className="w-5 h-5" />,
      features: [
        'توليد الـ QR التفاعلي للحضور: إنشاء جلسة حضور ذكية وتوليد رمز QR مشفر يتغير بمؤقت زمني لتوثيق حضور الطلاب الفعليين.',
        'التقييم ورصد العلامات الرقمي: رصد علامات الاختبارات والتقييمات للطلاب مباشرة لتصل فوراً لأولياء الأمور والطلاب.',
        'رفع المحتوى التعليمي: رفع المحاضرات، الدروس، والواجبات المنزلية وتحديد مواعيد تسليمها بسهولة.'
      ],
      color: 'from-yellow-500 to-amber-600',
    },
    hod: {
      title: 'رئيس القسم (HOD)',
      description: 'الإشراف الأكاديمي والإداري الكامل على جودة التعليم وتنسيق عمل المعلمين في القسم.',
      icon: <ShieldAlert className="w-5 h-5" />,
      features: [
        'الواجهة التنظيمية الأكاديمية: شاشة لوحة تحكم كبرى لإدارة القسم، توزيع المواد على الشُعب، وتعيين المدرسين للفصول.',
        'اعتماد الإجازات والطلبات: مراجعة واعتماد طلبات الإجازات والاستئذان المقدمة من المعلمين أو الموظفين بالقسم.',
        'إصدار وطلب التقارير: طلب تقارير دورية وإحصائية عن سير العملية التعليمية ونسب حضور الطلاب والمعلمين.'
      ],
      color: 'from-amber-600 to-orange-600',
    },
    affairs: {
      title: 'شؤون الطلاب (Affairs)',
      description: 'إدارة الهيكل التعليمي وسجلات المنتسبين وضمان دقة وصحة المزامنة والارتباطات.',
      icon: <FileText className="w-5 h-5" />,
      features: [
        'إدارة الحسابات والارتباطات: شاشة مخصصة لإدارة وتوثيق حسابات الطلاب، أولياء الأمور، والموظفين، ومتابعة الارتباطات.',
        'التقويم الدراسي والإجازات: إدارة التقويم السنوي، إدخال العطلات الرسمية، ومتابعة سجلات إجازات الموظفين والطلاب.',
        'تنظيم الأنشطة المدرسية: جدولة وإعلان الأنشطة اللامنهجية والفعاليات الثقافية والرياضية على لوحة إعلانات التطبيق.'
      ],
      color: 'from-orange-600 to-yellow-600',
    },
    admins: {
      title: 'مدير النظام (Admin)',
      description: 'لوحة التحكم الكبرى للإشراف العام وإدارة القواعد التقنية وإعدادات الصلاحيات للمنظومة.',
      icon: <Settings className="w-5 h-5" />,
      features: [
        'لوحة الإشراف العام والتحكم الكامل: التحكم الشامل في قواعد البيانات، الصلاحيات، الشُعب الدراسية، وحسابات المستخدمين.',
        'نشر الأخبار والإعلانات العامة: نشر الإعلانات الرسمية والمهمة على شريط الأخبار الرئيسي (News Feed) الذي يظهر فوراً لجميع المستخدمين.',
        'التقارير التحليلية الكبرى: استعراض إحصائيات عامة حول أداء المدرسة الإجمالي ومعدلات الاستخدام اليومي للتطبيق.'
      ],
      color: 'from-yellow-600 to-orange-700',
    }
  };

  return (
    <section id="audience" className="py-20 bg-card-bg" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-textDark mb-4">
            نظام متكامل يضم كل أطراف البيئة التعليمية
          </h2>
          <p className="text-text-grey font-semibold text-lg">
            منصة Edu Bridge توفر حلقة تواصل مغلقة؛ فالحدث الذي يقوم به المعلم يراه فوراً ولي الأمر والطالب، والطلب الذي يقدمه ولي الأمر يبت فيه شؤون الطلاب ورئيس القسم تحت إشراف مدير النظام.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto">
          {Object.keys(roles).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === key
                  ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-105'
                  : 'bg-custom-bg text-text-grey hover:bg-custom-bg/80 border border-white/5'
              }`}
            >
              {roles[key].icon}
              <span>{roles[key].title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="bg-custom-bg rounded-[2rem] border border-white/5 shadow-2xl p-8 md:p-12 transition-all duration-500 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side info */}
            <div className="lg:col-span-7 text-right">
              <span className={`inline-block text-[10px] font-bold text-black px-3 py-1 rounded-full bg-gradient-to-r ${roles[activeTab].color} mb-4`}>
                المستخدم الحالي
              </span>
              <h3 className="text-3xl font-extrabold text-textDark mb-4">
                {roles[activeTab].title}
              </h3>
              <p className="text-text-grey font-semibold leading-relaxed text-base mb-8">
                {roles[activeTab].description}
              </p>
              
              <div className="space-y-4">
                {roles[activeTab].features.map((feature, index) => {
                  const [title, desc] = feature.split(': ');
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                        <Send className="w-3.5 h-3.5 transform rotate-180" />
                      </div>
                      <span className="text-text-grey font-medium text-sm leading-relaxed">
                        <strong className="text-textDark font-extrabold">{title}</strong>
                        {desc ? `: ${desc}` : ''}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side representation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`w-full max-w-sm aspect-video rounded-3xl bg-gradient-to-tr ${roles[activeTab].color} p-8 text-black flex flex-col justify-between shadow-2xl relative overflow-hidden`}>
                {/* Decorative circle inside */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/20 rounded-full"></div>
                
                <div className="flex justify-between items-start z-10">
                  <div className="bg-black/10 p-3.5 rounded-2xl backdrop-blur-md">
                    {roles[activeTab].icon}
                  </div>
                  <GraduationCap className="w-8 h-8 opacity-20 text-black" />
                </div>
                
                <div className="z-10">
                  <span className="text-black/60 text-xs font-bold block mb-1">EDU BRIDGE SYSTEM</span>
                  <span className="text-xl font-black tracking-wide">{roles[activeTab].title} Portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
