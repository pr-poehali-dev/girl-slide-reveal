import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Snowflakes from '@/components/Snowflakes';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://cdn.poehali.dev/files/9ef0e945-8ae3-498c-9abc-4cefe55a1726.jpg',
      text: 'Милая помнишь эту фотку она мне очень нравится, ты у меня такая милая на самом деле))',
      hasImage: true
    },
    {
      image: 'https://cdn.poehali.dev/files/26686ddb-78f7-44cf-878e-1bc4ab3a201b.jpg',
      text: 'А эту помнишь ??)',
      hasImage: true
    },
    {
      image: '',
      text: 'Милая моя спасибо тебе за эти девять месяцев с тобой, я не о чем не пожалел, люблю тебя очень сильно тыковка)',
      hasImage: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

      <div className="relative z-10 w-full max-w-4xl">
        <div className="animate-scale-in flex flex-col items-center gap-6">
          {slides[currentSlide].hasImage ? (
            <>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-pink-300 shadow-2xl">
                <img 
                  src={slides[currentSlide].image}
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
                    {slides[currentSlide].text}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="relative w-full max-w-2xl">
              <Snowflakes />
              <div className="relative bg-gradient-to-br from-red-50 to-green-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-4 border-red-400 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-600/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-600/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4 text-4xl">🎄</div>
                <div className="absolute top-4 right-4 text-4xl">🎄</div>
                <div className="absolute bottom-4 left-4 text-4xl">🎁</div>
                <div className="absolute bottom-4 right-4 text-4xl">🎁</div>
                
                <div className="absolute top-8 left-1/4 text-2xl animate-float">⭐</div>
                <div className="absolute top-12 right-1/4 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
                
                <div className="relative text-center space-y-6">
                  <div className="inline-block animate-float">
                    <Icon name="Heart" size={72} className="text-red-500" />
                  </div>
                  <p className="text-xl md:text-3xl leading-relaxed text-gray-800 font-semibold">
                    {slides[currentSlide].text}
                  </p>
                  <div className="flex justify-center gap-2 pt-4">
                    <span className="text-2xl">❄️</span>
                    <Icon name="Heart" size={24} className="text-red-500" />
                    <span className="text-2xl">❄️</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 items-center mt-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur border-pink-300 hover:bg-pink-100"
            >
              <Icon name="ChevronLeft" size={24} className="text-pink-600" />
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-pink-500 w-8' 
                      : 'bg-pink-300 hover:bg-pink-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur border-pink-300 hover:bg-pink-100"
            >
              <Icon name="ChevronRight" size={24} className="text-pink-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}