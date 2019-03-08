import React, { Component } from 'react';
import ChatElement from '../Chat-Element';
import { sendApi } from '../../utils/index'
import {ROOMID} from '../Select'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = { messages: [] }
    }


    componentWillMount() {
        setInterval(()=>{sendApi(null, "GET",`message/${ROOMID}`)
            .then(data => this.setState({ messages: data }))},500
    )
    }
    render() {
        return (
            <div id="chat">
                {this.state.messages.length === 0 ? <p>"Loading"</p> : this.state.messages.map(message => { return (<ChatElement mssObj={message}></ChatElement>) })}
            </div>
        );
    }
}

export default Chat
