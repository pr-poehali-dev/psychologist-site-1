import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function Testimonials() {
  return (
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
  );
}