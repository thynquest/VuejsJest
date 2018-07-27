import { Vue, Component, Prop } from "vue-property-decorator";
import HelloComponent from "./components/Hello.component";

let v = new Vue({
    el: "#app",
    template: '<hello-component name="Infinite Square" />',
    components: {
        'hello-component':HelloComponent
    }
});
