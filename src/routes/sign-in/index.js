import React from 'react';
import AppLayout from 'components/AppLayout';
import SignIn from './SignIn';

async function action() {
  return {
    title: 'vikram React Starter Kit',
    chunks: ['SignIn'],
    component: (
      <AppLayout>
        <SignIn />
      </AppLayout>
    ),
  };
}

export default action;
