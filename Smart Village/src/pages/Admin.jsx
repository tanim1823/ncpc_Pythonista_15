import { useEffect, useState } from "react";
import { usersApi } from "../rtk/features/users/usersApi";
import {
  useGetUsersQuery,
  useGetUserApprovedByIdMutation,
} from "../rtk/features/users/usersApi";
import { useDispatch } from "react-redux";

const Admin = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [users, setUsers] = useState([]);
  const [update, { isLoading: updateLoading, isError, isSuccess }] =
    useGetUserApprovedByIdMutation({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.length > 0) {
      setUsers(data);
    }
  }, [data]);

  useEffect(() => {
    if (!updateLoading && isSuccess) {
      dispatch(usersApi.endpoints.getUsers.initiate())
        .unwrap()
        .then((data) => {
          setUsers(data);
        });
    }
  }, [updateLoading, isSuccess, dispatch]);

  const handleApprove = (id) => {
    update(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  /** what to decide */
  let content = null;

  if (isLoading) {
    content = <div>Loading.....</div>;
  }

  if (!isLoading && isError) {
    content = <div>Error.......</div>;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <div>No Data found</div>;
  }

  if (users?.length > 0) {
    const filteredUser = users.filter((d) => d.role !== "Admin");
    console.log(filteredUser);
    content = filteredUser.map((u) => (
      <tbody key={u.id}>
        <tr>
          <th scope="row">{u.id}</th>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.role}</td>
          <td>{u.approved ? "True" : "False"}</td>
          <td>
            <div className="px-2">
              {!u.approved && (
                <button
                  onClick={() => handleApprove(u.id)}
                  type="button"
                  className="btn btn-primary btn-sm "
                >
                  Approve
                </button>
              )}

              <button
                onClick={() => handleDelete(u.id)}
                type="button"
                className="btn btn-secondary btn-sm"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    ));
  }

  return (
    <div className="container">
      <h1 className=" text-warning">Admin Panel</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {content}
      </table>
    </div>
  );
};

export default Admin;
