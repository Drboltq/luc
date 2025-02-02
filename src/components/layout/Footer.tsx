import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Lucky Wheel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}