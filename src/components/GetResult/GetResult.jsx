import { GetResultHoc } from "../../helpers";

const GetResult = ({ result }) => {
  return <p>{result}</p>;
};

export default GetResultHoc(GetResult);