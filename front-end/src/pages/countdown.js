import React, { Component } from 'react'

class Countdown extends Component {
    constructor(props) {
        super(props)
        this.updateTimer = this.updateTimer.bind(this)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up:""
        }
        this.x = null
        this.deadline = props.deadline;
    }
    updateTimer () {        
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({days, minutes, hours, seconds})
        if (t < 0) {
                clearInterval(this.x);
                this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "TIME IS UP" })
            }
    }
    componentDidMount() {
        this.x = setInterval(this.updateTimer, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.x);
    }
    
    render() {
        const { days, seconds, hours, minutes, time_up } = this.state
        return ( 
            <div className="browse-detail-timer mt-4">
                <div className="browse-time-left">
                    <ul className="clearfix text-center">
                        <li><span>{days}</span> Days</li>
                        <li><span>{hours}</span> Hours</li>
                        <li><span>{minutes}</span> Mins</li>
                        <li><span>{seconds}</span> Secs</li>
                    </ul>
                </div>
                {
                    (days === 0 && hours === 0) ?  <div className="browse-time-right">
                        <h2>Time is Running Out!</h2>
                    </div>:<></>
                }

            </div>
        )
    }
}

export default Countdown;
