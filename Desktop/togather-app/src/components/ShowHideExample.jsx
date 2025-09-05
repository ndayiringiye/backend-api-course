import { useState } from 'react';
import { Eye, EyeOff, ChevronDown, ChevronUp, Info, X } from 'lucide-react';

const ShowHideExample = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('content');

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Show/Hide Component Examples</h1>
        <p className="text-gray-600">Interactive examples of different show/hide patterns</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Password Visibility</h2>
        <div className="relative max-w-sm">
          <input
            type={isVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
            defaultValue="secretpassword123"
          />
          <button
            onClick={toggleVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Click the eye icon to {isVisible ? 'hide' : 'show'} password
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md border overflow-hidden">
        <div 
          className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
          onClick={toggleExpanded}
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Expandable Content Section</h2>
            <p className="text-gray-600 text-sm">Click to {isExpanded ? 'collapse' : 'expand'}</p>
          </div>
          <div className="text-gray-500">
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
        
        <div className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="p-6 pt-0 border-t bg-gray-50">
            <h3 className="font-semibold mb-3 text-gray-800">Hidden Content Revealed!</h3>
            <p className="text-gray-600 mb-4">
              This content was hidden and is now visible with a smooth animation. 
              You can put any content here - text, images, forms, or other components.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium mb-2">Feature 1</h4>
                <p className="text-sm text-gray-600">Description of the first feature</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium mb-2">Feature 2</h4>
                <p className="text-sm text-gray-600">Description of the second feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Modal Dialog</h2>
        <button
          onClick={toggleModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <Info size={18} />
          Show Modal
        </button>
        
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Modal Title</h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  This is a modal dialog that overlays the main content. 
                  It's commonly used for forms, confirmations, or detailed information.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={toggleModal}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={toggleModal}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md border overflow-hidden">
        <div className="flex border-b">
          {['content', 'settings', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-4 font-medium capitalize transition-colors ${
                selectedTab === tab
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {selectedTab === 'content' && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Content Tab</h3>
              <p className="text-gray-600">
                This is the content section. You can switch between different tabs 
                to show and hide different sections of content.
              </p>
            </div>
          )}
          
          {selectedTab === 'settings' && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Settings Tab</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-gray-700">Enable notifications</label>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-gray-700">Dark mode</label>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          )}
          
          {selectedTab === 'about' && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">About Tab</h3>
              <p className="text-gray-600">
                This component demonstrates various show/hide patterns commonly used 
                in web applications, including password visibility, expandable content, 
                modals, and tabbed interfaces.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowHideExample;