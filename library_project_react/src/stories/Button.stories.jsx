import React from "react"
import Button from "./Button"
import "./button.css"

export default {
    title: "Button", 
    argTypes: {
        backgroundColor:{
            control:"color"
            },
        },
        onClick: {
            table: {
                category: "Events",
            },
        },
        size:{
            table: {
                category: "Sizes"
            },
        },
    label: "Do Something", 
    }

const Template = (args) => <Button {...args} />

export const Primary = Template.bind ({}); 
Primary.args = {
    primary: true,
    label: "Do Something",
    backgroundColor: "", 
    size: "medium", 
}

export const Danger = Template.bind({}); 
Danger.args = {
    danger: true,   
    label: "Do Something", 
    color: ""
}
