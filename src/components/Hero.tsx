import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Путь к <span className="text-primary">внутренней гармонии</span> начинается здесь
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Помогу вам разобраться с тревогами, найти баланс в отношениях и обрести уверенность в себе. 
              Индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-montserrat text-lg px-8 py-4"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на консультацию
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-montserrat text-lg px-8 py-4"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="/img/d40ca854-809c-4611-8b0d-49905d1f5389.jpg"
              alt="Психологическая консультация"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Star" className="text-yellow-500" size={24} />
                <div>
                  <p className="font-montserrat font-semibold">5.0</p>
                  <p className="text-sm text-gray-600">50+ отзывов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}