import Button from './Button.molecule';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Default = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Button clicked!'),
    },
};
