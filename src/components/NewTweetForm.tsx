import React from "react";

const NewTweetForm = () => {
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <textarea
          className="flex-grow resize-none overflow-hidden  p-4 text-lg outline-none"
          placeholder="What's happening ?"
        />
      </div>
      <button>Tweet</button>
    </form>
  );
};

export default NewTweetForm;
