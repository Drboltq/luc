import React from 'react';
import { MainLayout } from './components/layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Lucky Wheel
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Spin the wheel and win amazing prizes!
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          Start Playing
        </button>
      </div>
    </MainLayout>
  );
}

export default App;