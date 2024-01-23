// Определите класс HTML в JSX
// Теперь, когда вы освоились с написанием JSX, вам может быть интересно, чем он отличается от HTML.

// До сих пор может показаться, что HTML и JSX — это одно и то же.

// Одним из ключевых отличий JSX является то, что вы больше не можете использовать это слово classдля определения классов HTML. Это потому, что classэто зарезервированное слово в JavaScript. Вместо этого JSX использует className.

// Фактически, соглашение об именах для всех атрибутов HTML и ссылок на события в JSX становится CamelCase. Например, событие клика в JSX — это onClick, а не onclick. Аналогично onchangeстановится onChange. Хотя это небольшая разница, о ней важно помнить, двигаясь вперед.

// Примените класс myDivк divуказанному в коде JSX.

const JSX = (
    <div className='myDiv' >
      <h1>Add a class to this div</h1>
    </div>
  );