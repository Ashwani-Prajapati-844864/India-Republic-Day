export default function Quiz() {
  return (
    <div
      className="flex justify-center min-h-screen p-4"
      style={{
        background: "linear-gradient(to bottom, #ff9933, white, #138808)",
      }}
    >
      {/* SAME WIDTH CONTAINER */}
      <div className="w-full max-w-3xl">

        {/* Image Card */}
        <div className="overflow-hidden bg-white shadow-2xl rounded-2xl 
                        transition-all duration-500 hover:scale-[1.02]">
          <img
            src="/image/great.png"
            alt="India"
            className="block object-contain w-full h-auto"
          />
        </div>

        {/* Info Box */}
        <div className="p-5 mt-6 text-center bg-white shadow-2xl rounded-2xl
                        transition-all duration-500 hover:scale-[1.02]">
          <h1 className="mb-4 text-2xl font-bold text-blue-900 sm:text-3xl">
            Happy Republic Day
          </h1>


          <p className="mb-3 text-base sm:text-lg">
            We will never let the sun of freedom set, we will never let the
          sacrifice of the martyrs be dishonored, as long as there is a drop of
          blood left, we will not let the lap of Mother India turn blue!!
          </p>

          <p className="text-base sm:text-lg">
            आज़ादी की कभी शाम ना होने देगे, शहीदों की कुरबानी बदनाम ना होने देगे,
          बची है जो एक बूँद लहू की तब तक भारत माँ का अंचल नीलम ना होने देगे !!
          </p>
        </div>

      </div>
    </div>
  );
}
