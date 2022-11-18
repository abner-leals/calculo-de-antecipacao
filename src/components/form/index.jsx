import React, { useContext } from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../input";
import { QuadroReq } from "../containers/style";
import api from "../../services/api";
import { ValoresContext } from "../../contexts/valoresCalculados";

const FormularioReq = () => {
  const { valores, atualizar } = useContext(ValoresContext);
  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Campo obrigatório!")
      .moreThan(999, "O valor informado deve ser maior ou igual a 1000,00"),
    installments: yup
      .number("Informe um numero maior que 0.")
      .required("Campo obrigatório!")
      .positive("O valor informado deve ser maior que 0.")
      .moreThan(0, "A quantidade de parcela deve ser maior ou igual a 1")
      .lessThan(13, "A quantidade de parcelas deve ser menor igual a  12"),
    mdr: yup
      .number('Informe um numero se decimal separado por " . " .')
      .required("Campo obrigatório")
      .positive("O valor informado deve ser maior que 0."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api.post("", data).then((response) => {
      atualizar(response.data);
    });
  };
  const [valor, setValor] = useState();
  const [parcela, setParcela] = useState();
  const [mdr, setMdr] = useState();

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

      <button type="submit"> Calcular </button>
    </QuadroReq>
  );
};

export default FormularioReq;
