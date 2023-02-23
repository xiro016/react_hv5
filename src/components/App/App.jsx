import { GetSumm, GetResult, UsersList , OrdedList , UserDetails} from "../";

const App = () => {
  return (
    <div>
      Hello World
      <GetSumm b={10} a={1} />
      <GetResult b={2} a={30} />
      <UsersList />
      <hr/>
      <OrdedList />
      <UserDetails />
    </div>
  );
};

export default App;