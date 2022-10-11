import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { DashboardContext, IDataRegister } from "../../providers/dashboard";

import { Container, Form, ResultParcel } from "./styles";

export const Dashboard = () => {
  const { CalcAntecipation, resCalcAntecipation } =
    useContext(DashboardContext);

  const arrDays = Object.keys(resCalcAntecipation);

  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Campo obrigatório!")
      .min(1000, "Valor minimo de 1000."),
    installments: yup
      .number()
      .required("Campo obrigatório!")
      .max(12, "Valor maximo de 12 parcelas"),
    mdr: yup.number().required("Campo obrigatório!"),
  });

  const { register, handleSubmit } = useForm<IDataRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: IDataRegister) => {
    CalcAntecipation(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <input {...register("amount")} placeholder="valor da venda" />
        <input {...register("installments")} placeholder="numero de parcelas" />
        <input {...register("mdr")} placeholder="percentual MDR" />
        <button type="submit">CONSULTAR</button>
      </Form>

      <ResultParcel>
        <h2>VOCÊ RECEBERÁ:</h2>
        {arrDays.length !== 0 ? (
          arrDays.map((day, index) => {
            if (!day[1]) {
              return (
                <li key={index}>
                  Amanhã:
                  <strong>
                    {resCalcAntecipation[day].toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </li>
              );
            }

            return (
              <li key={index}>
                Em {day} dias:
                <strong>
                  {resCalcAntecipation[day].toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </li>
            );
          })
        ) : (
          <ul>
            <li>
              Amanhã: <strong>R$ 0,00</strong>
            </li>
            <li>
              Em 15 dias: <strong>R$ 0,00</strong>
            </li>
            <li>
              Em 30 dias: <strong>R$ 0,00</strong>
            </li>
            <li>
              Em 90 dias: <strong>R$ 0,00</strong>
            </li>
          </ul>
        )}
      </ResultParcel>
    </Container>
  );
};
