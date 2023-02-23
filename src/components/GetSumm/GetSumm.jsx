import { GetResultHoc } from "../../helpers";

const GetSumm = ({ result }) => {
  return <h1>{result}</h1>;
};

export default GetResultHoc(GetSumm);