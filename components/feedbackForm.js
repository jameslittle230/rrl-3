import { useRouter } from "next/router";
import { useState } from "react";

const postToEndpoint = ({ text, url }) => {
  const body = {
    text: text,
    channel: "rrl-feedback",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: text,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `looking at ${url}`,
          },
        ],
      },
    ],
  };

  return fetch("https://api.jameslittle.me/slack", {
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
    color: "text-red-400",
  },

  sendingInProgress: {
    message: "Sending feedback, please wait...",
    color: "text-gray-400",
  },

  failedToSend: {
    message: "Feedback failed to send.",
    color: "text-red-400",
  },

  success: {
    message: "Sent feedback successfully!",
    color: "text-green-400",
  },
};

const FeedbackForm = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({});

  const NBSP_CHAR_CODE = 160;

  const clearFeedbackAfter5s = () => {
    window.setTimeout(() => {
      setStatus({});
    }, 5000);
  };

  const submitForm = () => {
    if (message.length > 0) {
      setMessage("");
      setStatus(statusBank.sendingInProgress);
      postToEndpoint({ text: message, url: router.pathname })
        .then(() => {
          setStatus(statusBank.success);
          clearFeedbackAfter5s();
        })
        .catch(() => {
          setStatus(statusBank.failedToSend);
          clearFeedbackAfter5s();
        });
    } else {
      setStatus(statusBank.valueTooShort);
      clearFeedbackAfter5s();
    }
  };

  return (
    <form>
      <input
        className="rounded-l px-4 py-2 bg-white bg-opacity-20  focus:bg-opacity-90 focus:text-black"
        type="text"
        placeholder="Website Feedback"
        value={message}
        autoComplete="off"
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
      <p className={`text-xs ${status.color || "text-gray-400"}`}>
        {status.message || String.fromCharCode(NBSP_CHAR_CODE)}
      </p>
    </form>
  );
};

export default FeedbackForm;
