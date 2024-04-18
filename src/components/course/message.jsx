'use client';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useMessagesGlobal } from "@/context/messages-context/MessagesGlobalContext";
export default function Message({ message }) {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);
  const { setUnreadMessages } = useMessagesGlobal();

  const handleReadClick = async () => {
    try {
      const response = await fetch(`/api/messages/${message._id}`, { method: 'PUT' });
      if (response.status === 200) {
        setIsRead(!isRead);
        setUnreadMessages((prev) => (isRead ? prev + 1 : prev - 1))
        const toastMessage = isRead ? 'Message marked as unread.' : 'Message marked as read.';
        toast.success(toastMessage);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error('An unexpected error occurred.');
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`/api/messages/${message._id}`, { method: 'DELETE' });
      if (response.status === 200) {
        setIsDeleted(!isDeleted);
        toast.success('Message deleted.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error('An unexpected error occurred.');
    }
  }
  if (isDeleted) {
    return null;
  }
  return (
    <>
      <div className="space-y-4">
        <div
          className="relative bg-white p-4 rounded-md shadow-md border border-gray-200"
        >
          {!isRead && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py1 rounded-md">
              New
            </div>
          )}
          <h2 className="text-xl mb-4">
            <span className="font-bold">Property Inquiry: </span>
            {message.property.name}
          </h2>
          <p className="text-gray-700">
            {message.body}
          </p>

          <ul className="mt-4">
            <li><strong>Name: </strong>{message?.sender?.username}</li>

            <li>
              <strong>Reply Email: </strong>
              <a href={`mailto:${message?.email}`} className="text-blue-500"
              >{message?.email}</a
              >
            </li>
            <li>
              <strong>Reply Phone: </strong>
              <a href={`tel:${message?.phone}`} className="text-blue-500"
              >{message?.phone}</a
              >
            </li>
            <li><strong>Received: </strong>{new Date(message.createdAt).toLocaleString()}</li>
          </ul>
          <button
            className={`mt-4 mr-3  py-1 px-3 rounded-md ${isRead ? 'bg-gray-500 text-white' : 'bg-blue-500 text-white'}`}
            onClick={handleReadClick}
          >
            {isRead ? 'Mark As Unread' : 'Mark As Read'}
          </button>
          <button className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}