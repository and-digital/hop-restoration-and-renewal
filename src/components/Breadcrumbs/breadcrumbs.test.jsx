import React from 'react';
import Breadcrumbs from './breadcrumbs';

describe('<Breadcrumbs/>', () => {
    const props = {
        pathname: '/spotlight/blog/waterfall-agile',
    };

    describe('render', () => {
        it('with default/required props', () => {
            const c = shallow(<Breadcrumbs {...props} />);
            expect(c).toMatchSnapshot();
        });
        it('show final slug on top level page', () => {
            const c = shallow(<Breadcrumbs {...props} topLevel />);
            expect(c).toMatchSnapshot();
        });
    });
});
