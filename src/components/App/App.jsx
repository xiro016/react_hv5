import { GetSumm, GetResult, UsersList , OrdedList ,Users} from "../index";

const App = () => {
console.log(Users);
  return (
    <div>
      Hello World
      <GetSumm b={10} a={1} />
      <GetResult b={2} a={30} />
      <UsersList />
      <hr/>
      <OrdedList />
<hr/>
<Users/>
    </div>
  );
};

export default App;