import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here would be the form submission logic
    alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      title: 'Индивидуальная терапия',
      description: 'Персональная работа с вашими запросами и потребностями',
      icon: 'User',
      price: 'от 3000₽'
    },
    {
      title: 'Семейная терапия',
      description: 'Работа с парами и семьями для улучшения отношений',
      icon: 'Heart',
      price: 'от 4500₽'
    },
    {
      title: 'Групповая терапия',
      description: 'Работа в группе для проработки схожих вопросов',
      icon: 'Users',
      price: 'от 2000₽'
    },
    {
      title: 'Онлайн консультации',
      description: 'Удобный формат для тех, кто не может приехать лично',
      icon: 'Video',
      price: 'от 2500₽'
    }
  ];

  const testimonials = [
    {
      name: 'Анна С.',
      text: 'Юлия Валерьевна помогла мне разобраться с тревожностью. Теперь я чувствую себя намного увереннее.',
      rating: 5
    },
    {
      name: 'Михаил К.',
      text: 'Профессиональный подход и внимательное отношение. Рекомендую всем, кто ищет квалифицированного специалиста.',
      rating: 5
    },
    {
      name: 'Елена В.',
      text: 'Семейная терапия помогла нам с мужем наладить отношения. Спасибо за деликатную работу!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-xl text-gray-900">
              Ушакова Юлия Валерьевна
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#articles" className="text-gray-700 hover:text-primary transition-colors">Статьи</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>

            <Button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:block font-montserrat"
            >
              Записаться
            </Button>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
                <a href="#articles" className="text-gray-700 hover:text-primary transition-colors">Статьи</a>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
                <Button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full font-montserrat"
                >
                  Записаться
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональная психологическая помощь в различных форматах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-montserrat text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <p className="font-montserrat font-semibold text-primary text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят те, кому я уже помогла
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-montserrat font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Полезные статьи
            </h2>
            <p className="text-xl text-gray-600">
              Материалы для самопознания и развития
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Как справиться с тревогой: 5 простых техник',
                excerpt: 'Практические методы управления тревожными состояниями в повседневной жизни.',
                date: '15 сентября 2024'
              },
              {
                title: 'Здоровые границы в отношениях',
                excerpt: 'Почему важно уметь говорить "нет" и как это делать экологично.',
                date: '10 сентября 2024'
              },
              {
                title: 'Эмоциональное выгорание: признаки и профилактика',
                excerpt: 'Как распознать выгорание на ранней стадии и что с этим делать.',
                date: '5 сентября 2024'
              }
            ].map((article, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-montserrat group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.excerpt}</p>
                  <div className="mt-4 flex items-center text-primary group-hover:text-primary/80 transition-colors">
                    <span className="text-sm font-semibold">Читать далее</span>
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Записаться на консультацию
            </h2>
            <p className="text-xl text-gray-600">
              Сделайте первый шаг к изменениям в своей жизни
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Расскажите о вашем запросе
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите, с чем вы хотели бы поработать..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-montserrat text-lg">
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Отправляя заявку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;