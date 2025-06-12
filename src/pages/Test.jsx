import React from 'react'

const Test = () => {
  const Title = 'This is new React Class';
  const link = 'https://www.facebook.com';
  const user = {name:'Yoshi', age:30};

  const handleClick =()=>{
    alert('Button Clicked');
  };
  return (
    <div>
        <div>I am test react</div>
        <div>React Class</div>
        <div>{ Title }</div>
        <a href="https://www.google.com">Google</a>
        <div><a href={link}>Facebook</a></div>
        <div>{'Netninja, React class'}</div>
        <div>{user.name} is {user.age} years</div>
        <br />
        <button onClick={handleClick}>handleClick</button>
    </div>
  )
}

export default Test