import React from 'react';
import AppLayout from 'components/AppLayout';
import Feed from './feed';

function action() {
  return {
    chunks: ['feed'],
    component: (
      <AppLayout>
        <Feed />
      </AppLayout>
    ),
  };
}

export default action;
