import React, { useContext } from "react";

import { ValoresContext } from "../../contexts/valoresCalculados";
import { QuadroRes, QuadroValores } from "./style";

export const ContainerRes = (props) => {
  const { valores, atualizar } = useContext(ValoresContext);
  return (
    <QuadroRes>
      <h3>
        Você Receberá:<p></p>
      </h3>
      <QuadroValores>
        <li>
          Amanhã:{" "}
          <strong> R$ {valores[1].toFixed(2).replace(".", ",")} </strong>{" "}
        </li>
        <li>
          Em 15 dias:
          <strong>
            {" "}
            R$ {valores["15"].toFixed(2).replace(".", ",")}{" "}
          </strong>{" "}
        </li>
        <li>
          Em 30 dias:
          <strong> R$ {valores["30"].toFixed(2).replace(".", ",")}</strong>{" "}
        </li>
        <li>
          Em 90 dias:
          <strong> R$ {valores["90"].toFixed(2).replace(".", ",")}</strong>{" "}
        </li>
      </QuadroValores>
    </QuadroRes>
  );
};
