import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/htpp.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const param = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", param.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: param.id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event; // this get currently sent data

      // this is optimistic update
      await queryClient.cancelQueries(["events", param.id]);
      const prevData = queryClient.getQueryData(["events", param.id]);

      queryClient.setQueryData(["events", param.id], newEvent);

      return { prevData }; //to let context on error get prevdata
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", param.id], content.prevData);
    },
    onSettled: () => { //this run wether this mutate succeed or not
      queryClient.invalidateQueries(["events", param.id])
    }
  });

  function handleSubmit(formData) {
    mutate({ id: param.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="An Error Occured"
          message={error.info?.message || "Failed to fetch events."}
        />
        <div className="form-action">
          <Link to={"../"} className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
