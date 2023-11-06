import {useState} from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  check: (name: string) => void

const TodoElem = (props: Props) => {
  const [isChomplete, setIsComplete] = useState(false)
  
  const toggle = () => {
    setIsComplete(!isComplete)
    check(props.name);
  }
  
  return (
    <TodoElemStyled>
      <input type="checkbox" checked={isComplete} onChange={toggle} />
      <p>{props.name}</p>
      <button onClick={toggle}>Delete</button>
    </TodoElemStyled>
  )
}
  
const TodoElemStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

`;

export default TodoElem;