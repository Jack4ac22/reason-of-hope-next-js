"use client";
import { useState, useEffect } from "react";

export default function UnreadMessageCount({ session }) {
  const [unreadMessages, setUnreadMessages] = useState(0);
  useEffect(() => {
    if (!session) return;
    const fetchUnreadMessages = async () => {
      try {
        const response = await fetch("/api/messages/unread-count");
        if (response.status === 200) {
          const data = await response.json();
          setUnreadMessages(data.count);
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    }
    fetchUnreadMessages();
  }, [session])
  return (
    unreadMessages === 0 ? null :
      <span
        className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
      >
        {unreadMessages}
      </span>
  )
}