import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [showMessage, setShowMessage] = useState(false);

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

      <Card className="relative z-10 max-w-2xl w-full p-8 md:p-12 bg-white/80 backdrop-blur-xl border-2 border-pink-200/50 shadow-2xl animate-scale-in">
        <div className="text-center space-y-6">
          <div className="inline-block animate-float">
            <Icon name="Heart" size={64} className="text-pink-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Моё признание
          </h1>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              В эту зимнюю ночь хочу сказать тебе что-то важное...
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ты — как первый снег, который преображает всё вокруг. 
              С тобой каждый день становится волшебным, а мир — светлее и теплее.
            </p>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-semibold">
              Я влюблён в тебя. 💕
            </p>
          </div>

          <div className="pt-6 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <Button 
              size="lg"
              onClick={() => setShowMessage(true)}
              className="text-lg px-8 py-6 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Ответить на признание
            </Button>
          </div>

          {showMessage && (
            <div className="mt-6 p-4 bg-purple-50 border-2 border-purple-200 rounded-xl animate-scale-in">
              <p className="text-purple-700 font-medium">
                ✨ Спасибо, что открыл(а) своё сердце! ✨
              </p>
            </div>
          )}
        </div>
      </Card>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-10 opacity-60">
        <p className="text-sm text-gray-600">
          Создано с любовью ❄️
        </p>
      </div>
    </div>
  );
}
