import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

it('renders without crashing', () => {
    shallow(<ContactForm />)
})