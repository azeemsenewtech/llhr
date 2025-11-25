import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Paperclip, 
  Smile, 
  Send, 
  MoreVertical, 
  Bot, 
  User 
} from 'lucide-react';

const ChatApp = () => {
  // --- State Management ---
  const [activeChatId, setActiveChatId] = useState(3); // Defaulting to the 3rd item as shown in image
  const [inputMessage, setInputMessage] = useState('');
  
  // Mock Data for Sidebar
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'LLHAR AI Assistant',
      role: 'Bot',
      initials: <Bot size={20} />,
      avatarColor: 'bg-indigo-600',
      status: 'online',
      time: '2 min ago',
      preview: 'I can help you find properties, answer ...',
      unreadCount: 0,
      messages: [] 
    },
    {
      id: 2,
      name: 'John Smith (Landlord)',
      role: 'Landlord',
      initials: 'JS',
      avatarColor: 'bg-slate-700',
      status: 'online',
      time: '1 hour ago',
      preview: 'The maintenance team will be th...',
      unreadCount: 2,
      messages: []
    },
    {
      id: 3,
      name: 'John Smith (Landlord)',
      role: 'Landlord',
      initials: 'JS',
      avatarColor: 'bg-slate-700',
      status: 'online',
      time: '1 hour ago',
      preview: 'The maintenance team will be t...',
      unreadCount: 2,
      messages: [] // Currently empty as per image
    },
    {
      id: 4,
      name: 'John Smith (Landlord)',
      role: 'Landlord',
      initials: 'JS',
      avatarColor: 'bg-slate-700',
      status: 'online',
      time: '1 hour ago',
      preview: 'The maintenance team will be th...',
      unreadCount: 2,
      messages: []
    }
  ]);

  const activeChat = conversations.find(c => c.id === activeChatId);
  const messagesEndRef = useRef(null);

  // --- Functionality ---

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: text,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeChatId) {
        return { ...c, messages: [...c.messages, newMessage] };
      }
      return c;
    }));

    setInputMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSendMessage(inputMessage);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 p-4 md:p-8 font-sans">
      
      {/* Container matching the card-like look */}
      <div className="flex w-full max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[800px]">
        
        {/* --- LEFT SIDEBAR --- */}
        <div className="w-80 md:w-96 flex-shrink-0 flex flex-col border-r border-gray-200 bg-white">
          
          {/* Search Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              />
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((chat) => (
              <div 
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`flex items-start p-4 cursor-pointer transition-colors border-l-4 ${
                  activeChatId === chat.id 
                    ? 'bg-blue-50 border-blue-500' 
                    : 'bg-white border-transparent hover:bg-gray-50'
                }`}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${chat.avatarColor} flex items-center justify-center text-white font-medium text-sm`}>
                    {chat.initials}
                  </div>
                  {/* Online Dot */}
                  <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-bold text-gray-900 truncate">
                      {chat.name}
                    </h3>
                    <span className="text-[11px] text-gray-400 font-light whitespace-nowrap ml-2">
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500 truncate pr-2">
                      {chat.preview}
                    </p>
                    {/* Unread Badge */}
                    {chat.unreadCount > 0 && (
                      <span className="flex items-center justify-center w-5 h-5 bg-[#0F766E] text-white text-[10px] font-bold rounded-full">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT CHAT AREA --- */}
        <div className="flex-1 flex flex-col bg-white">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-10 h-10 rounded-full ${activeChat.avatarColor} flex items-center justify-center text-white font-medium text-sm`}>
                  {activeChat.initials}
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-sm font-bold text-gray-800">{activeChat.name}</h2>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col">
            {activeChat.messages.length === 0 ? (
              // Empty State (Matches Image)
              <div className="flex-1 flex flex-col items-center justify-center">
                <p className="text-gray-300 font-medium text-sm">
                  No messages yet. Start the conversation!
                </p>
              </div>
            ) : (
              // Messages State
              <div className="space-y-4">
                {activeChat.messages.map((msg) => (
                  <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                     <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                       msg.sender === 'me' 
                        ? 'bg-[#5FA5F9] text-white rounded-tr-sm' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                     }`}>
                       {msg.text}
                     </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Footer Input Area */}
          <div className="p-6 pt-2">
            
            {/* Quick Actions */}
            <div className="flex gap-3 mb-4">
              {['Find properties', 'Check my score', 'Schedule viewing'].map((action) => (
                <button 
                  key={action}
                  onClick={() => handleSendMessage(action)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input Field */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Paperclip size={18} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Smile size={18} />
              </button>
              
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..." 
                  className="w-full bg-gray-50 border-none rounded-lg py-3 px-4 text-sm text-gray-700 focus:ring-0 placeholder-gray-400"
                />
              </div>

              <button 
                onClick={() => handleSendMessage(inputMessage)}
                className="p-3 bg-[#5FA5F9] hover:bg-blue-500 text-white rounded-lg shadow-sm transition-colors"
              >
                <Send size={18} className="ml-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChatApp;