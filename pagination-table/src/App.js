// App.js
import React, { useState } from 'react';
import Pagination from './components/Pagination';
import './index.css'; // Import the CSS file

// Dummy data
const dummyData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}));

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  // Get the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Pagination Example</h1>

      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div className="pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default App;
