import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      icon: 'MapPin',
      text: 'В наличии в Екатеринбурге'
    },
    {
      icon: 'Package',
      text: 'Полная комплектация: шкаф + зажим + ЗИП'
    },
    {
      icon: 'Shield',
      text: 'Гарантия 12 месяцев'
    },
    {
      icon: 'Truck',
      text: 'Доставка по России и СНГ'
    }
  ];

  const specifications = [
    { label: 'Мощность двигателя, кВ', value: '90' },
    { label: 'Эксцентриковый момент, кг/м', value: '0-58' },
    { label: 'Центробежная сила, кН', value: '0-579' },
    { label: 'Частота, об/мин', value: '0-960' },
    { label: 'Максимальная амплитуда, мм', value: '11.5' },
    { label: 'Максимальное натяжение троса, кН', value: '254' },
    { label: 'Габариты, мм', value: '1850х1300х2500' },
    { label: 'Вес без зажима, кг', value: '5700' },
    { label: 'Сечение кабеля, мм²', value: '50' },
    { label: 'Зажим', value: 'одинарный/двойной' },
    { label: 'Диапазон применения зажима, мм', value: '530-1500' },
    { label: 'Мощность генератора, кВ', value: '250' },
    { label: 'Минимальная грузоподъемность крана, T', value: '50' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    const emailBody = `
Новая заявка с сайта KGS-Ural

Имя: ${formData.name}
Телефон: ${formData.phone}
Предложение: Yongan DZJ-90 - 8 150 000 ₽
    `.trim();

    const mailtoLink = `mailto:info@kgs-ural.ru?subject=Заявка на Yongan DZJ-90&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Заявка отправлена',
        description: 'Мы свяжемся с вами в ближайшее время'
      });
      setFormData({ name: '', phone: '' });
    }, 1000);
  };

  const handleCall = () => {
    window.location.href = 'tel:88006007465';
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/40 bg-[#272D49] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" alt="KGS" className="h-12 w-auto hover:opacity-80 transition-opacity" />
              </a>
              <div className="border-l border-border/40 pl-4">
                <p className="text-base font-medium text-foreground leading-tight">
                  Производство и поставка оборудования для<br />строительства свайных фундаментов
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <a href="tel:88006007465" className="text-sm font-semibold hover:text-[#F6A327] transition-colors">
                  8 (800) 600-74-65
                </a>
                <a href="tel:+73433467475" className="text-sm font-semibold hover:text-[#F6A327] transition-colors">
                  8 (343) 346-74-75
                </a>
              </div>
              <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Icon name="Send" size={24} className="text-[#F6A327]" />
              </a>
              <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#F6A327] transition-colors">
                kgs-ural.ru
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #273369 0%, #272D49 100%)' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-[#F6A327]/10 border border-[#F6A327]/30 rounded-md px-4 py-2">
                <span className="text-sm font-semibold text-[#F6A327] uppercase tracking-wide">
                  СПЕЦПРЕДЛОЖЕНИЕ
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Вибропогружатель<br />
                электрический крановый<br />
                <span className="text-[#F6A327]">Yongan DZJ-90</span>
              </h1>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground/90">
                    <div className="w-10 h-10 rounded-lg bg-[#F6A327]/10 border border-[#F6A327]/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={20} className="text-[#F6A327]" />
                    </div>
                    <span className="text-base">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-[#F6A327]/20 animate-scale-in">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground uppercase tracking-wide">
                    Специальная цена
                  </span>
                  <div className="bg-[#F6A327]/20 text-[#F6A327] px-3 py-1 rounded-full text-sm font-bold">
                    -4%
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold mb-1">8 150 000 ₽</div>
                  <div className="text-sm text-muted-foreground">с НДС</div>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleCall} className="flex-1 bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-[#F6A327] hover:bg-[#F6A327]/90 text-[#273369]">
                    <Icon name="Send" size={18} className="mr-2" />
                    Оставить заявку
                  </Button>
                </div>
              </Card>
            </div>

            <div className="relative animate-fade-in flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F6A327]/20 to-transparent rounded-2xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/files/Вибрик без фона.png" 
                alt="Yongan DZJ-90" 
                className="relative w-full max-w-lg h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #273369 0%, #272D49 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Характеристики Yongan DZJ-90
          </h2>
          <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-[#F6A327]/10">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/40 last:border-0">
                  <span className="text-muted-foreground text-sm">{spec.label}</span>
                  <span className="font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="contact-form" className="py-16 bg-[#272D49]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Оставьте заявку
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Наши специалисты свяжутся с вами в ближайшее время
            </p>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-[#F6A327]/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Ваше имя <span className="text-[#F6A327]">*</span>
                  </label>
                  <Input 
                    placeholder="Иван Иванов" 
                    className="bg-background/50"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Телефон <span className="text-[#F6A327]">*</span>
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="bg-background/50"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F6A327] hover:bg-[#F6A327]/90 text-[#273369] font-semibold"
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-[#272D49] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" alt="KGS" className="h-10 w-auto hover:opacity-80 transition-opacity" />
              </a>
              <span className="text-sm text-muted-foreground">© 2016-2026 КоперГруппСервис</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <a href="tel:88006007465" className="text-sm hover:text-[#F6A327] transition-colors">
                  8 (800) 600-74-65
                </a>
                <a href="tel:+73433467475" className="text-sm hover:text-[#F6A327] transition-colors">
                  8 (343) 346-74-75
                </a>
              </div>
              <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Icon name="Send" size={20} className="text-[#F6A327]" />
              </a>
              <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F6A327] transition-colors">
                kgs-ural.ru
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
