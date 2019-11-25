import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Calculator from './components/Calculator';
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Calculator", () => {

    describe('Will test whether the calculator functions properly', () => {

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

        it('tests whether subtraction functions using V - I = 4', () => {

            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('V')
            wrapper.instance().performOperation('-');
            wrapper.instance().inputDigit('I');
            wrapper.instance().performOperation('=');
            expect(wrapper.state().displayValue).toBe('4');

        });

        it('tests whether addition functions using X + X = 20', () => {

            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('X')
            wrapper.instance().performOperation('+');
            wrapper.instance().inputDigit('X');
            wrapper.instance().performOperation('=');
            expect(wrapper.state().displayValue).toBe('20');

        });

        it('tests whether multiplication functions using X * X = 100', () => {

            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('X')
            wrapper.instance().performOperation('*');
            wrapper.instance().inputDigit('X');
            wrapper.instance().performOperation('=');
            expect(wrapper.state().displayValue).toBe('100');

        });

    });

    describe('Will test whether roman numeral laws are obeyed', () => {

        it('tests that digits V, D and L can not be repeated', () => {

            window.alert = jest.fn();
            
            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('DD');
            wrapper.instance().performOperation('+')
            
            expect(window.alert).toHaveBeenCalled(); 
            
        });

        it('tests that I, X or C can not repeat more than 3 times', () => {

            window.alert = jest.fn();
            
            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('CCCC');
            wrapper.instance().performOperation('-')
            
            expect(window.alert).toHaveBeenCalled();
            
        });

        it('no digit can be concatenated more than thrice', () => {
    
            window.alert = jest.fn();
            
            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('MMMM');
            wrapper.instance().performOperation('-')
            
            expect(window.alert).toHaveBeenCalled();
            
        });

        it('V is never written to the left of X', () => {
      
            window.alert = jest.fn();
            
            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('VX');
            wrapper.instance().performOperation('-')
            
            expect(window.alert).toHaveBeenCalled();

        });


        it('values can not be larger than the roman numeral equivalent of 3999 (MMMCMXCIX)', () => {

            window.alert = jest.fn();
            
            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('MMMCMXCIX');
            wrapper.instance().performOperation('+');
            wrapper.instance().inputDigit('I');
            wrapper.instance().performOperation('=');
            
            expect(window.alert).toHaveBeenCalled();

        });

        it('numbers can not be less than 1', () => {
      
            window.alert = jest.fn();
            
            const wrapper = mount(<Calculator />);
            wrapper.instance().inputDigit('II');
            wrapper.instance().performOperation('-');
            wrapper.instance().inputDigit('V');
            wrapper.instance().performOperation('=');
            
            expect(window.alert).toHaveBeenCalled();

        });

    })

})