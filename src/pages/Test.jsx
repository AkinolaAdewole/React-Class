import React from 'react'

const Test = () => {
  const Title = 'This is new React Class';
  const link = 'https://www.facebook.com';
  const user = {name:'Yoshi', age:30}
  return (
    <div>
        <div>I am test react</div>
        <div>React Class</div>
        <div>{ Title }</div>
        <a href="https://www.google.com">Google</a>
        <a href={link}>Facebook</a>
        <div>{'Netninja, React class'}</div>
        <div>{user.name} and {user.age}</div>
    </div>
  )
}

export default Test