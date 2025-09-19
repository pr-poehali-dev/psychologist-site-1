import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь со мной удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">Телефон</h3>
            <p className="text-gray-600">+7 (999) 123-45-67</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">julia.ushakova@example.com</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" className="text-primary" size={28} />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">Адрес</h3>
            <p className="text-gray-600">г. Москва, ул. Примерная, д. 10</p>
          </div>
        </div>
      </div>
    </section>
  );
}