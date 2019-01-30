(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5e4a"],{"5e4a":function(o,n,t){"use strict";t.r(n);var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",value:"docs",expression:"'docs'",modifiers:{deep:!0}}],staticClass:"editor"},[t("h1",[o._v("Редактор")]),t("p",[o._v("Редактор представляет собой область с узлами и соединениями между их сокетами. Доступны следующие возможности:")]),o._m(0),o._m(1),t("Code",{attrs:{source:"editorInstance"}}),t("p",[o._v("параметр demo@0.1.0 - это идентификатор вашего приложения/редактора.")]),t("p",[o._v("контейнер представляет собой простой HTML-элемент")]),t("h2",[o._v("Идентификатор")]),t("p",[o._v("Идентификатор состоит из имени приложения и версии. Версия необходима для контроля импорта данных в Ваш редактор, поскольку данные из предыдущих версий могут быть несовместимы с текущей версией Вашего редактора (не путать с версией фреймворка). То же правило существует для Движка, который позволяет предотвратить неожиданный результат из-за несовместимости данных с реализацией Воркеров в узлах")]),t("h2",[o._v("Импорт/экспорт данных")]),t("p",[o._v("Чтобы сохранить добавленные узлы в редакторе и все соединения с ними, просто вызовите метод toJSON объекта NodeEditor")]),t("Code",{attrs:{source:"toJson"}}),t("p",[o._v("Данные имеют следующую структуру:")]),t("Code",{attrs:{source:"dataStructure"}}),t("p",[o._v("С таким же успехом вы можете восстановить содержимое редактора, используя эти данные (при условии, что версии ваших данных и Редактора совпадают)")]),t("Code",{attrs:{source:"fromJson"}}),t("p",[o._v("В случае различных идентификаторов данных и редактора, метод fromJSON выбрасывает исключение. Вы должны поймать исключение и уведомить пользователя или попытаться адаптировать данные к новой версии вашего редактора")])],1)},i=[function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("ul",[t("li",[o._v("Взаимодействие с рабочей областью (перемещение, масштабирование) и управление узлами (перемещение, добавление, удаление)")]),t("li",[o._v("Отображение соединений, узлов, их входов/выходов и контролов")]),t("li",[o._v("Обработка событий редактора")]),t("li",[o._v("Импорт/экспорт схемы в JSON формате")]),t("li",[o._v("Расширение функционала с помощью плагинов")]),t("li",[o._v("Кастомизация рабочей области, узлов и соединений")])])},function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("p",[o._v("Создайте экземпляр "),t("i",[o._v("NodeEditor")])])}],s=t("2877"),d=function(o){o.options.code||(o.options.code={}),o.options.code["editorInstance"]="const editor = new Rete.NodeEditor('demo@0.1.0', container);"},c=d,r=function(o){o.options.code||(o.options.code={}),o.options.code["toJson"]="const data = editor.toJSON();"},a=r,u=function(o){o.options.code||(o.options.code={}),o.options.code["dataStructure"]='{\n   "id": "demo@0.1.0",\n   "nodes": {\n      "1": {\n         "id": 1,\n         "data": {\n            "num": 2\n         },\n         "inputs": {},\n         "outputs": {\n            "num": {\n               "connections": [{\n                  "node": 3,\n                  "input": "num1",\n                  "data": {}\n               }]\n            }\n         },\n         "position": [80, 200],\n         "name": "Number"\n      }\n   }\n}'},p=u,_=function(o){o.options.code||(o.options.code={}),o.options.code["fromJson"]="await editor.fromJSON(data);"},v=_,f={},l=Object(s["a"])(f,e,i,!1,null,null,null);"function"===typeof c&&c(l),"function"===typeof a&&a(l),"function"===typeof p&&p(l),"function"===typeof v&&v(l),l.options.__file="index.vue";n["default"]=l.exports}}]);
//# sourceMappingURL=5e4a.3930a495.js.map