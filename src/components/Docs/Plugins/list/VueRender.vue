<template lang="pug">
.plugin
  Code(source="install")
  Code(source="components")
  Code(source="use")
</template>

<code name="install">
import VueRenderPlugin from 'rete-vue-render-plugin';

editor.use(VueRenderPlugin);
</code>

<code name="components">
import CustomNodeComponent from './CustomNodeComponent.vue';
import CustomControlComponent from './CustomControlComponent.vue';

class MyComponent extends Rete.Component {
  constructor(){
    // ...
    this.data.render = 'vue';
    this.data.component = CustomNodeComponent; // Vue.js component, not required
    this.data.props = {}; // props for the component above, not required
  }
}

class MyControl extends Rete.Control {
  constructor(){
    // ...
    this.data.render = 'vue';
    this.data.component = CustomControlComponent; // Vue.js component, required
    this.data.props = {}; // props for the component above, not required
  }
}
</code>

<code name="use">
const node = editor.nodes[0];
const control = node.controls.get('ctrl');

node.update(); // force update
control.update(); // of view

// in some cases you can gt Vue.js context
node.vueContext
control.vueContext
</code>