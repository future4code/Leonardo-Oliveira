import React from "react";
import { Listsyle } from "./List.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = (props) => {
  const itens = props.itens;
  console.log(itens);
  const listItens = itens.map((item) => {
    return (
      <Listsyle className="list" key="item.key">
        <p>
          {item.text}
          <span>
            <FontAwesomeIcon className="faicons" icon="trash"></FontAwesomeIcon>
          </span>
        </p>
      </Listsyle>
    );
  });

  return <div>{listItens}</div>;
};

export default List;
