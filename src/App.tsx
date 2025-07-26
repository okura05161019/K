import React, { useState } from 'react';
import { SurveyStats } from './components/SurveyStats';
import { sampleStudents } from './data/sampleStudents';
import { universityFoodSurvey } from './data/foodSurvey';
import { BarChart3, Users, Utensils } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'stats' | 'data' | 'survey'>('stats');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Utensils className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">University Food Survey</h1>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('stats')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'stats'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Statistics
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'data'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="h-4 w-4 mr-2" />
                Student Data
              </button>
              <button
                onClick={() => setActiveTab('survey')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'survey'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Survey Questions
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="py-8">
        {activeTab === 'stats' && <SurveyStats />}
        
        {activeTab === 'data' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Student Data ({sampleStudents.length} entries)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Major</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Favorite Food</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleStudents.slice(0, 50).map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {student.firstName} {student.lastName}
                          </div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.university}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.major}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.favoriteFood}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {student.foodCategory}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.budgetRange}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {sampleStudents.length > 50 && (
                  <div className="px-6 py-4 bg-gray-50 text-center text-sm text-gray-500">
                    Showing first 50 of {sampleStudents.length} students
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'survey' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{universityFoodSurvey.title}</h2>
              <p className="text-gray-600 mb-8">{universityFoodSurvey.description}</p>
              
              <div className="space-y-6">
                {universityFoodSurvey.questions.map((question, index) => (
                  <div key={question.id} className="border-l-4 border-blue-500 pl-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {index + 1}. {question.question}
                      {question.required && <span className="text-red-500 ml-1">*</span>}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">Type: {question.type}</p>
                    {question.options && (
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Options:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {question.options.map((option, optIndex) => (
                            <li key={optIndex}>{option}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;