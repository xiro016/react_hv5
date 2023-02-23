import { WithData } from "../../helpers";

const OrdedList = ({ users }) => {
  return (
    <ol>
      {users.map((user) => (
        <li key={`user${user.id}`}>
          {user.name} ({user.phone})
        </li>
      ))}
    </ol>
  );
};

export default WithData(OrdedList);