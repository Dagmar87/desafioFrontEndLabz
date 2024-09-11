import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import UserComponent from '@/components/UserComponent';

const ChatComponent = dynamic(() => import('@/components/ChatComponent'));

const IndividualRoom = () => {
  const username = useSelector((state: any) => state.user.username);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400`}
    >
      {username === '' ? <UserComponent /> : <ChatComponent />}
    </div>
  );
};

export default IndividualRoom;
