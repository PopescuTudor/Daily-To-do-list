import { useState } from 'react';
import styled from 'styled-components';
import Todo from './Data';

type Props = {
  elemDetails: Todo;
  check: (id: number) => void;
  
}

const TodoElem = (props: Props) => {
  return (
    <TodoElemWrapper>
        <input type="checkbox" checked={props.elemDetails.complete} onChange={() => props.check(props.elemDetails.id)}/>
        <Name complete = {props.elemDetails.complete}>{props.elemDetails.name}</Name>
    </TodoElemWrapper>
  );
};

const TodoElemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Name = styled.span<{complete: boolean}>`
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')}; 
`;
export default TodoElem;