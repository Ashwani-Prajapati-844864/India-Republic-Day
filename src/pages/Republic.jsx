export default function Stories() {
  return (
    <div
      className="flex justify-center min-h-screen p-4 sm:p-6"
      style={{
        background: "linear-gradient(to bottom, #ff9933, white, #138808)",
      }}
    >
      {/* SAME WIDTH CONTAINER */}
      <div className="w-full max-w-3xl">
        {/* Image Card */}
        <div
          className="overflow-hidden bg-white shadow-2xl rounded-2xl 
                        transition-all duration-500 hover:scale-[1.02]"
        >
          <img
            src="/image/rep.png"
            alt="India"
            className="block object-contain w-full h-auto"
          />
        </div>

        {/* Info Box */}
        <div
          className="p-5 mt-6 text-center bg-white shadow-2xl rounded-2xl
                        transition-all duration-500 hover:scale-[1.02]"
        >
          <h1 className="mb-4 text-2xl font-bold text-blue-900 sm:text-3xl">
            गणतंत्र दिवस का महत्व
          </h1>

          <p className="mb-3 text-base text-black sm:text-lg">
            गणतंत्र दिवस का महत्व यह है कि यह भारत के संविधान लागू होने और देश
            के पूर्ण गणतंत्र बनने का प्रतीक है, जो 26 जनवरी 1950 को हुआ, जिसने
            भारत को एक लोकतांत्रिक, संप्रभु, समाजवादी और धर्मनिरपेक्ष राष्ट्र
            बनाया और सभी नागरिकों को न्याय व मौलिक अधिकारों की गारंटी दी। यह दिन
            स्वतंत्रता सेनानियों के बलिदान और 'विविधता में एकता' की भावना का
            जश्न मनाता है, और भारत के लोकतांत्रिक मूल्यों को मजबूत करता है।
          </p>

          <h2 className="mb-3 text-xl font-bold text-blue-900 sm:text-2xl">
            महत्व के मुख्य बिंदु
          </h2>

          <p className="mb-3 text-base text-left text-black sm:text-lg">
            1. संविधान की स्थापना: यह दिन भारत के अपने संविधान के लागू होने का
            जश्न मनाता है, जिसने 1935 के भारत सरकार अधिनियम का स्थान लिया।
          </p>

          <p className="mb-3 text-base text-left text-black sm:text-lg">
            2. पूर्ण गणतंत्र: 26 जनवरी, 1950 को भारत एक संप्रभु, समाजवादी,
            धर्मनिरपेक्ष और लोकतांत्रिक गणराज्य बना।
          </p>

          <p className="mb-3 text-base text-left text-black sm:text-lg">
            3. ऐतिहासिक महत्व: 1930 में भारतीय राष्ट्रीय कांग्रेस ने इसी दिन
            'पूर्ण स्वराज' की घोषणा की थी।
          </p>

          <p className="mb-3 text-base text-left text-black sm:text-lg">
            4. लोकतांत्रिक मूल्य: न्याय, समानता और मौलिक अधिकारों की नींव।
          </p>

          <p className="mb-3 text-base text-left text-black sm:text-lg">
            5. राष्ट्रीय एकता: विविधता में एकता की भावना।
          </p>
        </div>
      </div>
    </div>
  );
}
