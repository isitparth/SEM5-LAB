import React, { useRef, useEffect } from 'react';

const App = () => {

  return (
    <div>
      <h2> callback ref example</h2>
      <CallbackRefExample />

      <h2>Forwarding ref example</h2>
      <ForwardRefExample />
    </div>
  );
};

const ChildComponent = React.forwardRef((props, ref) =>{
  return <input ref={ref} />;
})

const ForwardRefExample = () =>{
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(()=>{
    if(parentRef.current && childRef.current){
      parentRef.current.focus();
    }
  }, [])

  return (
    <div>
      <ChildComponent forwardRef={childRef} />
      <input ref={parentRef} />
    </div>
  )
} 

const CallbackRefExample = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = 'Hello Pikachu';
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default App;
