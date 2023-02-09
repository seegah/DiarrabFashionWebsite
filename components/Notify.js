import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import { Loading } from "./Loading";
import { Toast } from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{
            msg: notify.error,
            title: "Erreur",
          }}
          bgColor="bg-red-600"
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
        />
      )}
      {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: "" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-green-500"
        />
      )}
    </>
  );
};

export default Notify;
