import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BookingProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function Booking({ formData, setFormData, handleSubmit }: BookingProps) {
  return (
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
  );
}