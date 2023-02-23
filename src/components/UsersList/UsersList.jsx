import { WithData } from "../../helpers";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={`user${user.id}`}>
          {user.name} ({user.phone})
        </li>
      ))}
    </ul>
  );
};

export default WithData(UsersList);