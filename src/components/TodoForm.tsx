import {useState} from 'react'
import styled from 'styled-components'

type Props = {
  onSubmit: (name: string) => void;
}

const TodoForm = (props:Props) => {
  const [name, setName] = useState('');
  
  const submitForm = () => {
    props.onSubmit(name);
  }
  
  return (
    <div>
      <Title>Daily To Do List</Title>
      <div>
        <input value = {name} onChange = {e => setName(e.target.value)}/>
        <button onClick={submitForm}>Add</button>
      </div>
    </div>
  )
}
const Title = styled.span`
  color: #11175E;
  font-family: 'Rubik';
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
  /* margin-left: 200px; */
`;
export default TodoForm;