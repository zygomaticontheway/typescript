## задание

Создайте компонент FormGender.tsx
В нем сделайте форму с одним input для ввода имени
На onSubmit передавайте имя в api через url `https://api.genderize.io/?name=dmitrii`
После 'name=' передавайте строку из формы
Выведите данные на странице


https://genderize.io/documentation
https://api.genderize.io?name=peter

## задание

1. В FormGender.tsx добавьте валидацию для строки
2. Сообщение об ошибке должно быть абсолютно спозиционированно относительно input и выведено в небольшом контейнере сбоку снизу.