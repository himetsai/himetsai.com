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
                className="btn p-[0.5rem] rounded-md bg-[#ff7777] text-white
                disabled:opacity-40 disabled:border-[#fffffe]"
                disabled={text.length == 0}
                title="send"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn p-[0.5rem] rounded-md bg-[#ff7777] text-white"
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
