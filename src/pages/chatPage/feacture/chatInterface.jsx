// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Search, 
//   Paperclip, 
//   Smile, 
//   Send, 
//   MoreVertical, 
//   Bot, 
//   User 
// } from 'lucide-react';

// const ChatApp = () => {
//   // --- State Management ---
//   const [activeChatId, setActiveChatId] = useState(3); // Defaulting to the 3rd item as shown in image
//   const [inputMessage, setInputMessage] = useState('');
  
//   // Mock Data for Sidebar
//   const [conversations, setConversations] = useState([
//     {
//       id: 1,
//       name: 'LLHAR AI Assistant',
//       role: 'Bot',
//       initials: <Bot size={20} />,
//       avatarColor: 'bg-indigo-600',
//       status: 'online',
//       time: '2 min ago',
//       preview: 'I can help you find properties, answer ...',
//       unreadCount: 0,
//       messages: [] 
//     },
//     {
//       id: 2,
//       name: 'John Smith (Landlord)',
//       role: 'Landlord',
//       initials: 'JS',
//       avatarColor: 'bg-slate-700',
//       status: 'online',
//       time: '1 hour ago',
//       preview: 'The maintenance team will be th...',
//       unreadCount: 2,
//       messages: []
//     },
//     {
//       id: 3,
//       name: 'John Smith (Landlord)',
//       role: 'Landlord',
//       initials: 'JS',
//       avatarColor: 'bg-slate-700',
//       status: 'online',
//       time: '1 hour ago',
//       preview: 'The maintenance team will be t...',
//       unreadCount: 2,
//       messages: [] // Currently empty as per image
//     },
//     {
//       id: 4,
//       name: 'John Smith (Landlord)',
//       role: 'Landlord',
//       initials: 'JS',
//       avatarColor: 'bg-slate-700',
//       status: 'online',
//       time: '1 hour ago',
//       preview: 'The maintenance team will be th...',
//       unreadCount: 2,
//       messages: []
//     }
//   ]);

//   const activeChat = conversations.find(c => c.id === activeChatId);
//   const messagesEndRef = useRef(null);

//   // --- Functionality ---

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [activeChat?.messages]);

//   const handleSendMessage = (text) => {
//     if (!text.trim()) return;

//     const newMessage = {
//       id: Date.now(),
//       text: text,
//       sender: 'me',
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setConversations(prev => prev.map(c => {
//       if (c.id === activeChatId) {
//         return { ...c, messages: [...c.messages, newMessage] };
//       }
//       return c;
//     }));

//     setInputMessage('');
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') handleSendMessage(inputMessage);
//   };

//   return (
//     <div className="flex  w-full bg-gray-50 p-4 md:p-4 font-sans">
      
//       {/* Container matching the card-like look */}
//       <div className="flex flex-col w-full max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[470px]">
        
//         {/* --- LEFT SIDEBAR --- */}
//         <div className="w-80 md:w-96 flex-shrink-0 flex flex-col border-r border-gray-200 bg-white">
          
//           {/* Search Header */}
//           <div className="p-4 border-b border-gray-100">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//               <input 
//                 type="text" 
//                 placeholder="Search conversations..." 
//                 className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
//               />
//             </div>
//           </div>

//           {/* List */}
//           <div className="flex-1 overflow-y-auto">
//             {conversations.map((chat) => (
//               <div 
//                 key={chat.id}
//                 onClick={() => setActiveChatId(chat.id)}
//                 className={`flex items-start p-4 cursor-pointer transition-colors border-l-4 ${
//                   activeChatId === chat.id 
//                     ? 'bg-blue-50 border-blue-500' 
//                     : 'bg-white border-transparent hover:bg-gray-50'
//                 }`}
//               >
//                 {/* Avatar */}
//                 <div className="relative flex-shrink-0">
//                   <div className={`w-12 h-12 rounded-full ${chat.avatarColor} flex items-center justify-center text-white font-medium text-sm`}>
//                     {chat.initials}
//                   </div>
//                   {/* Online Dot */}
//                   <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="ml-3 flex-1 min-w-0">
//                   <div className="flex justify-between items-baseline mb-1">
//                     <h3 className="text-sm font-bold text-gray-900 truncate">
//                       {chat.name}
//                     </h3>
//                     <span className="text-[11px] text-gray-400 font-light whitespace-nowrap ml-2">
//                       {chat.time}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <p className="text-xs text-gray-500 truncate pr-2">
//                       {chat.preview}
//                     </p>
//                     {/* Unread Badge */}
//                     {chat.unreadCount > 0 && (
//                       <span className="flex items-center justify-center w-5 h-5 bg-[#0F766E] text-white text-[10px] font-bold rounded-full">
//                         {chat.unreadCount}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- RIGHT CHAT AREA --- */}
//         <div className="flex-1 flex flex-col bg-white">
          
//           {/* Header */}
//           <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className={`w-10 h-10 rounded-full ${activeChat.avatarColor} flex items-center justify-center text-white font-medium text-sm`}>
//                   {activeChat.initials}
//                 </div>
//                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
//               </div>
//               <div>
//                 <h2 className="text-sm font-bold text-gray-800">{activeChat.name}</h2>
//                 <p className="text-xs text-gray-400">Online</p>
//               </div>
//             </div>
//             <button className="text-gray-400 hover:text-gray-600">
//               <MoreVertical size={20} />
//             </button>
//           </div>

//           {/* Chat Body */}
//           <div className="flex-1 overflow-y-auto p-6 flex flex-col">
//             {activeChat.messages.length === 0 ? (
//               // Empty State (Matches Image)
//               <div className="flex-1 flex flex-col items-center justify-center">
//                 <p className="text-gray-300 font-medium text-sm">
//                   No messages yet. Start the conversation!
//                 </p>
//               </div>
//             ) : (
//               // Messages State
//               <div className="space-y-4">
//                 {activeChat.messages.map((msg) => (
//                   <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
//                      <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
//                        msg.sender === 'me' 
//                         ? 'bg-[#5FA5F9] text-white rounded-tr-sm' 
//                         : 'bg-gray-100 text-gray-800 rounded-tl-sm'
//                      }`}>
//                        {msg.text}
//                      </div>
//                   </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//               </div>
//             )}
//           </div>

//           {/* Footer Input Area */}
//           <div className="p-6 pt-2">
            
//             {/* Quick Actions */}
//             <div className="flex gap-3 mb-4">
//               {['Find properties', 'Check my score', 'Schedule viewing'].map((action) => (
//                 <button 
//                   key={action}
//                   onClick={() => handleSendMessage(action)}
//                   className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
//                 >
//                   {action}
//                 </button>
//               ))}
//             </div>

//             {/* Input Field */}
//             <div className="flex items-center gap-3">
//               <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
//                 <Paperclip size={18} />
//               </button>
//               <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
//                 <Smile size={18} />
//               </button>
              
//               <div className="flex-1 relative">
//                 <input 
//                   type="text" 
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   placeholder="Type your message..." 
//                   className="w-full bg-gray-50 border-none rounded-lg py-3 px-4 text-sm text-gray-700 focus:ring-0 placeholder-gray-400"
//                 />
//               </div>

//               <button 
//                 onClick={() => handleSendMessage(inputMessage)}
//                 className="p-3 bg-[#5FA5F9] hover:bg-blue-500 text-white rounded-lg shadow-sm transition-colors"
//               >
//                 <Send size={18} className="ml-0.5" />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Search, 
//   Paperclip, 
//   Smile, 
//   Send, 
//   MoreVertical, 
//   Bot, 
//   User,
//   Menu 
// } from 'lucide-react';

// const ChatApp = () => {
//   const [activeChatId, setActiveChatId] = useState(3);
//   const [inputMessage, setInputMessage] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [conversations, setConversations] = useState([
//     {
//       id: 1,
//       name: 'LLHAR AI Assistant',
//       role: 'Bot',
//       initials: <Bot size={20} />,
//       avatarColor: 'bg-indigo-600',
//       status: 'online',
//       time: '2 min ago',
//       preview: 'I can help you find properties...',
//       unreadCount: 0,
//       messages: [],
//     },
//     {
//       id: 2,
//       name: 'John Smith',
//       role: 'Landlord',
//       initials: "JS",
//       avatarColor: 'bg-slate-700',
//       status: 'online',
//       time: '1 hour ago',
//       preview: 'The maintenance team will...',
//       unreadCount: 2,
//       messages: [],
//     },
//     {
//       id: 3,
//       name: 'John Smith',
//       role: 'Landlord',
//       initials: "JS",
//       avatarColor: 'bg-slate-700',
//       status: 'online',
//       time: '1 hour ago',
//       preview: 'The maintenance team will...',
//       unreadCount: 2,
//       messages: [],
//     }
//   ]);

//   const activeChat = conversations.find(c => c.id === activeChatId);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [activeChat?.messages]);

//   const handleSendMessage = (text) => {
//     if (!text.trim()) return;

//     const newMessage = {
//       id: Date.now(),
//       text,
//       sender: 'me',
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//     };

//     setConversations(prev =>
//       prev.map(c =>
//         c.id === activeChatId
//           ? { ...c, messages: [...c.messages, newMessage] }
//           : c
//       )
//     );

//     setInputMessage('');
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleSendMessage(inputMessage);
//   };

//   return (
//     <div className="w-full h-[480px] bg-gray-50 flex justify-center items-center p-2 md:p-2">

//       <div className="flex w-full max-w-7xl bg-white rounded-xl shadow border overflow-hidden h-full md:h-[500px]">

//         {/* ---- SIDEBAR (Mobile Drawer + Desktop Sidebar) ---- */}
//         <div
//           className={`
//             fixed md:relative 
//             top-0 left-0 
//             h-full 
//             w-72 
//             bg-white 
//             border-r 
//             border-gray-200 
//             z-50 
//             transition-transform duration-300
//             ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//           `}
//         >
//           {/* Close Sidebar Button (Mobile Only) */}
//           <div className="md:hidden p-4">
//             <button 
//               className="text-gray-600"
//               onClick={() => setSidebarOpen(false)}
//             >
//               Close
//             </button>
//           </div>

//           {/* Search Box */}
//           <div className="p-4 border-b border-gray-100">
//             <div className="relative">
//               <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
//               <input
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-4 py-2 bg-gray-50 border rounded-lg
//                            text-sm font-poppin focus:ring-2 focus:ring-blue-100"
//               />
//             </div>
//           </div>

//           {/* Conversation List */}
//           <div className="overflow-y-auto h-full pb-24 md:pb-0">
//             {conversations.map((chat) => (
//               <div
//                 key={chat.id}
//                 onClick={() => {
//                   setActiveChatId(chat.id);
//                   setSidebarOpen(false);
//                 }}
//                 className={`flex items-start p-4 cursor-pointer transition border-l-4 ${
//                   activeChatId === chat.id
//                     ? "bg-blue-50 border-blue-500"
//                     : "border-transparent hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="relative flex-shrink-0">
//                   <div className={`w-12 h-12 rounded-full ${chat.avatarColor} flex font-poppin items-center justify-center text-white`}>
//                     {chat.initials}
//                   </div>
//                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
//                 </div>

//                 <div className="ml-3 flex-1">
//                   <div className="flex justify-between">
//                     <h3 className="text-sm font-poppin font-bold">{chat.name}</h3>
//                     <span className="text-xs font-poppin text-gray-400">{chat.time}</span>
//                   </div>
//                   <div className="text-xs font-poppin text-gray-500 truncate">{chat.preview}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ---- MAIN CHAT AREA ---- */}
//         <div className="flex-1 flex flex-col">

//           {/* Header */}
//           <div className="p-4 border-b flex items-center justify-between">

//             {/* Menu Button (Mobile Only) */}
//             <button
//               className="md:hidden text-gray-600"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <Menu size={22} />
//             </button>

//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className={`w-10 h-10 rounded-full ${activeChat.avatarColor} flex items-center justify-center text-white`}>
//                   {activeChat.initials}
//                 </div>
//                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
//               </div>
//               <div>
//                 <h2 className="text-sm font-poppin font-bold">{activeChat.name}</h2>
//                 <p className="text-xs font-poppin text-gray-500">Online</p>
//               </div>
//             </div>

//             <MoreVertical size={20} className="text-gray-400" />
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {activeChat.messages.length === 0 ? (
//               <p className="text-gray-300 font-poppin text-center mt-10">
//                 No messages yet. Start the conversation!
//               </p>
//             ) : (
//               activeChat.messages.map(msg => (
//                 <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
//                   <div
//                     className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm font-poppin ${
//                       msg.sender === "me"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))
//             )}

//             <div ref={messagesEndRef}></div>
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t">
//             <div className="flex gap-3 items-center">
//               <button><Paperclip size={18} className="text-gray-400" /></button>
//               <button><Smile size={18} className="text-gray-400" /></button>

//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Type a message..."
//                 className="flex-1 bg-gray-100 rounded-lg py-3  px-4 text-sm font-poppin"
//               />

//               <button
//                 className="p-3 bg-blue-500 text-white rounded-lg"
//                 onClick={() => handleSendMessage(inputMessage)}
//               >
//                 <Send size={18} />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

// Connect to Socket.IO server
const socket = io("http://localhost:3001/");

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  // Fetch users
  const fetchUsers = async () => {
    if (!user) return;
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data.filter((u) => u._id !== user._id));
  };

  // Login / Register
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", { email });
      setUser(res.data.user);
      socket.emit("join", res.data.user._id);
    } catch {
        const reg = await axios.post("http://localhost:3001/register", {
          name,
        email,
      });
      setUser(reg.data.user);
      socket.emit("join", reg.data.user._id);
    }
  };

  useEffect(() => {
    if (user) fetchUsers();
  }, [user]);

  // Select a user to chat with
  const selectUser = async (u) => {
    setSelectedUser(u);

    // Join the chat room for this conversation
    socket.emit("join_chat", { senderId: user._id, receiverId: u._id });

    const res = await axios.get(
      `http://localhost:3001/messages/${user._id}/${u._id}`
    );
    setChatHistory((prev) => ({ ...prev, [u._id]: res.data }));
  };

  // Send a message
  const sendMessage = () => {
    if (!selectedUser || !message) return;
    const data = { senderId: user._id, receiverId: selectedUser._id, message };
    socket.emit("send_message", data);
    setChatHistory((prev) => ({
      ...prev,
      [selectedUser._id]: [...(prev[selectedUser._id] || []), data],
    }));
    setMessage("");
  };

  // Listen for messages and online users
  useEffect(() => {
    socket.on("receive_message", ({ senderId, message }) => {
      const chatUserId = senderId;
      setChatHistory((prev) => ({
        ...prev,
        [chatUserId]: [...(prev[chatUserId] || []), { senderId, message }],
      }));
    });

    socket.on("online_users", (ids) => {
      setOnlineUsers(ids);
    });

    return () => {
      socket.off("receive_message");
      socket.off("online_users");
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, selectedUser]);

  // Login / Register form
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-purple-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Login / Register
          </h2>
          <input
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleLogin}
          >
            Enter Chat
          </button>
        </div>
      </div>
    );
  }

  // Chat UI
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } border-r p-4 bg-white flex flex-col transition-width duration-300`}
      >
        <button
          className="mb-4 text-gray-500 hover:text-gray-800"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "«" : "»"}
        </button>

        {sidebarOpen && (
          <div className="mb-6 p-4 bg-blue-100 rounded-xl text-center shadow-sm">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-sm text-gray-700">{user.email}</p>
          </div>
        )}

        {sidebarOpen && <h3 className="font-semibold mb-3 text-gray-600">Users</h3>}
        <div className="flex-1 overflow-y-auto">
          {users.map((u) => {
            const isOnline = onlineUsers.includes(u._id);
            return (
              <div
                key={u._id}
                onClick={() => selectUser(u)}
                className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                  selectedUser?._id === u._id ? "bg-blue-200 font-semibold" : "hover:bg-gray-100"
                }`}
              >
                <span
                  className={`h-3 w-3 rounded-full mr-3 ${
                    isOnline ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                {sidebarOpen && <span>{u.name}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Box */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-semibold mb-3 text-gray-700 text-lg">
          Chat with: {selectedUser ? selectedUser.name : "Select a user"}
        </h3>
        <div className="flex-1 p-4 border rounded-2xl bg-white overflow-y-auto space-y-3 flex flex-col">
          {(selectedUser && chatHistory[selectedUser._id])?.map((m, i) => (
            <div
              key={i}
              className={`max-w-xs p-3 rounded-2xl break-words ${
                m.senderId === user._id
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              <span className="font-semibold">
                {m.senderId === user._id ? "You" : selectedUser.name}
              </span>
              : {m.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {selectedUser && (
          <div className="flex mt-4">
            <input
              className="flex-1 p-3 border rounded-2xl mr-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
            />
            <button
              className="bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition-colors"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// App.jsx
// import { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import axios from "axios";

// // Connect to your backend
// const socket = io("https://chat-api-iota-lyart.vercel.app");

// export default function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [user, setUser] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState({});
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () =>
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

//   // Fetch all users
//   const fetchUsers = async () => {
//     if (!user) return;
//     try {
//       const res = await axios.get(
//         "http://localhost:3001/users"
//       );
//       setUsers(res.data.filter((u) => u._id !== user._id));
//     } catch (err) {
//       console.error("Error fetching users:", err);
//     }
//   };

//   // Login or register
//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3001/login",
//         { email }
//       );
//       setUser(res.data.user);
//       socket.emit("join", res.data.user._id);
//     } catch {
//       const reg = await axios.post(
//         "http://localhost:3001/register",
//         { name, email }
//       );
//       setUser(reg.data.user);
//       socket.emit("join", reg.data.user._id);
//     }
//   };

//   // Fetch users after login
//   useEffect(() => {
//     if (user) fetchUsers();
//   }, [user]);

//   // Select user and load chat history
//   const selectUser = async (u) => {
//     setSelectedUser(u);
//     try {
//       const res = await axios.get(
//         `http://localhost:3001/messages/${user._id}/${u._id}`
//       );
//       setChatHistory((prev) => ({ ...prev, [u._id]: res.data }));
//     } catch (err) {
//       console.error("Error loading messages:", err);
//     }
//   };

//   // Send message
//   const sendMessage = () => {
//     if (!selectedUser || !message) return;
//     const data = {
//       senderId: user._id,
//       receiverId: selectedUser._id,
//       message,
//     };
//     socket.emit("send_message", data);
//     setChatHistory((prev) => ({
//       ...prev,
//       [selectedUser._id]: [...(prev[selectedUser._id] || []), data],
//     }));
//     setMessage("");
//   };

//   // Receive messages and online users
//   useEffect(() => {
//     socket.on("receive_message", ({ senderId, message }) => {
//       setChatHistory((prev) => ({
//         ...prev,
//         [senderId]: [...(prev[senderId] || []), { senderId, message }],
//       }));
//     });

//     socket.on("online_users", (ids) => {
//       setOnlineUsers(ids);
//     });

//     return () => {
//       socket.off("receive_message");
//       socket.off("online_users");
//     };
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [chatHistory, selectedUser]);

//   // Login UI
//   if (!user) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-purple-200">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
//             Login / Register
//           </h2>
//           <input
//             className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//           />
//           <input
//             className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//           />
//           <button
//             className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
//             onClick={handleLogin}
//           >
//             Enter Chat
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Chat UI
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`${
//           sidebarOpen ? "w-64" : "w-16"
//         } border-r p-4 bg-white flex flex-col transition-width duration-300`}
//       >
//         <button
//           className="mb-4 text-gray-500 hover:text-gray-800"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           {sidebarOpen ? "«" : "»"}
//         </button>

//         {sidebarOpen && (
//           <div className="mb-6 p-4 bg-blue-100 rounded-xl text-center shadow-sm">
//             <h2 className="font-bold text-lg">{user.name}</h2>
//             <p className="text-sm text-gray-700">{user.email}</p>
//           </div>
//         )}

//         {sidebarOpen && <h3 className="font-semibold mb-3 text-gray-600">Users</h3>}
//         <div className="flex-1 overflow-y-auto">
//           {users.map((u) => {
//             const isOnline = onlineUsers.includes(u._id);
//             return (
//               <div
//                 key={u._id}
//                 onClick={() => selectUser(u)}
//                 className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
//                   selectedUser?._id === u._id
//                     ? "bg-blue-200 font-semibold"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 <span
//                   className={`h-3 w-3 rounded-full mr-3 ${
//                     isOnline ? "bg-green-500" : "bg-gray-400"
//                   }`}
//                 />
//                 {sidebarOpen && <span>{u.name}</span>}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Chat Box */}
//       <div className="flex-1 flex flex-col p-4">
//         <h3 className="font-semibold mb-3 text-gray-700 text-lg">
//           Chat with: {selectedUser ? selectedUser.name : "Select a user"}
//         </h3>
//         <div className="flex-1 p-4 border rounded-2xl bg-white overflow-y-auto space-y-3 flex flex-col">
//           {(selectedUser && chatHistory[selectedUser._id])?.map((m, i) => (
//             <div
//               key={i}
//               className={`max-w-xs p-3 rounded-2xl break-words ${
//                 m.senderId === user._id
//                   ? "bg-blue-500 text-white self-end"
//                   : "bg-gray-200 text-gray-800 self-start"
//               }`}
//             >
//               <span className="font-semibold">
//                 {m.senderId === user._id ? "You" : selectedUser.name}
//               </span>
//               : {m.message}
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>
//         {selectedUser && (
//           <div className="flex mt-4">
//             <input
//               className="flex-1 p-3 border rounded-2xl mr-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Type a message..."
//             />
//             <button
//               className="bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition-colors"
//               onClick={sendMessage}
//             >
//               Send
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
