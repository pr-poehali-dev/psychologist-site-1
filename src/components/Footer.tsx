import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">
              Ушакова Юлия Валерьевна
            </h3>
            <p className="text-gray-400 mb-4">
              Профессиональная психологическая помощь для тех, кто готов изменить свою жизнь к лучшему.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#articles" className="hover:text-white transition-colors">Статьи</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Mail" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ушакова Юлия Валерьевна. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}