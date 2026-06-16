import React, { useState } from 'react';
import { 
  GraduationCap, 
  Smartphone, 
  Server, 
  Palette, 
  Code2, 
  Database, 
  ArrowLeft, 
  ChevronLeft,
  Sparkles
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'محمود غنام',
    role: 'مطوّر واجهات تطبيق الموبايل Flutter',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'UI Design', 'Mobile UX', 'Frontend Dev'],
    bio: 'مسؤول عن تصميم وتطوير واجهات المستخدم لتطبيق الجوال (Frontend) بالكامل باستخدام Flutter، وضمان سلاسة تجربة المستخدم وسرعة استجابة التطبيق.',
    color: 'from-blue-500/20 to-cyan-500/20',
    avatar: 'MG'
  },
  {
    id: 2,
    name: 'مجدولين محمود',
    role: 'قائدة الفريق ومسؤولة الربط البرمجي',
    icon: Server,
    skills: ['Laravel', 'System Integration', 'RESTful APIs', 'Team Leadership', 'Fullstack Binding'],
    bio: 'قائدة الفريق البرمجي، ومسؤولة عن إدارة وتنسيق المهام وتكامل النظام، بالإضافة إلى عملية الربط البرمجي الكامل بين واجهات التطبيق (Frontend) والخدمات الخلفية (Backend).',
    color: 'from-red-500/20 to-orange-500/20',
    avatar: 'MM'
  },
  {
    id: 3,
    name: 'اسراء منوّر',
    role: 'مطوّرة خادم ومصممة APIs (Backend)',
    icon: Code2,
    skills: ['Laravel', 'PHP', 'API Design', 'Backend Architecture', 'Database Queries'],
    bio: 'مسؤولة عن بناء وتطوير الخدمات الخلفية (Backend) بالكامل الخاصة بالتطبيق، وإنشاء وتصميم الـ APIs اللازمة لربط النظام وتأمين تدفق البيانات للتطبيق.',
    color: 'from-purple-500/20 to-pink-500/20',
    avatar: 'EM'
  },
  {
    id: 4,
    name: 'هبة الله عيسى',
    role: 'مطوّرة لوحة التحكم والإدارة Web',
    icon: Palette,
    skills: ['Web Development', 'Admin Panels', 'Laravel Blade', 'UI Customization', 'Responsive Design'],
    bio: 'مسؤولة عن تطوير وتصميم وبناء لوحة تحكم الويب المخصصة بالكامل لمستخدمي الإدارة وشؤون الطلاب (Laravel Web Panel)، وتسهيل إدارة العمليات التعليمية.',
    color: 'from-emerald-500/20 to-teal-500/20',
    avatar: 'HA'
  },
  {
    id: 5,
    name: 'شهد زريقي',
    role: 'محللة قواعد بيانات ومطوّرة واجهات',
    icon: Database,
    skills: ['Database Design', 'SQL', 'Systems Analysis', 'Frontend UI', 'ERD Diagrams'],
    bio: 'مسؤولة عن تصميم وتطوير قواعد البيانات وتحديد العلاقات البرمجية ونظام الجداول، وتحليل متطلبات النظام، بالإضافة إلى تطوير واجهات المستخدم الرسومية (Frontend).',
    color: 'from-amber-500/20 to-yellow-500/20',
    avatar: 'SZ'
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <section id="team" className="py-20 bg-custom-bg relative overflow-hidden border-t border-black/10 dark:border-white/10" dir="rtl">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>صُنِعَ بأيدينا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4 tracking-tight leading-tight">
            فريق التطوير والعمل المميّز
          </h2>
          <p className="text-sm md:text-base text-text-grey font-semibold leading-relaxed">
            فريق متكامل جمع بين التخصص والشغف لتصميم وبناء منصة <span className="text-primary font-bold">Edu Bridge</span> المتكاملة، لربط أركان العملية التعليمية بأحدث التقنيات البرمجية.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            const isSelected = selectedMember.id === member.id;
            return (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`group text-right relative flex flex-col items-center justify-center p-6 rounded-3xl border transition-all duration-500 focus:outline-none ${
                  isSelected 
                    ? 'bg-card-bg border-primary shadow-2xl scale-[1.03] ring-2 ring-primary/20' 
                    : 'bg-card-bg/60 border-black/5 dark:border-white/5 shadow-md hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-lg'
                }`}
              >
                {/* Avatar circle with glow */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/10 dark:bg-transparent" />
                  <IconComponent className={`w-7 h-7 transition-colors duration-300 ${isSelected ? 'text-primary' : 'text-text-dark/70 group-hover:text-primary'}`} />
                  <span className="absolute bottom-1 right-2 text-[9px] font-black opacity-30 select-none">{member.avatar}</span>
                </div>

                {/* Name & Role */}
                <h3 className="font-extrabold text-base text-text-dark text-center group-hover:text-primary transition-colors mb-1.5">
                  {member.name}
                </h3>
                <p className="text-[10px] text-text-grey font-bold text-center leading-normal">
                  {member.role.split('/')[0]}
                </p>

                {/* Arrow indicator */}
                {isSelected && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-card-bg border-b border-r border-primary rotate-45 z-10 hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Selected Member Details Panel */}
        <div className="bg-card-bg border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl transition-all duration-500 animate-fadeIn relative overflow-hidden">
          {/* Decorative corner glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
            {/* Left/Top Profile Icon badge */}
            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${selectedMember.color} flex items-center justify-center shadow-lg border border-primary/20 flex-shrink-0 animate-pulse`}>
              {React.createElement(selectedMember.icon, { className: 'w-10 h-10 text-primary' })}
            </div>

            {/* Content Details */}
            <div className="flex-1 text-center lg:text-right">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-2xl font-black text-text-dark mb-1 flex items-center justify-center lg:justify-start gap-2">
                    {selectedMember.name}
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </h4>
                  <p className="text-xs text-primary font-bold tracking-wide">
                    {selectedMember.role}
                  </p>
                </div>

                {/* Custom badge */}
                <div className="bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-2xl text-[10px] font-black inline-flex items-center gap-1.5 self-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span>عضو فاعل ومساهم</span>
                </div>
              </div>

              {/* Biography description */}
              <p className="text-sm text-text-grey font-semibold leading-relaxed mb-6 max-w-4xl">
                {selectedMember.bio}
              </p>

              {/* Skills/Technologies Badges */}
              <div>
                <span className="text-[11px] font-black text-text-dark/80 block mb-3">المهارات والتقنيات المستخدمة بالمشروع:</span>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {selectedMember.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-custom-bg border border-black/5 dark:border-white/5 text-text-dark text-xs font-extrabold px-3 py-1.5 rounded-xl transition-all duration-300 hover:border-primary hover:text-primary shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
