# intterra

# IntTerra Web Developer Testing Assignment

## Что вы найдете в проекте

1. В корне проекта лежит макет <b>FE-Test.sketch</b>
* Если вы на Mac OS воспользуйтесь приложением [Sketch](https://www.sketchapp.com)
* В противном случае его можно открыть в браузерном приложении [Figma](https://www.figma.com), в котором можно импортировать макеты <b>.sketch</b>
2. В папке <b>src</b> расположены все необходимые классы для реализации данного задания, они имитируют работу реального протокола, который мы используем.

## Задача

Создать Vue-приложение на основе макета и Mockup API

### Обязательная часть

Реализовать экран с табличным списком операций, проведенных на поле

1. Вывод операций в таблице
2. Возможность изменения сортировки операций, при нажатии на заголовки таблицы (Дата, Название операции и качество выполнения)
3. Возможность фильтрации операций посредством переключения кнопок <i>Запланированные операции</i> и <i>Выполненные операции</i>
4. В этом варианте задания игнорируйте кнопку <i>Добавить операцию</i> и открытие модального окна редактирования операции при клике на нее в таблице

### Дополнительная часть

Эту часть задания стоит выполнять только, если вы выполнили легко, быстро и качественно обязательную часть. Лучше сделайте максимально качественно обязательную часть, чем средне обе части.

1. Возможность создания новой операции через кнопку <i>Добавить операцию</i>, которая открывает модальное окно
2. Возможность редактирования существующей операции при клике на нее в таблице

## Рекомендации

* Самостоятельно настройте рабочий стек через vue-cli или любым другим удобным для вас способом
* Строки перевода импортируйте из файла <b>locales/intterra-ru-RU.json</b>
* Можете использовать как es6 так и typescript. Обратите внимание, что файлы в src на typescript'е и это стоит учитывать при сборке приложения - либо используйте ts-loader для webpack либо сразу скомпилируйте их в js и в проекте импортируйте сразу js-файлы. [Как скомпилировать TypeScript?](https://www.typescriptlang.org/)
* Можете использовать сторонние библиотеки, например moment и lodash
* Разбивайте приложение на переиспользуемые компоненты (Single File Components)
* Используйте ESLint
* Можете писать тесты, если чувствуете в них необходимость, но их наличие необязательно
* Приветствуется использование Vue Router и Vuex, особенно, если будете делать обе части задачи
* Где то в приложении у вас должен быть вот такой код, для работы с API:

``` javascript
import FieldService from 'src/FieldService';
import Operation, { OperationType, Assessment } from 'src/models/Operation';
...
const fieldService = new FieldService();
...
const operations = await fieldService.getOperations();
const firstOperationId = operations[0].id;

const operation = await fieldService.getOperation(firstOperationId);
...
const newOperation = new Operation({
        id: null,
        type: OperationType.HARVESTING,
        date: { year: 2018, month: 9, day: 25 },
        area: 85.5,
        comment: 'New Test Comment',
        assessment: Assessment.SATISFACTORILY
    });

const savedOperation = await fieldService.saveOperation(newOperation);

```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
