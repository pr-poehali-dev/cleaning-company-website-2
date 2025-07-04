import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Комплексная уборка офисных помещений",
      description: "Профессиональная уборка офисов любой сложности",
      icon: "Building2",
    },
    {
      id: 2,
      title: "Комплексная уборка промышленных помещений",
      description: "Уборка производственных и складских помещений",
      icon: "Factory",
    },
    {
      id: 3,
      title: "Уборка территорий механизированная и ручная",
      description: "Профессиональная уборка прилегающих территорий",
      icon: "TreePine",
    },
    {
      id: 4,
      title: "После строительные уборки помещений",
      description: "Специализированная уборка после ремонта и строительства",
      icon: "HardHat",
    },
    {
      id: 5,
      title: "Мытье окон и фасадов",
      description: "Профессиональное мытье окон и фасадов зданий",
      icon: "Home",
    },
    {
      id: 6,
      title: "Обслуживание в сфере замены грязезащитных ковров",
      description: "Сервисное обслуживание и замена грязезащитных покрытий",
      icon: "Layers",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Sparkles" className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                АКАДЕМИЯ ЧИСТОТЫ
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Наши услуги
              </a>
              <a
                href="#recommendations"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Рекомендации
              </a>
              <a
                href="#clients"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Наши клиенты
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать услугу
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              АКАДЕМИЯ ЧИСТОТЫ
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Профессиональные клининговые услуги{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Icon name="Calculator" className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              О компании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — ведущая федеральная клининговая компания с успешным опытом
              работы с 2012 года, предоставляющая полный спектр клининговых
              услуг по всей территории России. Специализируемся на обслуживании
              государственных и муниципальных объектов, а также предоставляем
              услуги корпоративным клиентам.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Award"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl font-bold">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Высокие стандарты качества и профессиональный подход к каждому
                  объекту
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Clock"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl font-bold">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Соблюдение сроков и обязательств, работа по договору
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Users"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl font-bold">Опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Многолетний опыт работы и команда квалифицированных
                  специалистов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Наши услуги */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Комплексные решения для поддержания чистоты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <Icon
                    name={service.icon}
                    className="h-12 w-12 text-blue-600 mb-4"
                  />
                  <CardTitle className="text-lg font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Рекомендации */}
      <section id="recommendations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Рекомендации
            </h2>
            <p className="text-xl text-gray-600">Отзывы наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle>Отличное качество уборки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Сотрудничаем с АКАДЕМИЕЙ ЧИСТОТЫ уже более года. Качество
                  услуг на высоком уровне, всегда соблюдают сроки и требования."
                </p>
                <p className="text-sm text-gray-500">
                  — Управляющая компания "Бизнес-Центр"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle>Профессиональный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Очень довольны работой команды. Особенно впечатлила
                  послестроительная уборка - результат превзошел все ожидания."
                </p>
                <p className="text-sm text-gray-500">
                  — Строительная компания "СтройИнвест"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Наши клиенты */}
      <section id="clients" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши клиенты
            </h2>
            <p className="text-xl text-gray-600">
              Нам доверяют ведущие компании
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <Card
                key={i}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Icon
                  name="Building2"
                  className="h-12 w-12 text-gray-400 mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Клиент {i + 1}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Building2"
                    className="h-6 w-6 text-blue-600 mr-3"
                  />
                  <div>
                    <p className="font-medium">ООО "Профи-ПЖК"</p>
                    <p className="text-gray-600">АКАДЕМИЯ ЧИСТОТЫ</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">+7 (XXX) XXX-XX-XX</p>
                    <p className="text-gray-600">Отдел продаж</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">info@academ-clean.ru</p>
                    <p className="text-gray-600">Электронная почта</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-gray-600">Время работы</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold">
                  Заказать услугу
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Услуга
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Выберите услугу</option>
                      <option>Уборка офисов</option>
                      <option>Уборка промышленных помещений</option>
                      <option>Уборка территорий</option>
                      <option>Послестроительная уборка</option>
                      <option>Мытье окон и фасадов</option>
                      <option>Грязезащитные ковры</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Sparkles" className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">АКАДЕМИЯ ЧИСТОТЫ</span>
              </div>
              <p className="text-gray-400">
                Профессиональные клининговые услуги{" "}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Уборка офисов</li>
                <li>Уборка промышленных помещений</li>
                <li>Уборка территорий</li>
                <li>Послестроительная уборка</li>
                <li>Мытье окон и фасадов</li>
                <li>Грязезащитные ковры</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ООО "Профи-ПЖК"</li>
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>info@academ-clean.ru</li>
                <li>Пн-Пт: 8:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 АКАДЕМИЯ ЧИСТОТЫ. ООО "Профи-ПЖК". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
