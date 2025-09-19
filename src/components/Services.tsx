import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function Services() {
  return (
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
  );
}