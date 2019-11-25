import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Calculator from './components/Calculator';
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Calculator", () => {

    describe('Calculator component', () => {

        it('tests to see that the Calculator exists', () => {
      
            const wrapper = shallow(<Calculator />);
            expect(wrapper.exists()).toBe(true);
      
        });

        it('tests that an input of II one after the other displays II', () => {

            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('I')
            wrapper.instance().inputDigit('I')
            expect(wrapper.state().displayValue).toBe('II');

        });

    });

    // describe('Will test roman numeral laws', () => {
    
    //     it('tests that digits V, D and L can not be repeated', () => {
            
    //     });

    //     it('tests that I, X and C can not repeat more than 3 times', () => {
      
    //     });

    //     it('no digit can be concatenated more than thrice', () => {
      
    //     });

    //     it('V is never written to the left of X', () => {
      
    //     });

    //     it('V is never written to the left of X', () => {
      
    //     });

    //     it('largest roman numeral is 3999', () => {
      
    //     });

    //     it('numbers can't be negative', () => {
      
    //     });

    // }

})