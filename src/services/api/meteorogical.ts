import axios from "axios";

const getALL = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4767/api/v1/meteorologia"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getByCity = async (city: String) => {
  try {
    const responseByCiry = await axios.get(
      "http://localhost:4767/api/v1/meteorologia/" + city
    );
    console.log(responseByCiry.data.content);
    return responseByCiry.data.content;
  } catch (error) {
    console.error(error);
  }
};

const create = (
  cidade: string,
  data: string,
  tempoDia: string,
  tempoNoite: string,
  temperaturaMaxima: number,
  temperaturaMinima: number,
  precipitacao: number,
  umidade: number,
  ventos: number
) => {
  axios
    .post("http://localhost:4767/api/v1/meteorologia", {
      cidade: cidade,
      data: data,
      tempoDia: tempoDia,
      tempoNoite: tempoNoite,
      temperaturaMaxima: temperaturaMaxima,
      temperaturaMinima: temperaturaMinima,
      precipitacao: precipitacao,
      umidade: umidade,
      velocidadeVentos: ventos,
    })
    .then(function (response: any) {
      console.log(response);
      alert("Parabéns você cadastrou um registro");
    })
    .catch(function (error: any) {
      console.error(error);
      alert("Infelizmente você não conseguiu cadastrar um registro");
    });
};

const updateById = () => {};

const deleteById = (id: number) => {
  axios
    .delete("http://localhost:4767/api/v1/meteorologia/" + id)
    .then((response) => {
      alert("Você apagou um registro!")
    })
    .catch((error) => {
      alert("Sua tentativa de apagar um registro falhou!")
      console.log(error);
    });
};

export const MeteorologicalService = {
  getALL,
  getByCity,
  create,
  updateById,
  deleteById,
};
