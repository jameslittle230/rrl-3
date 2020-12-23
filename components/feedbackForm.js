import { useRouter } from "next/router";
import { useState } from "react";

const postToEndpoint = (message, referer) => {
  const body = {
    message,
    referer,
  };

  return fetch("https://almondine-brass-panda.glitch.me/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });
};

const statusBank = {
  valueTooShort: {
    message: "Please type some feedback to send it!",
    color: "red",
  },

  sendingInProgress: {
    message: "...",
    color: "gray",
  },

  failedToSend: {
    message: "Feedback failed to send.",
    color: "red",
  },

  success: {
    message: "Sent feedback successfully!",
    color: "green",
  },
};

export default () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({});

  const NBSP_CHAR_CODE = 160;

  const submitForm = () => {
    if (message.length > 0) {
      setMessage("");
      setStatus(statusBank.sendingInProgress);
      postToEndpoint(message, router.pathname)
        .then(() => {
          setStatus(statusBank.success);
        })
        .catch(() => {
          setStatus(statusBank.failedToSend);
        });
    } else {
      setStatus(statusBank.valueTooShort);
    }
  };

  return (
    <form>
      <input
        className="rounded-l px-4 py-2 bg-white bg-opacity-20  focus:bg-opacity-90 focus:text-black"
        type="text"
        placeholder="Website Feedback"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          submitForm();
        }}
        className="rounded-r px-4 py-2 bg-gray-300 text-black font-bold hover:shadow-lg"
      >
        Send
      </button>
      <p className={`text-xs text-${status.color || "gray"}-400`}>
        {status.message || String.fromCharCode(NBSP_CHAR_CODE)}
      </p>
    </form>
  );
};
