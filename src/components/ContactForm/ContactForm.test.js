import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

it('renders without crashing', () => {
    shallow(<ContactForm />)
})

it('renders correctly', () => {
    const form = shallow(<ContactForm />);
    expect(form).toMatchSnapshot();
})
