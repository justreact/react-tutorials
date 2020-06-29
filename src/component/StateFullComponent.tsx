import React from 'react'
import './Stateful.css'

interface Props{
    componentName: string
    value: number
}

export default class StateFullComponent extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props) 
    }

    render() {
        return <div className="stateful">
           <p>I am a {this.props.componentName} Component session {this.props.value}</p>
            
        </div>
    }
}