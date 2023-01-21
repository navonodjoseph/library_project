import React from "react"
import Button from "./Button"
import "./button.css"

export default {
    title: "Button", 
    component: Button, 
}

const Template = args => <Button {...args} />


export const Primary = () => Template.bind({})
export const Danger = () => <Button label = "danger" backgroundColor = "red"/>
export const Success = () => <Button label = "success" backgroundColor = "green" />
export const Warning = () => <Button label = "Warning" backgroundColor = "yellow"/>
export const Default = () => <Button label = "Default" background Color ="black" />