import React from 'react';

function FinancialDashboard() {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-white py-4 px-6 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <input
            type="search"
            placeholder="Search"
            className="w-64 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Create account
          </button>
        </div>
      </header>

      {/* Main Balance Display */}
      <section className="bg-white py-6 px-6 mt-4 shadow-md">
        <h2 className="text-3xl font-bold mb-4">Total Balance</h2>
        <div className="flex justify-between items-center">
          <div className="text-5xl font-bold">$220,320.60</div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-700">USD</span>
            <span className="text-sm text-gray-700">$4,644.00</span>
            <span className="text-sm text-gray-700">EUR</span>
            <span className="text-sm text-gray-700">€16,9525.00</span>
            <span className="text-sm text-gray-700">GBP</span>
            <span className="text-sm text-gray-700">£7,845.00</span>
          </div>
        </div>
      </section>

      {/* Financial Summary Cards */}
      <section className="bg-white py-6 px-6 mt-4 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Financial Summary</h2>
        <div className="flex justify-between items-center">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2 mr-4">
            <h3 className="text-lg font-bold mb-2">Income</h3>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">$8,189.00</div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-700">84 Transactions</span>
                <span className="text-sm text-green-500">+10%</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <h3 className="text-lg font-bold mb-2">Spending</h3>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">$4,802.00</div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-700">23 Transactions</span>
                <span className="text-sm text-green-500">+34%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section className="bg-white py-6 px-6 mt-4 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Assets</h2>
        <div className="flex justify-between items-center">
          <div className="w-1/2 mr-4">
            <div className="bg-white p-4 rounded-lg shadow-md h-64">
              <h3 className="text-lg font-bold mb-2">Asset Performance</h3>
              <div className="h-40">
                {/* Line graph showing financial trends over months (Jan-Dec) */}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold">$260,420.50</div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-700">Highlighted point</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-bold mb-2">Visa Card</h3>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold">$88,200.00</div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-700">Ending in 7831</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Account</h3>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold">$42,532.00</div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-700">Ending in 1752</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Transactions Panel */}
      <section className="bg-white py-6 px-6 mt-4 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Latest Transactions</h2>
        <div className="flex flex-col">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$8,534.00</div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-700">27 June, 1:34 PM</span>
                <span className="text-sm text-gray-700">eBay.com</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$10,480.00</div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-700">27 June, 4:15 PM</span>
                <span className="text-sm text-gray-700">eBay.com</span>
              </div>
            </div>
          </div>
          {/* Add more transactions here */}
        </div>
      </section>
    </div>
  );
}

export default FinancialDashboard;
