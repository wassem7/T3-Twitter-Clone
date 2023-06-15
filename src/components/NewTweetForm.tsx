import React, { FormEvent, useState } from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";

const NewTweetForm = () => {
  const { data: sessionData, status } = useSession();
  const [inputValue, setinputValue] = useState("");
  const createTweet = api.tweet.create.useMutation({
    onSuccess: (newTweet) => {
      console.log(newTweet);
      setinputValue("");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTweet.mutate({ content: inputValue });
  };
  if (status === "unauthenticated") return <h1>Unauthenticated❌ </h1>;
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 border-b px-4 py-2"
    >
      <div className="flex gap-4">
        <ProfileImage src={sessionData?.user.image} />
        <textarea
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          className="flex-grow resize-none overflow-hidden  p-4 text-lg outline-none"
          placeholder="What's happening ?"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
};

export default NewTweetForm;
