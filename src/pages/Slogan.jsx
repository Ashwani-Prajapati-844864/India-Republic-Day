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
          Happy Republic Day
        </h1>

        <p className="mb-3 text-lg text-black">
          We will never let the sun of freedom set, we will never let the
          sacrifice of the martyrs be dishonored, as long as there is a drop of
          blood left, we will not let the lap of Mother India turn blue!!
        </p>

        <p className="text-lg text-black">
          आज़ादी की कभी शाम ना होने देगे, शहीदों की कुरबानी बदनाम ना होने देगे,
          बची है जो एक बूँद लहू की तब तक भारत माँ का अंचल नीलम ना होने देगे !!
        </p>
      </div>
    </div>
  );
}
