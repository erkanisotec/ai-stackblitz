
export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-blue-900 font-medium">Total Users</h3>
            <span className="p-2 bg-blue-500 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </span>
          </div>
          <p className="text-3xl font-bold text-blue-900">1,234</p>
          <p className="text-blue-600 text-sm mt-2">+12% from last month</p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-purple-900 font-medium">Active Projects</h3>
            <span className="p-2 bg-purple-500 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </span>
          </div>
          <p className="text-3xl font-bold text-purple-900">56</p>
          <p className="text-purple-600 text-sm mt-2">+3 new this week</p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-green-900 font-medium">Tasks Completed</h3>
            <span className="p-2 bg-green-500 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <p className="text-3xl font-bold text-green-900">892</p>
          <p className="text-green-600 text-sm mt-2">+28% completion rate</p>
        </div>
      </div>
    </div>
  );
}
