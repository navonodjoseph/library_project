import React from "react"
import Button from "./Button"
import "./button.css"

export default {
    title: "Button", 
    component: Button,
    argTypes:  {
        onClick: {action: "onClick"}, 
    },
    fontcolor: "white", 
}


const Template = (args) => <Button {...args} />

export const Primary = Template.bind ({}); 
Primary.args = {
    primary: true,
    label: "Do Something",
    backgroundColor: "#6da7f3", 
    size: "medium", 
}

export const Danger = Template.bind({}); 
Danger.args = {
    danger: true,   
    label: "Do Something", 
    backgroundColor: "#f95858", 
}

export const Success = Template.bind({}); 
Success.args = {
    success: true, 
    label: "Do Something", 
    backgroundColor: "#A1FFA5", 
}

export const Warning = Template.bind({}); 
Warning.args = {
    warning: true, 
    label: "Do Something", 
    backgroundColor: "#FFFCA8", 
}

export const Default = Template.bind({}); 
Default.args = {
    warning: true, 
    label: "Do Something", 
    backgroundColor: "#424147" 
}