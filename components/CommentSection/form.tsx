import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef } from "react";

type Props = {
  text: string;
  setText: (value: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({ text, setText, onSubmit }: Props) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();
  const form = useRef<null | HTMLFormElement>(null);

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target;
    setText(e.target.value);
    const offset = input.offsetHeight - input.clientHeight;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + offset + "px";
  };

  return (
    <div className="flex flex-col">
      <form
        ref={form}
        onSubmit={onSubmit}
        className="relative flex flex-row w-full justify-between items-center mt-5 border-[1.5px]
        border-[#33272a] rounded-md"
      >
        <textarea
          placeholder={isAuthenticated ? `Type here` : "Please login"}
          value={text}
          rows={1}
          onChange={onChange}
          onKeyDown={onEnterPress}
          disabled={!isAuthenticated}
          className="flex w-full p-3 bg-[#fffffe] rounded-md
        text-[#594a4e] placeholder-[#594a4e]/70 outline-none 
        overflow-hidden resize-none"
        />

        <div className="relative min-w-max right-0 flex items-center pr-2">
          {isAuthenticated ? (
            <div className="flex items-center">
              <button
                type="submit"
                className="btn p-[0.5rem] rounded-md bg-[#ff7777] text-white disabled:opacity-40"
                disabled={text.length == 0}
              >
                Send
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn p-[0.5rem] rounded-md bg-[#ff7777] text-white disabled:opacity-40"
              onClick={() => loginWithPopup()}
            >
              Log in
            </button>
          )}
        </div>
      </form>
      {isAuthenticated && (
        <button
          className="flex self-end text-[#33272a]/70 text-sm pt-2 pr-3"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      )}
    </div>
  );
}
