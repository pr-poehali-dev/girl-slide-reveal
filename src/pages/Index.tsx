export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/43d9a48a-08f9-4ab0-904e-96516fe3dde3/files/85031137-658f-4f4e-acd1-3e75f113b417.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 via-purple-100/30 to-pink-50/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 animate-scale-in flex flex-col items-center gap-6">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl">
          <img 
            src="https://cdn.poehali.dev/files/9ef0e945-8ae3-498c-9abc-4cefe55a1726.jpg" 
            alt="Фото"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative w-72 h-56 md:w-96 md:h-72 flex items-center justify-center animate-float">
          <svg viewBox="0 0 100 90" className="w-full h-full absolute inset-0">
            <path
              d="M50,85 C50,85 15,60 15,35 C15,25 20,15 30,15 C40,15 45,20 50,30 C55,20 60,15 70,15 C80,15 85,25 85,35 C85,60 50,85 50,85 Z"
              fill="#ffc0cb"
              stroke="#ff69b4"
              strokeWidth="2"
            />
          </svg>
          <div className="relative z-10 text-center px-8 py-4">
            <p className="text-sm md:text-base leading-relaxed text-pink-900">
              Милая помнишь эту фотку она мне очень нравится, ты у меня такая милая на самом деле))
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}