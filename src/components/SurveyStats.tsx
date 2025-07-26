import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { sampleStudents, getFoodCategoryStats, getUniversityStats, getBudgetRangeStats } from '../data/sampleStudents';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

export const SurveyStats: React.FC = () => {
  const foodCategoryData = Object.entries(getFoodCategoryStats()).map(([category, count]) => ({
    name: category,
    value: count,
    percentage: ((count / sampleStudents.length) * 100).toFixed(1)
  }));

  const budgetData = Object.entries(getBudgetRangeStats()).map(([range, count]) => ({
    name: range,
    value: count
  }));

  const topUniversities = Object.entries(getUniversityStats())
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8)
    .map(([university, count]) => ({
      name: university.length > 20 ? university.substring(0, 20) + '...' : university,
      value: count
    }));

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          University Food Survey Results
        </h1>
        <p className="text-lg text-gray-600">
          Analysis of {sampleStudents.length} university students' food preferences
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Responses</h3>
          <p className="text-3xl font-bold text-blue-600">{sampleStudents.length}</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Universities</h3>
          <p className="text-3xl font-bold text-green-600">{Object.keys(getUniversityStats()).length}</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Food Categories</h3>
          <p className="text-3xl font-bold text-purple-600">{Object.keys(getFoodCategoryStats()).length}</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-2">Avg Age</h3>
          <p className="text-3xl font-bold text-orange-600">
            {(sampleStudents.reduce((sum, s) => sum + s.age, 0) / sampleStudents.length).toFixed(1)}
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Food Category Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Food Category Preferences</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={foodCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {foodCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Range Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Budget Range Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Universities */}
        <div className="bg-white p-6 rounded-lg shadow-lg border lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Universities (by responses)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topUniversities} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Popular Foods List */}
      <div className="bg-white p-6 rounded-lg shadow-lg border">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Most Popular Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(
            sampleStudents.reduce((acc, student) => {
              acc[student.favoriteFood] = (acc[student.favoriteFood] || 0) + 1;
              return acc;
            }, {} as Record<string, number>)
          )
            .sort(([,a], [,b]) => b - a)
            .slice(0, 12)
            .map(([food, count]) => (
              <div key={food} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-800">{food}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                  {count}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};