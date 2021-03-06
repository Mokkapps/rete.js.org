<template lang="pug">
.main(v-t9n.deep="'docs'")
  h1 Введение
  img(:src="preview")
  p Rete.js это модульный фреймворк для визуального программирования. Rete позволяет Вам создавать редакторы узлов прямо в браузере. Вы можете определить узлы и воркеры, которые возволят пользователям создать инструкции для обработки данных в Вашем редакторе без единой строки кода.
  
  h1 Начало работы
  h2 Установка
  p Подключите зависимости в вашу страницу
  Code(source="cdn" lang="html" )
  p или установите из npm
  Code(source="install" lang="bash" )
  p Импортируйте следующим образом
  Code(source="importRete")
  p Если вы хотите использовать только движок на серверной стороне, будет достаточно:
  Code(source="importEngine")

  h2 Создание редактора
  p Для создания редактора необходимо несколько составляющих: Сокеты, Входы, Выходы, Компоненты
  p Создадим экземпляр сокета. Эта часть узла отвечает за коммуникации между узлами.
  Code(source="socket")
  p Непосредственно для создания и обрабтки узла необходимо определить Компонент.
  Code(source="component")
  p В своей HTML странице добавьте контейнер для редактора
  Code(source="editorHtml" lang="html")
  p Инициализируйте редактор, подключите минимально необходимые плагины (для отображения узлов и соединений) и зарегестрируйте компоненты.
  Code(source="editor")
  p Визуальная часть редактора готова. Теперь для обработки схемы нужно инициализировать Движок и подписаться на события Редактора, по которым будет выполняться обработка схемы
  Code(source="engine")
  p Рассмотрены самые необходимые этапы, которые нужно выполнить для работы редактора. Полный пример смотрите на Codepen
</template>


<code name="cdn">
<script src="https://cdn.jsdelivr.net/npm/rete@1.0.0/build/rete.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rete-vue-render-plugin@0.2.6/build/vue-render-plugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rete-connection-plugin@0.3.3/build/connection-plugin.min.js"></script>
</code>

<code name="install">
npm install rete rete-vue-render-plugin rete-connection-plugin
</code>

<code name="importRete">
import Rete from "rete";
import ConnectionPlugin from 'rete-connection-plugin';
import VueRenderPlugin from 'rete-vue-render-plugin';
</code>

<code name="importEngine">
import { Engine, ComponentWorker } from "rete/build/rete-engine.min";
</code>

<code name="socket">
const numSocket = new Rete.Socket('Number value');
</code>

<code name="component">
class NumComponent extends Rete.Component {
  constructor() {
    super('Number');
  }

  builder(node) {
    let out = new Rete.Output('num', 'Number', numSocket);

    node.addOutput(out);
  }

  worker(node, inputs, outputs) {
    outputs['num'] = node.data.num;
  }
}
</code>

<code name="editorHtml">
<div id="rete" class="node-editor"></div>
</code>

<code name="editor">
const container = document.querySelector('#rete');
const editor = new Rete.NodeEditor('demo@0.1.0', container);

editor.use(ConnectionPlugin)
editor.use(VueRenderPlugin)

const numComponent = new NumComponent();
editor.register(numComponent);
</code>

<code name="engine">
const engine = new Rete.Engine('demo@0.1.0');
editor.register(numComponent);

editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
    await engine.abort();
    await engine.process(editor.toJSON());
});
</code>


<script>
import preview from '../assets/preview.png';

export default {
  data() {
    return {
      preview
    }
  },
  methods: {
    go(section) {
      this.$router.push(`/docs/${section}`);
    }
  }
};
</script>


<style lang="sass" scoped>
.main
  width: 100%
  text-align: left
  img
    margin: 1em 0
</style>