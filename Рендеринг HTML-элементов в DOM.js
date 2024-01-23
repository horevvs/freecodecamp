// Рендеринг HTML-элементов в DOM
// Итак, вы узнали, что JSX — это удобный инструмент для написания читаемого HTML внутри JavaScript. С помощью React мы можем визуализировать этот JSX непосредственно в HTML DOM, используя API рендеринга React, известный как ReactDOM.

// ReactDOM предлагает простой метод рендеринга элементов React в DOM, который выглядит следующим образом: ReactDOM.render(componentToRender, targetNode), где первый аргумент — это элемент или компонент React, который вы хотите отобразить, а второй аргумент — это узел DOM, в который вы хотите отобразить компонент. .

// Как и следовало ожидать, ReactDOM.render()его следует вызывать после объявления элемента JSX, точно так же, как вы должны объявлять переменные перед их использованием.

// Редактор кода имеет простой компонент JSX. Используйте ReactDOM.render()метод для отображения этого компонента на странице. Вы можете передать определенные элементы JSX непосредственно в качестве первого аргумента и использовать их document.getElementById()для выбора узла DOM для их рендеринга. Существует divвозможность id='challenge-node'использования. Убедитесь, что вы не меняете JSXконстанту.

const JSX = (
    <div id=''>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  
  ReactDOM.render(JSX, document.getElementById("challenge-node"));