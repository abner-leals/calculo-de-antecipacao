import React, { useContext } from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../input";
import { PeriodoContainer, QuadroReq } from "../containers/style";
import api from "../../services/api";
import { ValoresContext } from "../../contexts/valoresCalculados";

const FormularioReq = () => {
  const { atualizar, adicionar, days, remover } = useContext(ValoresContext);
  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Campo obrigatório!")
      .typeError("Apenas números")
      .moreThan(9.99, "O valor informado deve ser maior ou igual a 10,00"),
    installments: yup
      .number()
      .required("Campo obrigatório!")
      .typeError("Apenas números")
      .positive("O valor informado deve ser maior que 0.")
      .moreThan(0, "A quantidade de parcela deve ser maior ou igual a 1")
      .lessThan(13, "A quantidade de parcelas deve ser menor igual a  12"),
    mdr: yup
      .number()
      .required("Campo obrigatório")
      .typeError("Apenas números")
      .positive("O valor informado deve ser maior que 0."),
    days: yup.number().typeError("Apenas números").optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    data.days = days;
    data.amount = data.amount * 100;
    api.post("", data).then((response) => {
      atualizar(response.data);
    });
  };
  const [valor, setValor] = useState();
  const [parcela, setParcela] = useState();
  const [mdr, setMdr] = useState();
  const [dias, setDias] = useState([]);

  return (
    <QuadroReq onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h1>Simule sua Antecipação</h1>
      <Input
        label="Valor da venda *"
        placeholder="Informe o valor da venda *"
        register={register}
        name="amount"
        error={errors.amount?.message}
        value={valor}
        onChange={(e) => {
          setValor(e.target.value);
        }}
      />
      <Input
        label="Quantidade de parcelas"
        placeholder="Em quantas parcelas *"
        register={register}
        name="installments"
        error={errors.installments?.message}
        value={parcela}
        onChange={(e) => {
          setParcela(e.target.value);
        }}
      />
      <Input
        label="Percentual de MDR *"
        placeholder="Informe o percentual de MDR *"
        register={register}
        name="mdr"
        error={errors.mdr?.message}
        value={mdr}
        onChange={(e) => {
          setMdr(e.target.value);
        }}
      />
      <Input
        label="Novo período de dias "
        placeholder="Adicione novo periodo ."
        register={register}
        name="days"
        error={errors.days?.message}
        value={dias}
        onChange={(e) => {
          if (e.key === "Enter") {
            console.log("ok");
          }
          setDias(e.target.value);
        }}
        texto="Add"
        botaoclick={() => {
          adicionar(dias);
          setDias([]);
        }}
        typebotao={"button"}
      />
      <PeriodoContainer>
        <ul>
          {days?.map((dia) => {
            return (
              <li
                key={dia}
                onClick={(e) => {
                  remover(dia);
                }}
              >
                {dia}
              </li>
            );
          })}
        </ul>
        <button type="submit"> Calcular </button>
      </PeriodoContainer>
    </QuadroReq>
  );
};

export default FormularioReq;
