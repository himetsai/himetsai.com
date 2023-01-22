import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

type Props = {
  text: string;
  setText: (value: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({ text, setText, onSubmit }: Props) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={isAuthenticated ? `Type here` : "Please login"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!isAuthenticated}
        className="flex w-full max-h-40 p-3 rounded-lg bg-[#fffffe]
        text-[#594a4e] placeholder-[#594a4e]/50"
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="btn rounded bg-[#ff7777] text-white disabled:opacity-40">
              Send
            </button>
            <button className="text-gray-500" onClick={() => logout()}>
              Log Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn rounded bg-[#ff7777] text-white disabled:opacity-40"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}
