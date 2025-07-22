import React, { useState, useEffect } from 'react';
import { Smartphone, Terminal, Code, Hotel, CreditCard, ShoppingCart, ArrowLeft, ExternalLink, Star, User, Home, Square, Triangle, Circle, Battery, Wifi, Signal } from 'lucide-react';

interface App {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  color: string;
  category: string;
  features: string[];
  technologies: string[];
  screenshots: string[];
}

const apps: App[] = [
  {
    id: 'sealand',
    name: 'Sealand Hotel',
    description: 'Complete POS & Hotel Management Solution',
    fullDescription: 'A comprehensive point-of-sale and hotel management system designed for modern hotel businesses. Streamline operations with integrated room booking, guest management, billing, and analytics.',
    icon: <Hotel className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    category: 'Business',
    features: [
      'Real-time room availability tracking',
      'Integrated POS system for restaurant & services',
      'Guest check-in/check-out management',
      'Automated billing and invoicing',
      'Staff management and scheduling',
      'Analytics and reporting dashboard',
      'Multi-property support',
      'Payment gateway integration'
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
    screenshots: ['https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753185758/RoomsManagment_gmzdyd.jpg', 'https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753185758/AddCustomer_hnyxga.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753185758/CustomerManagment_hb8pna.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753185758/Foodsreciept_xkpzl1.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753185759/Reports_e09s2a.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753185759/Inventory_Managment_rycn6h.jpg']
  },
  {
    id: 'kunbi',
    name: 'Kunbi ID Generator',
    description: 'Professional ID Card Creation Tool',
    fullDescription: 'A powerful and intuitive ID card generator that enables organizations to create professional identification cards with custom templates, photo integration, and batch processing capabilities.',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    category: 'Productivity',
    features: [
      'Customizable ID card templates',
      'Bulk ID card generation',
      'Photo cropping and enhancement',
      'QR code integration',
      'Database integration for employee data',
      'Print-ready high-resolution output',
      'Template library with 50+ designs',
      'CSV import for batch processing'
    ],
    technologies: ['React', 'Canvas API', 'Node.js', 'Sharp', 'SQLite'],
    screenshots: ['https://github.com/user-attachments/assets/1b428d45-ed5b-4831-81bf-b3b228bbc253', 'https://github.com/user-attachments/assets/6ed9a46f-64d6-483c-ba6c-dc8ef3bad14f']
  },
  {
    id: 'kirana',
    name: 'Kirana Shop',
    description: 'Smart Shop Management System',
    fullDescription: 'An all-in-one shop management solution designed specifically for small to medium retail businesses. Manage inventory, track sales, handle customer relationships, and grow your business with powerful analytics.',
    icon: <ShoppingCart className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    category: 'Business',
    features: [
      'Inventory management with low stock alerts',
      'Point of sale with barcode scanning',
      'Customer relationship management',
      'Sales analytics and reporting',
      'Multi-location support',
      'Supplier management',
      'GST compliant billing',
      'Digital payment integration'
    ],
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Razorpay'],
    screenshots: ['https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191090/IMG-20250722-WA0016_g2ndka.jpg', 'https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191089/IMG-20250722-WA0011_thpltg.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191089/IMG-20250722-WA0010_gdmuvo.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191089/IMG-20250722-WA0014_uplvur.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191089/IMG-20250722-WA0012_jinwmt.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191089/IMG-20250722-WA0013_k51pfa.jpg','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191090/IMG-20250722-WA0015_vs7pcy.jpg']
  },
  {
    id: 'truspirit',
    name: 'TruSpirit',
    description: 'Agent Onboarding & Loan Lead Generator',
    fullDescription: 'A comprehensive fintech solution for agent onboarding and loan lead generation. Streamlines the entire process from agent registration to loan application management with advanced analytics and reporting.',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    category: 'Fintech',
    features: [
      'Agent onboarding workflow',
      'Loan lead generation system',
      'Document verification',
      'Real-time application tracking',
      'Commission management',
      'Analytics dashboard',
      'Multi-tier agent hierarchy',
      'Automated notifications'
    ],
    technologies: ['Core Android', 'Aws', 'MongoDB', 'Nestjs', 'JWT'],
    screenshots: ['https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191232/Homescreen_i3fegt.png', 'https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191232/products_uncnpu.png','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191232/Add_Customer_uyjkxn.png','https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753191232/leadgeneration_lq14ic.png']
  }
];

// Tic Tac Toe Game Component
const TicTacToe = ({ onClose }: { onClose: () => void }) => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-xl font-bold text-white">Tic Tac Toe</h1>
        <div className="w-9"></div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <div className="text-center mb-4">
          {winner ? (
            <div className="text-2xl font-bold text-green-600">🎉 {winner} Wins!</div>
          ) : (
            <div className="text-lg font-semibold text-gray-700">
              Player {isXNext ? 'X' : 'O'}'s Turn
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 max-w-xs mx-auto">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-20 h-20 bg-gray-100 border-2 border-gray-300 rounded-lg text-3xl font-bold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            >
              {cell && (
                <span className={cell === 'X' ? 'text-blue-600' : 'text-red-600'}>
                  {cell}
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          New Game
        </button>
      </div>
    </div>
  );
};

function App() {
  const [stage, setStage] = useState<'vscode' | 'emulator' | 'app-detail' | 'about' | 'tic-tac-toe'>('vscode');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Simulate battery drain
  useEffect(() => {
    const batteryTimer = setInterval(() => {
      setBatteryLevel(prev => Math.max(20, prev - Math.random() * 2));
    }, 30000);
    return () => clearInterval(batteryTimer);
  }, []);

  // Keyboard event listener
  useEffect(() => {
    if (stage !== 'vscode') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (isTyping) return;
      
      const targetCommand = 'npm run android';
      const currentChar = targetCommand[terminalText.length];
      
      if (e.key === currentChar) {
        setTerminalText(prev => prev + e.key);
        
        if (terminalText + e.key === targetCommand) {
          setIsTyping(true);
          setTimeout(() => {
            setStage('emulator');
            setIsTyping(false);
          }, 1500);
        }
      } else if (e.key === 'Backspace') {
        setTerminalText(prev => prev.slice(0, -1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [stage, terminalText, isTyping]);

  const handleAppClick = (app: App) => {
    setSelectedApp(app);
    setStage('app-detail');
  };

  const handleBackToHome = () => {
    setStage('emulator');
    setSelectedApp(null);
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Filter apps based on search and category
  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(apps.map(app => app.category)))];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getBatteryColor = () => {
    if (batteryLevel > 50) return 'text-green-400';
    if (batteryLevel > 20) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* VSCode Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${stage === 'vscode' ? 'blur-sm' : 'blur-none opacity-20'}`}>
        <div className="h-full bg-gray-800">
          {/* VSCode Header */}
          <div className="bg-gray-700 px-4 py-2 flex items-center space-x-4 border-b border-gray-600">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-300 text-sm flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Visual Studio Code</span>
            </div>
          </div>

          {/* VSCode Sidebar */}
          <div className="flex h-full">
            <div className="w-12 bg-gray-800 border-r border-gray-600 flex flex-col items-center py-4 space-y-4">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </div>
            
            {/* VSCode Content */}
            <div className="flex-1 flex flex-col">
              <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
                <div className="flex space-x-4">
                  <div className="bg-gray-800 px-3 py-1 rounded-t text-sm text-gray-300">package.json</div>
                  <div className="bg-gray-700 px-3 py-1 rounded-t text-sm text-gray-400">App.tsx</div>
                </div>
              </div>
              
              <div className="flex-1 bg-gray-800 p-4">
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div className="text-blue-400">{`{`}</div>
                  <div className="pl-4">"name": <span className="text-green-400">"ashwet's-portfolio"</span>,</div>
                  <div className="pl-4">"version": <span className="text-green-400">"1.1.1"</span>,</div>
                  <div className="pl-4">"scripts": {`{`}</div>
                  <div className="pl-8">"android": <span className="text-green-400">"react-native run-android"</span>,</div>
                  <div className="pl-8">"ios": <span className="text-green-400">"react-native run-ios"</span></div>
                  <div className="pl-4">{`}`}</div>
                  <div className="text-blue-400">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Overlay */}
      {stage === 'vscode' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Terminal className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Launch Android Emulator</h2>
            </div>
            
            <div className="bg-black rounded-lg p-4 mb-6 font-mono">
              <div className="text-green-400 mb-2">
                $ {terminalText}<span className="animate-pulse">|</span>
              </div>
              {terminalText.length > 0 && terminalText !== 'npm run android' && (
                <div className="text-gray-500 text-sm">Keep typing: npm run android</div>
              )}
              {terminalText === 'npm run android' && (
                <div className="text-yellow-400 text-sm">Starting Android emulator...</div>
              )}
            </div>
            
            <div className="text-gray-400 text-sm text-center">
              Type "npm run android" to launch the emulator and get started.
            </div>
          </div>
        </div>
      )}

      {/* Android Emulator */}
      {(stage === 'emulator' || stage === 'app-detail' || stage === 'about' || stage === 'tic-tac-toe') && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative">
            {/* Phone Frame */}
            <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-black rounded-[2.5rem] w-80 h-[640px] relative overflow-hidden border-8 border-gray-800">
                {/* Android Status Bar */}
                <div className="bg-black px-4 py-2 flex justify-between items-center text-white text-xs relative z-10">
                  <div className="flex items-center space-x-1">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <span className="ml-1">BSNL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{formatTime(currentTime)}</span>
                    <div className="flex items-center">
                      <Battery className={`w-4 h-4 ${getBatteryColor()}`} />
                      <span className={`text-xs ml-1 ${getBatteryColor()}`}>{Math.round(batteryLevel)}%</span>
                    </div>
                  </div>
                </div>

                {/* Home Screen */}
                {stage === 'emulator' && (
                  <div className="h-full bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative">
                    {/* Wallpaper overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Time Widget */}
                      <div className="text-center text-white mb-8 mt-8">
                        <div className="text-4xl font-light">{formatTime(currentTime)}</div>
                        <div className="text-sm opacity-75">{currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
                      </div>

                      {/* App Grid */}
                      <div className="flex-1 grid grid-cols-4 gap-4 content-start">
                        {/* About Me App */}
                        <div 
                          onClick={() => setStage('about')}
                          className="flex flex-col items-center space-y-2 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                        >
                          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <span className="text-white text-xs text-center">About Me</span>
                        </div>

                        {/* My Apps Folder */}
                        <div 
                          onClick={() => setStage('app-detail')}
                          className="flex flex-col items-center space-y-2 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                        >
                          <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg relative">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="w-2 h-2 bg-white rounded-sm"></div>
                              <div className="w-2 h-2 bg-white rounded-sm"></div>
                              <div className="w-2 h-2 bg-white rounded-sm"></div>
                              <div className="w-2 h-2 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <span className="text-white text-xs text-center">My Apps</span>
                        </div>

                        {/* Tic Tac Toe Game */}
                        <div 
                          onClick={() => setStage('tic-tac-toe')}
                          className="flex flex-col items-center space-y-2 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                        >
                          <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="grid grid-cols-3 gap-0.5">
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <span className="text-white text-xs text-center">Tic Tac Toe</span>
                        </div>
                      </div>

                      {/* Navigation Bar */}
                      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-full px-6 py-3 flex justify-center space-x-8 mt-4">
                        <button className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200">
                          <Home className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200">
                          <Square className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200">
                          <Triangle className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* About Me Screen */}
                {stage === 'about' && (
                  <div className="h-full bg-gray-100">
                    {/* Header */}
                    <div className="bg-white shadow-sm px-4 py-3 flex items-center">
                      <button
                        onClick={handleBackToHome}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <h1 className="text-lg font-semibold text-gray-800 ml-4">Profile</h1>
                    </div>

                    {/* Scrollable Content */}
                    <div className="h-full overflow-y-auto pb-20">
                      {/* Profile Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <img 
                              src="https://res.cloudinary.com/dz6qeyy6r/image/upload/v1753187160/ashwet_jscezc.jpg" 
                              alt="Ashwet Kini" 
                              className="w-20 h-20 rounded-full object-cover"
                            />
                          </div>
                          <h2 className="text-2xl font-bold">Ashwet Kini</h2>
                          <p className="text-blue-100 font-medium">React Native Developer</p>
                          <div className="flex justify-center mt-4 space-x-4">
                            <div className="text-center">
                              <div className="text-xl font-bold">5+</div>
                              <div className="text-xs text-blue-100">Apps Built</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold">1+</div>
                              <div className="text-xs text-blue-100">Years Exp</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold">1K+</div>
                              <div className="text-xs text-blue-100">Downloads</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Cards */}
                      <div className="p-4 space-y-4">
                        {/* Current Role */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Code className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="ml-3">
                              <h3 className="font-semibold text-gray-800">Current Position</h3>
                              <p className="text-sm text-gray-500">Full Stack Developer</p>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="font-medium text-gray-800">TruSpirit Finserve Consultant Pvt Ltd</p>
                            <p className="text-sm text-gray-600 mt-1">Leading all in-house technology initiatives and development projects</p>
                          </div>
                        </div>

                        {/* Key Projects */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            Key Achievements
                          </h3>
                          <div className="space-y-3">
                            <div className="border-l-4 border-blue-500 pl-4">
                              <h4 className="font-medium text-gray-800">TruSpirit Mobile App</h4>
                              <p className="text-sm text-gray-600">Agent onboarding and loan lead generation platform</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React Native</span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Node.js</span>
                              </div>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4">
                              <h4 className="font-medium text-gray-800">Tech Leadership</h4>
                              <p className="text-sm text-gray-600">Managing all in-house technology responsibilities and team coordination</p>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <h3 className="font-semibold text-gray-800 mb-3">Technical Skills</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-700">React Native</span>
                                <span className="text-gray-500">Expert</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-700">Node.js</span>
                                <span className="text-gray-500">Advanced</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-700">MongoDB</span>
                                <span className="text-gray-500">Advanced</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-700">React</span>
                                <span className="text-gray-500">Expert</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-cyan-600 h-2 rounded-full" style={{width: '88%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-600 text-sm">@</span>
                              </div>
                              <span className="ml-3 text-gray-700">ashukini3@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-600 text-sm">📱</span>
                              </div>
                              <span className="ml-3 text-gray-700">Open to work and collaborative opportunities in Full-Stack Development.</span>
                            </div>
                          </div>
                        </div>

                        {/* Education & Certifications */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <h3 className="font-semibold text-gray-800 mb-3">Education & Certifications</h3>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                                <span className="text-blue-600 text-sm">🎓</span>
                              </div>
                              <div className="ml-3">
                                <p className="font-medium text-gray-800"> Computer Engineering</p>
                                <p className="text-sm text-gray-600">Diploma Degree</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm">📜</span>
                              </div>
                              <div className="ml-3">
                                <p className="font-medium text-gray-800">React Native Certified</p>
                                <p className="text-sm text-gray-600">Advanced Mobile Development</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tic Tac Toe Game */}
                {stage === 'tic-tac-toe' && (
                  <TicTacToe onClose={handleBackToHome} />
                )}

                {/* My Apps Screen */}
                {stage === 'app-detail' && !selectedApp && (
                  <div className="h-full bg-gray-100 flex flex-col">
                    {/* Header */}
                    <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={handleBackToHome}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <h1 className="text-lg font-semibold text-gray-800 ml-4">My Applications</h1>
                      </div>
                      <div className="text-sm text-gray-500">{filteredApps.length} apps</div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-4 py-3 bg-white border-b border-gray-200">
                      <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                        <span className="text-gray-400 mr-2">🔍</span>
                        <input
                          type="text"
                          placeholder="Search apps..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-500 outline-none"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery('')}
                            className="text-gray-400 hover:text-gray-600 ml-2"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="px-4 py-3 bg-white border-b border-gray-200">
                      <div className="flex space-x-3 overflow-x-auto">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors duration-200 ${
                              selectedCategory === category
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Apps List */}
                    <div className="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-3 pb-20">
                      {filteredApps.length === 0 ? (
                        <div className="text-center py-12">
                          <div className="text-gray-400 text-lg mb-2">No apps found</div>
                          <div className="text-gray-500 text-sm">Try searching for something else</div>
                        </div>
                      ) : (
                        filteredApps.map((app) => (
                        <div
                          key={app.id}
                          onClick={() => handleAppClick(app)}
                          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`bg-gradient-to-r ${app.color} p-3 rounded-xl shadow-md`}>
                              {app.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-800">{app.name}</h3>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm mt-1">{app.description}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{app.category}</span>
                                <span className="text-xs text-gray-500">Updated recently</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        ))
                      )}

                      {/* Recommended Section */}
                      {/* {filteredApps.length > 0 && (
                        <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended for you</h3>
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                              <Code className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold">Portfolio Showcase</h4>
                              <p className="text-sm opacity-90">Explore more of my development work</p>
                            </div>
                          </div>
                        </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                )}

                {/* App Detail Screen */}
                {stage === 'app-detail' && selectedApp && (
                  <div className="h-full bg-white overflow-y-auto">
                    {/* App Header */}
                    <div className="bg-white shadow-sm px-4 py-3 flex items-center sticky top-0 z-10">
                      <button
                        onClick={() => setSelectedApp(null)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <h1 className="text-lg font-semibold text-gray-800 ml-4">{selectedApp.name}</h1>
                    </div>

                    {/* App Info Card */}
                    <div className="p-4">
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start space-x-4">
                          <div className={`bg-gradient-to-r ${selectedApp.color} p-4 rounded-2xl shadow-lg`}>
                            {selectedApp.icon}
                          </div>
                          <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-800">{selectedApp.name}</h2>
                            <p className="text-gray-600 mt-1">{selectedApp.description}</p>
                            <div className="flex items-center mt-3 space-x-4">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="ml-1 font-semibold text-gray-700">4.8</span>
                                <span className="text-sm text-gray-500 ml-1">(127 reviews)</span>
                              </div>
                            </div>
                            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                              <span>1K+ downloads</span>
                              <span>•</span>
                              <span>{selectedApp.category}</span>
                              <span>•</span>
                              <span>Updated May 2025</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mt-4">
                          <button className={`flex-1 bg-gradient-to-r ${selectedApp.color} text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}>
                            Install
                          </button>
                          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <ExternalLink className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Screenshots */}
                    <div className="px-4 mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Screenshots</h3>
                      <div className="flex space-x-3 overflow-x-auto pb-2">
                        {selectedApp.screenshots.map((screenshot, index) => (
                          <img
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className="w-40 h-72 rounded-lg object-cover shadow-md flex-shrink-0 border border-gray-200"
                          />
                        ))}
                      </div>
                    </div>

                    {/* About this app */}
                    <div className="px-4 mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">About this app</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 leading-relaxed">{selectedApp.fullDescription}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="px-4 mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                      <div className="space-y-3">
                        {selectedApp.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-gray-100">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 flex-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="px-4 mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Stack</h3>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex flex-wrap gap-2">
                          {selectedApp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Developer Info */}
                    <div className="px-4 mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Developer</h3>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Ashwet Kini</p>
                            <p className="text-sm text-gray-600">React Native Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;