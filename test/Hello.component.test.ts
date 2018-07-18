import {mount} from "vue-test-utils";
import { shallow } from 'vue-test-utils';
import HelloComponent from "../src/components/Hello.component";

describe("Hello.component.test.js", () => {
    let wrapper:any;

    beforeEach(() => {
        // wrapper = mount(HelloComponent, {
        //     data:{
        //         enthusiasm:3
        //     },
        //     propsData:{
        //         name: "MyTestHelloComponent",
        //         nbExclamationMarks: 3
        //     }
        // });
        wrapper = shallow(HelloComponent);
    });

    it("increment enthusiasm", () =>{
        wrapper.vm.nbExclamationMarks = 3
        wrapper.vm.increment()
        expect(wrapper.vm.enthusiasm).toBe(4)
    });

    it("decrement enthusiasm", () =>{
        wrapper.vm.nbExclamationMarks = 3
        wrapper.vm.decrement()
        expect(wrapper.vm.enthusiasm).toBe(2)
    });
});