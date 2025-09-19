import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const articles = [
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
];

export default function Articles() {
  return (
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
          {articles.map((article, index) => (
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
  );
}