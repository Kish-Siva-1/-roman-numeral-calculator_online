import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Calculator from './components/Calculator';
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('Calculator component', () => {
    
    it('tests to see that Calculator exists', () => {
        const wrapper = shallow(<Calculator />);

        expect(wrapper.exists()).toBe(true);
    });

    it('tests to see that Calculator exists', () => {
        const wrapper = shallow(<Calculator />);

        expect(wrapper.exists()).toBe(true);
    });

});