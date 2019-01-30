(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5d02"],{"5d02":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",value:"docs",expression:"'docs'",modifiers:{deep:!0}}],staticClass:"components"},[o("h1",[n._v("Компоненты")]),o("p",[n._v("Компоненты предназначены для упрощения разработки за счет сочетания тесно связанных функций построения и обработки узлов.")]),o("p",[n._v("Компонент содержит билдер и воркер")]),o("Code",{attrs:{source:"componentPure"}}),o("p",[n._v("Билдер и воркер выполняются независимо друг от друга (первый работает один раз при создании узла, второй - при каждой обработке).\nНа самом деле они тесно связаны друг с другом в пределах одного узла.")]),o("p",[n._v("Регистрация компонента:")]),o("Code",{attrs:{source:"registerComponent"}}),o("h2",[n._v("Билдеры узлов")]),o("p",[n._v("Эти методы должны модифицировать экземпляр Node и необходимы редактору для восстановления всех узлов из данных JSON, поскольку данные JSON должны хранить только статическую информацию, а не логику узлов. ")]),o("p",[n._v("Каждый из билдеров должен быть в соответствующем компоненте:")]),o("Code",{attrs:{source:"builder"}}),o("h2",[n._v("Воркеры узлов")]),o("p",[n._v(" Воркер - это функция для обработки данных узла. Они получают параметры узла, входы, выходы, и аргументы, передаваемые при обработке (опционально). \nДанные узла (не экземпляр узла), входы и выходы соответствуют определениям в билдерах (см. выше).")]),o("Code",{attrs:{source:"worker"}}),o("p",[n._v("Как вы заметили, вы можете использовать асинхронные функции (или Promise для предыдущих версий ES). Это необходимо для выполнения сложных вычислений без блокировки основного потока (например, в WebWorker).")])],1)},s=[],p=o("2877"),r=function(n){n.options.code||(n.options.code={}),n.options.code["componentPure"]='class MyComponent extends Rete.Component {\n  constructor() {\n    super("My Component"); // name\n  }\n\n  builder(node) {\n    /// modify node\n  }\n\n  worker(node, inputs, outputs) {\n    /// process data\n  }\n}'},u=r,d=function(n){n.options.code||(n.options.code={}),n.options.code["registerComponent"]="var comp = new MyComponent();\n\neditor.register(comp);\nengine.register(comp);"},c=d,i=function(n){n.options.code||(n.options.code={}),n.options.code["builder"]="class NumberComponent extends Rete.Component {\n  constructor() {\n    super('Number');\n  }\n\n  builder(node){\n    // modify node\n    node.data.num = 3;\n    node.addInput(new Rete.Input('key1', 'Number', numSocket));\n    node.addOutput(new Rete.Output('key2', 'Number', numSocket));\n  }\n}"},m=i,a=function(n){n.options.code||(n.options.code={}),n.options.code["worker"]="class NumberComponent extends Rete.Component {\n  constructor(){\n    super('Number');\n  }\n\n  async worker(node, inputs, outputs){\n    // inputs['key1']\n    outputs['key2'] = node.data.num;\n  }\n}"},f=a,l={},v=Object(p["a"])(l,t,s,!1,null,null,null);"function"===typeof u&&u(v),"function"===typeof c&&c(v),"function"===typeof m&&m(v),"function"===typeof f&&f(v),v.options.__file="index.vue";e["default"]=v.exports}}]);
//# sourceMappingURL=5d02.8bea4970.js.map