import React from 'react'
// bootstrap classes
export const Footer = () => {
    let footerStyle = {
        width: '100%',
        border:"2px solid red"
    }
    return (
        <div className="bg-dark text-light" style = {footerStyle}>
            <p className="text-center py-3">
            Copyright &copy;MyTodosList.com 
            </p> 
        </div>
    )
}
