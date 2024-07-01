import { Component } from 'react';

interface ToggleButtonProps {}

interface ToggleButtonState {
    isShown: boolean;
}

class ToggleButton extends Component<ToggleButtonProps, ToggleButtonState> {
    constructor(props: ToggleButtonProps) {
        super(props);
        this.state = {
            isShown: false,
        };
    }

    toggleButton = () => {
        this.setState((prevState) => ({
            isShown: !prevState.isShown,
        }));
    };

    render() {
        const { isShown } = this.state;

        return (
            <div>
                <button onClick={this.toggleButton}>
                    {isShown ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default ToggleButton;
