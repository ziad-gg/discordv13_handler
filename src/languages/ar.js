module.exports = {
  
  general: {
    timeOut: (t) => `> **🙄 - الرجاء الإنتظار ${t} من الثواني!**`,
    noPermissions: (p) => `> **لايمكنك أستخدام هذا الأمر ، بسبب عدم توفر الصلاحيات الاتية لديك [${p}]!**`,
    cmdDm: `> **🙄 يمكنك أستخدم هذا الأمر في الدردشات الخاصة فقط!**`
  },
  
  help: {
    info: {
      description: `لروية جميع الاوامر والإستعلام عن كيفية إستخدام أمر معين.`
    },
    ghTitle: `**قائمة الأوامر**`,
    ghFooter: (p) => `للمزيد من المعلومات حول أمر معين,\nأكتب ${p}help (Command)`,
    ghSections: [
      `**عامة**`,
      `**إدارية**`
    ],
    chTitle: (c) => `**الأمر: ${c}**`,
    chFooter: ``,
    chSections: [
      `**الأختصارات:**`,
      `**الاستخدام:**`,
      `**أمثلة للأمر:**`
    ],
    chNotFound: `> **🙄 - لايمكنني إيجاد هذا الأمر!**`
  },
  
  ping: {
    info: {
      description: `اختبار وقت استجابة البوت.`
    },
    pong: '> **🏓 بونق...**'
  },
  
  setlanguage: {
    info: {
      description: `يضبط لغتك المفضلة على البوت.`
    },
    notFoundLanguage: (l) => `> **🙄 اللغات المدعومة هي __${l}__**`,
    done: `> **✅ تم تغيير اللغة بنجاح!**`
  },
  
  setprefix: {
    info: {
      description: `يضبط البادئة المفضلة لديك على البوت.`
    },
  }
  
};