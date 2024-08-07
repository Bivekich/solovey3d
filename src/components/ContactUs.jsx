import { useState } from 'react';
import Section from './Section';
import Button from './Button';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contactLink, setContactLink] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных формы
    alert('Форма отправлена');
  };

  return (
    <Section className="overflow-hidden" id="contact-us">
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-n-7 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="service" className="block text-sm font-medium mb-2">Что вас интересует?</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="block w-full rounded-md shadow-sm text-gray-100 sm:text-sm"
              required
            >
              <option value="">Выберите услугу</option>
              <option value="3d-printing">3D Печать</option>
              <option value="design">Дизайн</option>
              <option value="consulting">Консультации</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md shadow-sm text-gray-100 sm:text-sm"
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="contactMethod" className="block text-sm font-medium mb-2">Способ связи</label>
            <input
              type="text"
              id="contactMethod"
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
              className="block w-full rounded-md shadow-sm text-gray-100 sm:text-sm"
              placeholder="Введите ваш способ связи (номер телефона, соцсеть и т.д.)"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="contactLink" className="block text-sm font-medium mb-2">Ссылка на способ связи</label>
            <input
              type="url"
              id="contactLink"
              value={contactLink}
              onChange={(e) => setContactLink(e.target.value)}
              className="block w-full rounded-md shadow-sm text-gray-100 sm:text-sm"
              placeholder="Введите ссылку (если есть)"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium mb-2">Комментарий</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block w-full rounded-md shadow-sm text-gray-100 sm:text-sm"
              rows="4"
              placeholder="Введите ваш комментарий"
            />
          </div>
          <Button
            type="submit"
            className="w-full mb-6"
          >
            Отправить
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default ContactUs;
