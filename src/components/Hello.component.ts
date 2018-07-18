import { Vue, Component, Prop } from "vue-property-decorator";
 
@Component({
    template: require('./Hello.component.html')
})
export default class HelloComponent extends Vue {
    @Prop({ type: String }) name: string;
    @Prop({ type: Number, default: 3 }) nbExclamationMarks: number;
     
    enthusiasm: number = this.nbExclamationMarks;
     
    increment() {
        this.enthusiasm++;
    }
 
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }
 
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}