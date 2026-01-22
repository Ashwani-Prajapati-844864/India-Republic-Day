export default function Stories() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        background: "linear-gradient(to bottom, #ff9933, white, #138808)",
      }}
    >
      {/* Image Card */}
      <div className="w-full max-w-sm overflow-hidden transition-transform duration-500 bg-white shadow-2xl sm:max-w-md lg:max-w-2xl rounded-2xl hover:scale-105">
        <img
          src="/image/rep.png"
          alt="India"
          className="object-cover w-full h-64"
        />
      </div>

      {/* Info Box */}
      <div className="w-full max-w-sm p-6 mt-8 text-center bg-white shadow-xl sm:max-w-md lg:max-w-2xl rounded-xl">
        <h1 className="mb-4 text-3xl font-bold text-blue-900">
          गणतंत्र दिवस का महत्व
        </h1>

        <p className="mb-3 text-lg text-black">
          गणतंत्र दिवस का महत्व यह है कि यह भारत के संविधान लागू होने और देश के
          पूर्ण गणतंत्र बनने का प्रतीक है, जो 26 जनवरी 1950 को हुआ, जिसने भारत
          को एक लोकतांत्रिक, संप्रभु, समाजवादी और धर्मनिरपेक्ष राष्ट्र बनाया और
          सभी नागरिकों को न्याय व मौलिक अधिकारों की गारंटी दी। यह दिन स्वतंत्रता
          सेनानियों के बलिदान और 'विविधता में एकता' की भावना का जश्न मनाता है,
          और भारत के लोकतांत्रिक मूल्यों को मजबूत करता है।
        </p>

        <h1 className="mb-4 text-3xl font-bold text-blue-900">
          महत्व के मुख्य बिंदु
        </h1>
        <p className="text-lg text-gray-800">
          1. संविधान की स्थापना: यह दिन भारत के अपने संविधान के लागू होने का
          जश्न मनाता है, जिसने 1935 के भारत
        </p>
        <p className="text-lg text-gray-800">
          2. सरकार अधिनियम का स्थान लिया और देश के शासन का आधार बना। पूर्ण
          गणतंत्र: 26 जनवरी, 1950 को भारत एक संप्रभु, समाजवादी, धर्मनिरपेक्ष और
          लोकतांत्रिक गणराज्य बना, जहाँ शासन जनता द्वारा चुने गए प्रतिनिधियों
          द्वारा होता है।
        </p>
        <p className="text-lg text-gray-800">
          3. ऐतिहासिक महत्व: 1930 में भारतीय राष्ट्रीय कांग्रेस ने इसी दिन
          'पूर्ण स्वराज' (पूर्ण स्वतंत्रता) की घोषणा की थी, इसलिए इस ऐतिहासिक
          तिथि को संविधान लागू करने के लिए चुना गया।
        </p>
        <p className="text-lg text-gray-800">
          4. लोकतांत्रिक मूल्यों का प्रतीक: यह भारतीय लोकतंत्र की नींव, न्याय,
          समानता और नागरिकों के मौलिक अधिकारों के सिद्धांतों को दर्शाता है।
        </p>
        <p className="text-lg text-gray-800">
          5. राष्ट्रीय एकता: यह दिन 'विविधता में एकता' की भावना को दर्शाता है,
          जहाँ विभिन्न धर्मों और संस्कृतियों के लोग एक साथ मिलकर एक राष्ट्र का
          निर्माण करते हैं।
        </p>
      </div>
    </div>
  );
}
