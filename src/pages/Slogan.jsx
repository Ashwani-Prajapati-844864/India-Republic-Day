export default function Quiz() {
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
          src="/great.png"
          alt="India"
          className="object-cover w-full h-64"
        />
      </div>

      {/* Info Box */}
      <div className="w-full max-w-sm p-6 mt-8 text-center bg-white shadow-xl sm:max-w-md lg:max-w-2xl rounded-xl">
        <h1 className="mb-4 text-3xl font-bold text-blue-900">
          Incredible India
        </h1>

        <p className="mb-3 text-lg text-gray-700">
          India is a land of diversity, culture, history and unity. From the
          Himalayas to the oceans, every corner tells a story of pride and
          heritage.
        </p>

        <p className="text-lg text-gray-800">
          भारत विविधता, संस्कृति, इतिहास और एकता की भूमि है। हिमालय से लेकर
          महासागरों तक, हर कोना गर्व और विरासत की कहानी कहता है।
        </p>
      </div>
    </div>
  );
}
