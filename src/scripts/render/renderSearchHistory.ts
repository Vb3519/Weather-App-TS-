const renderSearchHistory = (elem: Element | null) => {
  elem?.classList.add('active-elem');

  // Обработчик который уберет активный класс и удалится:
  // это необходимо т.к. renderSearchHistory() вешается на кнопку, а закрывается фон-враппер по клику на сам этот фон.
  const handleClick = (): void => {
    elem?.classList.remove('active-elem');
    elem?.removeEventListener('click', handleClick);
  };

  elem?.addEventListener('click', handleClick);
};

export default renderSearchHistory;
