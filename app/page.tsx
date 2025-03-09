import Head from "next/head";

export default function ProtectionActivated() {
  // جلب مستوى الحماية من ENV (إما "low" أو "high")
  const protectionLevel = process.env.NEXT_PUBLIC_PROTECTION_LEVEL;

  // تحديد النص المناسب لكل مستوى
  const levelText =
    protectionLevel === "high"
      ? "العَالِي 🔒🔝"
      : protectionLevel === "low"
      ? "المُنخَفِض 🔓"
      : "غير محدد ❓";

  const description =
    protectionLevel === "high"
      ? "لقد قمت بتفعيل أعلى مستوى من الحماية، مما يوفر أقصى قدر من الأمان."
      : protectionLevel === "low"
      ? "لقد قمت بتفعيل مستوى الحماية المنخفض، وهو يوفر حماية أساسية فقط."
      : "لم يتم تحديد مستوى الحماية بشكل صحيح، يرجى مراجعة الإعدادات.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-dark-one to-dark-two text-white text-center">
      <Head>
        <title>تم تفعيل الحماية</title>
      </Head>

      <div className="flex items-center justify-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold text-bright-one">
          🎉 مبروك!
        </h1>
        <span className="bg-white w-[2px] h-10"></span>
        <h2 className="text-4xl md:text-5xl font-bold text-bright-one">
          تَمَّ تَفعِيلُ الحِمَايَةِ
        </h2>
      </div>

      <div className="mt-6 font-medium">
        <p className="text-lg text-bright-two max-w-lg">{description}</p>
      </div>

      <div className="mt-8 px-6 py-3 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg">
        مستوى الحماية: {levelText}
      </div>
    </div>
  );
}
