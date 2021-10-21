import React from 'react';
import CalculatorTitle from './CalculatorTitle.js';
import OutputScreen from './OutputScreen.js';
import Button from './Button.js';
class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (this.state.question !== '') {
                    var ans = '';
                    ans = eval(this.state.question);
                    if (ans === undefined)
                        this.setState({ answer: "Math Error" });
                    else
                        this.setState({ answer: ans, question: '' });
                    break;
                }
            }
            case 'Clear': {
                this.setState({ question: '', answer: '' });
                break;
            }
            case 'Delete': {
                var str = this.state.question;
                str = str.substr(0, str.length - 1);
                this.setState({ question: str });
                break;
            }
            default: {
                this.setState({
                    question: this.state.question += value
                })
                break;
            }


        }

    }
        render() {
            return (
                <div className="frame">
                    <CalculatorTitle value="Tufail Ahmed's Calculator" />
                    <div class="mainCalc">
                        <OutputScreen question={this.state.question} answer={this.state.answer} />
                        <div className="button-row">
                            <Button handleClick={this.handleClick} label={'Clear'} />
                            <Button handleClick={this.handleClick} label={'Delete'} />
                            <Button handleClick={this.handleClick} label={'.'} />
                            <Button handleClick={this.handleClick} label={'/'} />
                        </div>
                        <div className="button-row">
                            <Button handleClick={this.handleClick} label={'7'} />
                            <Button handleClick={this.handleClick} label={'8'} />
                            <Button handleClick={this.handleClick} label={'9'} />
                            <Button handleClick={this.handleClick} label={'*'} />
                        </div>
                        <div className="button-row">
                            <Button handleClick={this.handleClick} label={'4'} />
                            <Button handleClick={this.handleClick} label={'5'} />
                            <Button handleClick={this.handleClick} label={'6'} />
                            <Button handleClick={this.handleClick} label={'-'} />
                        </div>
                        <div className="button-row">
                            <Button handleClick={this.handleClick} label={'1'} />
                            <Button handleClick={this.handleClick} label={'2'} />
                            <Button handleClick={this.handleClick} label={'3'} />
                            <Button handleClick={this.handleClick} label={'+'} />
                        </div>
                        <div className="button-row">
                            <Button handleClick={this.handleClick} label={'0'} />
                            <Button handleClick={this.handleClick} label={'='} />
                        </div>
                    </div>
                </div>
            );
        }
    }
    export default Calculator; 
