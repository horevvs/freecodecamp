// Доступ к вложенным объектам
// Доступ к подсвойствам объектов можно получить, соединив вместе обозначения точки или скобки.

// Вот вложенный объект:

// const ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;
// ourStorage.cabinet["top drawer"].folder2будет строка secretsи ourStorage.desk.drawerбудет строка stapler.

// Получите доступ к myStorageобъекту и присвойте содержимое свойства glove boxпеременной gloveBoxContents. По возможности используйте точечную запись для всех свойств, в противном случае используйте запись в скобках.

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents =myStorage.car.inside["glove box"];