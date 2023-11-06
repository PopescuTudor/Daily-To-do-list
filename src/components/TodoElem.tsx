import { useState } from 'react';
import styled from 'styled-components';
import Todo from './Data';

type Props = {
  elems: Todo[];
  check: (id: number) => void;
}
const TodoElem = (props: Props) => {
  
  for (let i = 0; i < 1; i++) {
    const elem = props.elems[i];
    return (
      <TodoElemStyled>
        <input type="checkbox" checked={elem.complete} onChange={props.check(elem.id)} />
        <p>{elem.name}</p>
      </TodoElemStyled>
    )
  }

}

const TodoElemStyled = styled.div`
  height: 50px;
  width:300px;

`;

export default TodoElem;