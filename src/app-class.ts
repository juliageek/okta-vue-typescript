import { Component, Vue, Prop, Provide } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {

  @Provide()
  foo = 'foo';

  @Provide()
  bar = 'bar';

}
