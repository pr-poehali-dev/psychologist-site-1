import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/img/4cfa6628-ef5c-402a-9894-35d4afcefaab.jpg"
              alt="Символы психологии"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Меня зовут Юлия Валерьевна Ушакова. Я практикующий психолог с опытом работы более 8 лет. 
              Моя специализация — работа с тревожными расстройствами, депрессией, семейными конфликтами 
              и личностным ростом.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Верю, что каждый человек обладает внутренними ресурсами для преодоления трудностей. 
              Моя задача — помочь вам их найти и использовать.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="GraduationCap" className="text-primary" size={24} />
                <span>МГУ им. М.В. Ломоносова, факультет психологии</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Award" className="text-primary" size={24} />
                <span>Сертифицированный специалист по КПТ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" className="text-primary" size={24} />
                <span>500+ успешных случаев</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}