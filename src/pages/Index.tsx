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

      <div className="relative z-10 animate-scale-in">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl">
          <img 
            src="https://cdn.poehali.dev/files/9ef0e945-8ae3-498c-9abc-4cefe55a1726.jpg" 
            alt="Фото"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
