import React from 'react'


const classMounted = (props) => {
      console.log('class props', props);
      return <div> 
      <p>{props.className}</p>
      </div>
}

export default classMounted;