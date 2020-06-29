import React from 'react'

export default function FunctionalComponent(props: { componentName: string, value: number }) {
return <p>I am a {props.componentName} Component session {props.value}</p>
}