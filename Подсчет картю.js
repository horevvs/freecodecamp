// Подсчет карт
// В игре казино «Блэкджек» игрок может определить, есть ли у него преимущество в следующей раздаче над казино, отслеживая относительное количество старших и младших карт, оставшихся в колоде. Это называется подсчетом карт.

// Наличие большего количества старших карт в колоде идет на пользу игроку. Каждой карте присвоено значение в соответствии с таблицей ниже. Когда счет положительный, игроку следует сделать большую ставку. Когда счет равен нулю или отрицателен, игроку следует делать низкую ставку.

// Подсчитать изменение	Карты
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, «J», «Q», «К», «А»
// Вы напишете функцию подсчета карт. Он получит cardпараметр, который может быть числом или строкой, и увеличит или уменьшит глобальную countпеременную в соответствии со значением карты (см. таблицу). Затем функция вернет строку с текущим счетчиком и строку Bet, если счетчик положительный, Holdнулевой или отрицательный. Текущий счет и решение игрока ( Betили Hold) должны быть разделены одним пробелом.

// Пример выходных данных: -3 Hold или5 Bet

// Подсказка
// НЕ ​​сбрасывайте countзначение в 0, если значение равно 7, 8 или 9.
// НЕ возвращайте массив.
// НЕ включайте в вывод кавычки (одинарные или двойные).

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');