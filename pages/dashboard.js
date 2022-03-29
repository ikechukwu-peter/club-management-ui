import withAuth from "../utils/withAuth.js";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default withAuth(Dashboard);