import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | Chai</h1>
        </div>
    )
}

// const reactElement = {
//     type:'a',
//     props: {
//         href:'https://goole.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target= '_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank' },
    'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
