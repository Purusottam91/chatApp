import React, { useEffect, useRef, useState } from "react";

type Props = {
  placeholder?: string;
  onSend: (text: string, file?: File | null) => void;
  disabled?: boolean;
  maxLength?: number;
};

export default function ChatTypeBar({
  placeholder = "Write a message...",
  onSend,
  disabled = false,
  maxLength = 2000,
}: Props) {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // auto-resize textarea to fit content
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    const newHeight = Math.min(ta.scrollHeight, 240); // cap height
    ta.style.height = `${newHeight}px`;
  }, [text]);

  const handleSend = async () => {
    if (disabled) return;
    const trimmed = text.trim();
    if (!trimmed && !file) return;

    try {
      setSending(true);
      await Promise.resolve(onSend(trimmed, file));
      setText("");
      setFile(null);
      // reset file input so same file can be re-picked later
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const onPickFile = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const f = ev.target.files && ev.target.files[0];
    if (f) setFile(f);
  };

  return (
    <div className="w-full p-3 bg-white dark:bg-[#0b1220] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex gap-3 items-end">
        <div className="flex-1">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            ref={textareaRef}
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= maxLength) setText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            className="w-full resize-none rounded-2xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 dark:bg-[#071024] dark:border-gray-700"
            disabled={disabled || sending}
          />
          <div className="flex items-center justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Attach file"
                disabled={disabled}
              >
                📎 Attach
              </button>
              {file && (
                <div className="text-ellipsis overflow-hidden max-w-xs truncate">
                  📄 {file.name}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-400">{text.length}/{maxLength}</div>
              <button
                type="button"
                onClick={handleSend}
                disabled={disabled || sending || (text.trim() === "" && !file)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-600 text-white text-sm hover:opacity-95 disabled:opacity-50"
                aria-label="Send message"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>

        {/* hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={onPickFile}
          aria-hidden
        />
      </div>
    </div>
  );
}
