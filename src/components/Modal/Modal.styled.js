import styled from 'styled-components';

.modal {
  display: block; /* Показати модальне вікно */
  position: fixed;
  z-index: 1; /* Налаштувати вікно поверх інших елементів */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Прозорий фон */
  overflow: auto; /* Дозволити прокрутку, якщо контент модального вікна довший за висоту вікна */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* Центрувати модальне вікно по вертикалі та горизонталі */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Ширина контенту модального вікна */
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
