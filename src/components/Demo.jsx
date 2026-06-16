import React, { useState, useEffect } from 'react';
import { Smartphone, RefreshCw, Bell, QrCode, Settings, MessageSquare, User, Home, BookOpen, Clock, CheckCircle, Send, ChevronLeft, LayoutGrid } from 'lucide-react';

export default function Demo() {
  // Global States
  const [activeMode, setActiveMode] = useState('qr'); // 'notification' or 'qr'
  const [isSyncing, setIsSyncing] = useState(false);
  const [notification, setNotification] = useState(null);

  // Simulator States
  const [absences, setAbsences] = useState(2);
  const [excuseStatus, setExcuseStatus] = useState(null); // null, 'pending', 'approved'
  const [inputText, setInputText] = useState('');
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      tag: 'إعلان عام',
      title: 'برنامج الامتحان النهائي لطلاب قسم الكمبيوتر ونظم المعلومات',
      desc: 'امتحانات السنة الثانية الساعة 9 - 10',
      time: 'منذ دقيقتين • احمد ديب',
      isExamTable: true
    },
    {
      id: 2,
      tag: 'إعلان عام',
      title: 'دورة اللغة الانجليزية الداعمة القصيرة المدى-برنامج التدريب الفني والمهني TVET',
      desc: 'الدورة المذكورة في هذا الإعلان هي دورات داعمة لطلابنا في المعهد لزيادة الكفاءة اللغوية والتحضير لسوق العمل.',
      time: 'منذ 5 دقائق • إدارة المعهد التقني',
      isDtcBanner: true
    }
  ]);

  // QR Attendance Simulator States
  const [qrStep, setQrStep] = useState('ready'); // 'ready', 'scanning', 'success'
  const [qrTimer, setQrTimer] = useState(15);
  const [hasAttended, setHasAttended] = useState(false);

  // QR Code Timer effect
  useEffect(() => {
    let interval;
    if (activeMode === 'qr' && qrStep === 'ready') {
      interval = setInterval(() => {
        setQrTimer((prev) => (prev <= 1 ? 15 : prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeMode, qrStep]);

  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  // Safe mode switcher to prevent black screen bug
  const handleSwitchMode = (mode) => {
    setActiveMode(mode);
    setQrStep('ready'); // Reset scanner state
    setNotification(null);
  };

  // Action 1: Teacher records absence (Laravel -> Flutter sync)
  const handleRecordAbsence = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setTimeout(() => {
      setAbsences(3);
      setExcuseStatus(null);
      setIsSyncing(false);
      triggerNotification('🔴 تم تسجيل غياب جديد للطالب محمود غنام، وتحديث حالة المتابعة فورياً.');
    }, 1000);
  };

  // Action 2: Parent submits medical excuse (Flutter -> Laravel sync)
  const handleRecordExcuse = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setTimeout(() => {
      setExcuseStatus('pending');
      setIsSyncing(false);
      triggerNotification('🟢 قدم ولي الأمر عذراً طبياً لغياب محمود، بانتظار موافقة شؤون الطلاب.');
    }, 1000);
  };

  // Trigger Announcement
  const handleSendAnnouncement = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isSyncing) return;
    setIsSyncing(true);
    setTimeout(() => {
      const newAnn = {
        id: Date.now(),
        tag: 'إعلان عاجل',
        title: inputText.trim(),
        desc: 'تعميم فوري من إدارة المدرسة لجميع الطلاب.',
        time: 'الآن • إدارة المدرسة'
      };
      setAnnouncements((prev) => [newAnn, ...prev]);
      setIsSyncing(false);
      triggerNotification(`📢 إعلان جديد: "${inputText.trim()}"`);
      setInputText('');
    }, 1000);
  };

  // Trigger QR Scan Action from Phone FAB
  const handleStartScan = () => {
    if (hasAttended) return;
    
    // Auto-switch to QR tab if user is on notification tab to prevent confusion
    if (activeMode !== 'qr') {
      setActiveMode('qr');
    }
    
    setQrStep('scanning');
    
    // Simulate camera scanning for 2.5 seconds
    setTimeout(() => {
      setQrStep('success');
      setHasAttended(true);
      triggerNotification('🟢 تم التحقق من الـ QR وتسجيل حضور الطالب محمود غنام بنجاح!');
    }, 2500);
  };

  const resetQrDemo = () => {
    setQrStep('ready');
    setHasAttended(false);
    setQrTimer(15);
  };

  return (
    <section id="demo" className="py-20 bg-custom-bg overflow-hidden border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-textDark mb-4">
            محاكي النظام والتزامن التفاعلي
          </h2>
          <p className="text-text-grey font-semibold text-lg font-sans">
            قم بتجربة الميزات الأساسية للمشروع بنفسك لرؤية كيفية ترابط لوحة الإدارة مع جوال الطالب بلحظتها.
          </p>
        </div>

        {/* Tab Selection for Simulator Mode */}
        <div className="flex justify-center gap-4 mb-12 max-w-md mx-auto">
          <button
            onClick={() => handleSwitchMode('qr')}
            className={`flex-1 py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${
              activeMode === 'qr' 
                ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-105' 
                : 'bg-cardBg text-textGrey border border-white/5 hover:bg-cardBg/80'
            }`}
          >
            <QrCode className="w-5 h-5" />
            <span>تسجيل الحضور بالـ QR</span>
          </button>
          <button
            onClick={() => handleSwitchMode('notification')}
            className={`flex-1 py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${
              activeMode === 'notification' 
                ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-105' 
                : 'bg-cardBg text-textGrey border border-white/5 hover:bg-cardBg/80'
            }`}
          >
            <Bell className="w-5 h-5" />
            <span>الإشعارات والمزامنة</span>
          </button>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Web Dashboard / Classroom Projector Simulator */}
          <div className="lg:col-span-6 bg-card-bg rounded-3xl border border-white/5 shadow-2xl p-6 md:p-8">
            
            {/* Header of Web Panel */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-bold text-primary">لوحة المعلم والإدارة (Laravel Web)</span>
              </div>
              <span className="text-[10px] text-text-grey bg-custom-bg px-3 py-1 rounded-full border border-white/5 font-semibold">بث مباشر نشط</span>
            </div>

            {/* Mode 1 Content: Notification Panel */}
            {activeMode === 'notification' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold text-text-dark mb-2">تسجيل الغياب والإعلانات</h3>
                  <p className="text-sm text-text-grey leading-relaxed">
                    من هنا يستطيع المعلم رصد حالة الطالب اليومية أو نشر خبر عاجل. عند التأكيد، يُطلق خادم Laravel حدثاً (Event) لتحديث قاعدة البيانات وإرسال إشعار فوري لتطبيق الموبايل.
                  </p>
                </div>

                {/* Double Actions Card (Teacher + Parent Actions) */}
                <div className="bg-custom-bg p-5 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-text-grey block mb-0.5">اسم الطالب المستهدف</span>
                      <span className="text-base font-extrabold text-text-dark">محمود غنام</span>
                    </div>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20">شعبة أ - كمبيوتر</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Action 1: Teacher Absence button */}
                    <button
                      onClick={handleRecordAbsence}
                      disabled={isSyncing}
                      className="bg-red-600 hover:bg-red-700 disabled:bg-red-950 disabled:text-text-grey/50 text-white font-extrabold py-3 px-4 rounded-xl transition-all shadow-md text-xs flex items-center justify-center gap-1.5"
                    >
                      {isSyncing ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <span>تسجيل غياب محمود 🔴</span>
                      )}
                    </button>

                    {/* Action 2: Parent Excuse button */}
                    <button
                      onClick={handleRecordExcuse}
                      disabled={isSyncing || excuseStatus === 'pending'}
                      className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-black font-extrabold py-3 px-4 rounded-xl transition-all shadow-md text-xs flex items-center justify-center gap-1.5"
                    >
                      {isSyncing ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : excuseStatus === 'pending' ? (
                        <span>تم تقديم العذر ✔</span>
                      ) : (
                        <span>تقديم عذر طبي (الأهل) ✉</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Announcement Form */}
                <form onSubmit={handleSendAnnouncement} className="space-y-3">
                  <label className="text-sm font-bold text-text-dark block">نشر إعلان على حائط الأخبار</label>
                  <textarea
                    rows="3"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="مثال: تبدأ امتحانات العملي يوم الأحد القادم 21 يونيو..."
                    className="w-full bg-custom-bg px-4 py-3 rounded-2xl border border-white/5 focus:border-primary outline-none text-sm font-semibold text-text-dark placeholder-text-muted"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isSyncing}
                    className="w-full bg-primary hover:bg-primary-dark text-black font-extrabold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>نشر الإعلان على تطبيق الجوال</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Mode 2 Content: QR Generator */}
            {activeMode === 'qr' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold text-text-dark mb-2">بث رمز الحضور الذكي (Dynamic QR Code)</h3>
                  <p className="text-sm text-text-grey leading-relaxed">
                    يقوم المعلم بتوليد رمز QR مشفر ومتغير بمؤقت في القاعة. يقوم الطلاب بمسحه عبر كاميرا الجوال لتسجيل الحضور. هذه الآلية تمنع مشاركة الكود عن بعد أو تسجيل الطلاب الغائبين.
                  </p>
                </div>

                {/* Virtual projector displaying QR */}
                <div className="bg-custom-bg rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  
                  {qrStep === 'ready' && (
                    <>
                      {/* Ticking timer */}
                      <div className="flex items-center gap-2 text-xs font-bold text-primary mb-4 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                        <Clock className="w-4 h-4 animate-spin" />
                        <span>يتغير رمز الاستجابة خلال: {qrTimer} ثانية</span>
                      </div>

                      {/* Mock QR image */}
                      <div className="relative w-44 h-44 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center">
                        <img src="/qr-real.png" className="w-full h-full object-contain" alt="QR Code" />
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none"></div>
                      </div>

                      <span className="text-xs font-bold text-text-grey mt-4">محاضرة: برمجة تطبيقات الهواتف (Flutter)</span>
                      <span className="text-[10px] text-emerald-500 font-bold mt-1">بث الكود نشط حالياً داخل القاعة</span>
                    </>
                  )}

                  {qrStep === 'scanning' && (
                    <div className="py-10 flex flex-col items-center justify-center">
                      <RefreshCw className="w-12 h-12 text-primary animate-spin mb-4" />
                      <h4 className="font-extrabold text-text-dark mb-2">جاري قراءة الـ QR من جهاز الطالب...</h4>
                      <p className="text-xs text-text-grey">الرجاء عدم إغلاق الكاميرا في الجوال</p>
                    </div>
                  )}

                  {qrStep === 'success' && (
                    <div className="py-8 flex flex-col items-center justify-center animate-fadeIn">
                      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h4 className="font-extrabold text-text-dark text-lg mb-2">تم تسجيل الحضور بنجاح!</h4>
                      <p className="text-xs text-text-grey max-w-xs leading-relaxed">
                        تلقى السيرفر الرمز المشفر بنجاح، وتم التحقق من توقيت الجلسة، وتسجيل الطالب **محمود غنام** كـ "حاضر".
                      </p>
                      
                      <button 
                        onClick={resetQrDemo} 
                        className="mt-6 bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 font-bold text-xs px-4 py-2 rounded-xl transition-all"
                      >
                        إعادة تجربة المحاكاة
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 text-right">
                  <span className="text-xs text-primary font-bold block mb-1">💡 كيف تجرب المحاكاة؟</span>
                  <p className="text-xs text-text-grey leading-relaxed font-semibold">
                    اتجه إلى شاشة جوال الطالب على اليسار، وانقر على **زر الـ QR الأصفر الدائري العائم** في أسفل الجوال لبدء مسح الكود الظاهر هنا!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Simulated Flutter Application Screen (Matches User Screenshot) */}
          <div className="lg:col-span-6 flex flex-col items-center relative">
            
            {/* Simulated Notification Box */}
            <div className={`absolute top-4 left-4 right-4 bg-card-bg/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 transition-all duration-500 transform z-40 flex gap-3 ${
              notification ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
            }`}>
              <div className="bg-primary text-black p-2.5 rounded-xl flex items-center justify-center self-start">
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-[10px] font-black text-primary">إشعار فوري من Edu Bridge</span>
                  <span className="text-[8px] text-text-grey font-semibold">الآن</span>
                </div>
                <p className="text-xs font-bold text-text-dark leading-relaxed">{notification}</p>
              </div>
            </div>

            {/* Mobile shell container */}
            <div className="w-[330px] h-[640px] bg-gray-950 rounded-[3.2rem] shadow-2xl p-4 border-[6px] border-gray-900 relative">
              {/* Speaker notch */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                <div className="w-8 h-1 rounded-full bg-gray-800 ml-2"></div>
              </div>
              
              {/* Screen Content */}
              <div className="bg-[#121212] w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col justify-between text-right relative border border-white/5">
                
                {/* 1. CAMERA SCAN OVERLAY (QR SCANNING STATE - ONLY WHEN ACTIVE MODE IS QR) */}
                {activeMode === 'qr' && qrStep === 'scanning' && (
                  <div className="absolute inset-0 bg-black/95 z-30 flex flex-col justify-between p-6 pt-16 items-center text-center">
                    <div>
                      <h4 className="text-white font-extrabold text-base mb-1">مسح رمز الحضور</h4>
                      <p className="text-xs text-text-grey">وجه الكاميرا نحو رمز الـ QR على لوحة المدرس</p>
                    </div>

                    {/* Camera scan box */}
                    <div className="relative w-48 h-48 border-2 border-primary rounded-3xl overflow-hidden flex items-center justify-center bg-black">
                      {/* Moving laser line */}
                      <div className="absolute left-0 right-0 h-0.5 bg-primary shadow-lg shadow-primary/80 animate-scanline"></div>
                      <QrCode className="w-28 h-28 text-white/20" />
                    </div>

                    <div className="mb-6">
                      <span className="text-xs text-text-grey block">التحقق من الإحداثيات الزمنية...</span>
                      <span className="text-[10px] text-primary font-bold">بث مشفر بـ MD5/SHA256</span>
                    </div>
                  </div>
                )}

                {/* 2. APP TOP BAR (Matches screenshot: Welcome Mahmoud, Settings gear on left) */}
                <div className="px-5 pt-6 pb-3 flex justify-between items-center bg-transparent">
                  <div className="text-primary hover:scale-105 transition-transform cursor-pointer p-1">
                    <Settings className="w-5 h-5 text-[#ffb300]" />
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs font-black text-[#ffb300] block">أهلاً، محمود غنام</span>
                    <span className="text-[9px] font-semibold text-text-grey flex items-center gap-1.5 justify-end">
                      {excuseStatus === 'pending' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>}
                      <span>لوحة تحكم الطالب {excuseStatus === 'pending' && '(عذر معلق)'}</span>
                    </span>
                  </div>
                </div>

                {/* 3. SCROLLABLE SCREEN CONTENT (Only news feed, no stats cards!) */}
                <div className="flex-1 overflow-y-auto px-4 py-1 space-y-4 scrollbar-none">
                  
                  {/* Section Title matching user image: | آخر الأخبار */}
                  <div className="flex items-center gap-2 border-r-4 border-[#ffb300] pr-2 mt-2">
                    <h4 className="text-xs font-black text-white">آخر الأخبار</h4>
                  </div>

                  {/* Feed matching user's image exactly */}
                  <div className="space-y-4">
                    {announcements.map((ann) => (
                      <div key={ann.id} className="bg-[#1e1e1e] rounded-2xl border border-white/5 overflow-hidden shadow-md">
                        
                        {/* 1. Exam Table Render inside announcement card */}
                        {ann.isExamTable && (
                          <div className="p-2.5">
                            {/* Blue exam table image placeholder matching screenshot */}
                            <div className="bg-[#e8f5e9]/95 text-black rounded-lg border border-white/10 overflow-hidden text-[6px] font-bold text-center mb-2.5">
                              {/* Header row with light green background */}
                              <div className="grid grid-cols-4 bg-[#2e7d32]/25 text-[#1b5e20] border-b border-[#2e7d32]/20 p-1 font-extrabold">
                                <div>الأربعاء</div>
                                <div>الأحد</div>
                                <div>الاثنين</div>
                                <div>الثلاثاء</div>
                              </div>
                              {/* First Row of Table */}
                              <div className="grid grid-cols-4 border-b border-black/5 p-1 text-black">
                                <div>اللغة الإنكليزية</div>
                                <div>تصميم مواقع</div>
                                <div>البرمجة بلغة C#</div>
                                <div>قواعد بيانات</div>
                              </div>
                              {/* Second Row of Table */}
                              <div className="grid grid-cols-4 p-1 text-black/75">
                                <div>صيانة حاسوب</div>
                                <div>أسس الكترونية</div>
                                <div>قواعد بيانات</div>
                                <div>إدارة شبكات</div>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-1">
                              <span className="bg-[#00a2ed] text-white text-[7px] font-bold px-2 py-0.5 rounded">
                                {ann.tag}
                              </span>
                              <span className="text-[6px] text-text-grey font-semibold">{ann.time}</span>
                            </div>
                            
                            <p className="text-[9px] font-black text-white leading-normal mb-1.5">
                              {ann.title}
                            </p>
                            <p className="text-[8px] text-text-grey leading-normal mb-2">
                              {ann.desc}
                            </p>
                            
                            <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2 text-[7px] text-text-grey font-semibold">
                              <ChevronLeft className="w-3.5 h-3.5 text-text-grey" />
                              <span>انقر لمشاهدة التفاصيل</span>
                            </div>
                          </div>
                        )}

                        {/* 2. DTC Course Banner inside announcement card */}
                        {ann.isDtcBanner && (
                          <div>
                            {/* Damascus Training Centre Split Banner */}
                            <div className="h-[90px] w-full flex overflow-hidden border-b border-white/5">
                              {/* Left side: Light blue */}
                              <div className="w-1/2 bg-[#00bcd4] p-2 flex flex-col justify-between items-center text-center text-white">
                                <div className="w-7 h-7 rounded-full bg-white/25 border border-white/30 flex items-center justify-center mt-1">
                                  <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <div className="mb-1">
                                  <span className="text-[6px] font-black block">Damascus Training Centre</span>
                                  <span className="text-[4px] text-white/80 block">DTC Program 2026</span>
                                </div>
                              </div>
                              {/* Right side: Dark blue */}
                              <div className="w-1/2 bg-[#0288d1] p-2 flex flex-col justify-between items-center text-center text-white">
                                <div className="w-7 h-7 rounded-full bg-white/25 border border-white/30 flex items-center justify-center mt-1">
                                  <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <div className="mb-1">
                                  <span className="text-[6px] font-black block">Damascus Training Centre</span>
                                  <span className="text-[4px] text-white/80 block">DTC Program 2026</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="bg-[#00a2ed] text-white text-[7px] font-bold px-2 py-0.5 rounded">
                                  {ann.tag}
                                </span>
                                <span className="text-[6px] text-text-grey font-semibold">{ann.time}</span>
                              </div>
                              
                              <p className="text-[9px] font-black text-white leading-normal mb-1.5">
                                {ann.title}
                              </p>
                              <p className="text-[8px] text-text-grey leading-relaxed mb-2">
                                {ann.desc}
                              </p>

                              <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2 text-[7px] text-text-grey font-semibold">
                                <ChevronLeft className="w-3.5 h-3.5 text-text-grey" />
                                <span>انقر لمشاهدة التفاصيل</span>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    ))}
                  </div>
                </div>

                {/* FLOATING QR CODE BUTTON (FAB) FLOATING ON THE BOTTOM LEFT */}
                <button
                  onClick={handleStartScan}
                  disabled={hasAttended}
                  className={`absolute bottom-[70px] left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform active:scale-95 z-20 ${
                    hasAttended 
                      ? 'bg-emerald-600 text-white cursor-default shadow-emerald-500/10' 
                      : 'bg-[#ffcc00] text-black hover:bg-[#ffb300] hover:scale-105 shadow-primary/30 animate-pulse border border-black/10'
                  }`}
                >
                  {hasAttended ? (
                    <CheckCircle className="w-5.5 h-5.5" />
                  ) : (
                    <QrCode className="w-5.5 h-5.5" />
                  )}
                </button>

                {/* 4. APP BOTTOM NAVIGATION BAR (Symmetrical layout: 2 icons - center apps FAB - 2 icons) */}
                <div className="bg-[#1a1a1a] border-t border-white/5 px-2 py-1.5 flex justify-between items-center h-14 text-text-grey">
                  {/* Right group (RTL order: Home is rightmost, Profile is second) */}
                  <div className="flex-1 flex justify-around">
                    <button className="flex flex-col items-center text-[#ffcc00] font-bold">
                      <Home className="w-4 h-4 text-[#ffcc00]" />
                      <span className="text-[7px] mt-0.5">الرئيسية</span>
                    </button>
                    <button className="flex flex-col items-center hover:text-white transition-colors">
                      <User className="w-4 h-4" />
                      <span className="text-[7px] mt-0.5">الملف</span>
                    </button>
                  </div>
                  
                  {/* Center Docked Apps Grid Button (Middle button) */}
                  <div className="px-2">
                    <button className="w-10 h-10 rounded-full bg-[#ffcc00] text-black flex items-center justify-center shadow-lg active:scale-95 transition-transform border border-black/10">
                      <LayoutGrid className="w-4.5 h-4.5" />
                    </button>
                  </div>

                  {/* Left group (RTL order: Notifications is right-middle, Messages is leftmost) */}
                  <div className="flex-1 flex justify-around">
                    <button className="flex flex-col items-center relative hover:text-white transition-colors">
                      <Bell className="w-4 h-4" />
                      <span className="text-[7px] mt-0.5">الإشعارات</span>
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="flex flex-col items-center hover:text-white transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-[7px] mt-0.5">رسائل</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Instruction below mockup */}
            <span className="text-xs text-text-grey font-semibold mt-4 text-center">
              * واجهة تحاكي شاشة الطالب الحقيقية من لقطة شاشتك تماماً.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
