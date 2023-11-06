import { useState } from 'react';
import styled from 'styled-components';
import Todo from './Data';
import TodoElem from './TodoElem';

type Props = {
  elems: Todo[];
  check: (id: number) => void;
}
const TodoList = (props: Props) => {

  return props.elems.map((elem, index) => {
    return (
      <TodoElem elemDetails={elem} check={props.check} />
    )
  

});
}

export default TodoList;