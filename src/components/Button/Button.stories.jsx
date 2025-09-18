import Button from './Button.molecule';
import Reset from './Reset.atom';


export default {
    title: 'Components/Button',
    component: Button,
};

// --- Button stories ---
export const DefaultButton = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Button clicked!'),
    },
};

// --- Reset stories ---
export const ResetButton = {
    render: () => <Reset onReset={() => alert('Game reset!')} />,
};


