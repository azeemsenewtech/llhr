// import {
//   FiGlobe,
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
// } from "react-icons/fi";

// const contactInfo = [
//   {
//     icon: <FiGlobe className="text-primary text-xl" />,
//     title: "Our Address",
//     lines: ["291 Roderick Wells, UK, Connecticut, 08429."],
//   },
//   {
//     icon: <FiMapPin className="text-primary text-xl" />,
//     title: "Working Hours",
//     lines: ["Mon–Fri: 8 AM – 5 PM", "Sat–Sun: 8 AM – 2 PM"],
//   },
//   {
//     icon: <FiMail className="text-primary text-xl" />,
//     title: "Email Us",
//     lines: ["info@example.com", "contact@example.com"],
//   },
//   {
//     icon: <FiPhone className="text-primary text-xl" />,
//     title: "Contact Us",
//     lines: ["+(000) 123-456-789", "+(0000) 1234-56789"],
//   },
// ];

// const formFields = [
//   {
//     label: "Name*",
//     placeholder: "Mimosic john",
//     type: "text",
//     icon: null,
//   },
//   {
//     label: "Email*",
//     placeholder: "your@email.com",
//     type: "email",
//     icon: null,
//   },
//   {
//     label: "Desired date*",
//     placeholder: "mm/dd/yyyy",
//     type: "text",
//     icon: (
//       <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
//     ),
//   },
//   {
//     label: "Desired time",
//     placeholder: "--:--",
//     type: "text",
//     icon: (
//       <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
//     ),
//   },
// ];

// const ContactSection = () => {
//   return (
//     <section className="w-full relative py-16 pb-80 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         {/* Header */}
//         <p className="text-sm text-primary">Contact Us</p>
//         <h1 className="text-3xl md:text-4xl font-bold text-[#1F2D3D]">
//           To Know About Us
//         </h1>

//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Form */}
//           <div className="bg-[#218AB61C] p-8 rounded-xl shadow-sm">
//             {/* Form */}
//             <form className="space-y-5">
//               {/* First 4 fields from array */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {formFields.map((field, idx) => (
//                   <div key={idx}>
//                     <label className="text-gray-700 font-medium text-sm">
//                       {field.label}
//                     </label>

//                     <div className="relative">
//                       <input
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         className="w-full mt-1 p-3 rounded-[15px] bg-white border border-primary/20 focus:outline-primary"
//                       />
//                       {field.icon}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Message Box */}
//               <div>
//                 <label className="text-gray-700 font-medium text-sm">
//                   Additional Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   placeholder="Please write any note here..."
//                   className="w-full mt-1 p-3 rounded-[15px] bg-white border border-primary/20 focus:outline-primary resize-none"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button

//                className="bg-primary flex items-center justify-center text-white py-3 px-6 rounded-md w-full font-semibold hover:bg-blue-700 transition">
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right Contact Details */}
//           <div className="space-y-8">
//             {contactInfo.map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="bg-[#E8F4FF] p-3 rounded-lg">{item.icon}</div>
//                 <div className="flex flex-col ">
//                   <h3 className="font-semibold font-poppins text-[18px] text-[#1F2D3D]">
//                     {item.title}
//                   </h3>
//                   <div className="flex gap-4">
//                     {item.lines.map((line, i) => (
//                       <p
//                         className="text-[#44525E]   font-poppin text-[13px] font-poppins"
//                         key={i}
//                       >
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default ContactSection;
import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client'; // Import Socket.io
import { 
  Send, 
  Paperclip, 
  MoreVertical, 
  Search, 
  Phone, 
  Video, 
  Smile,
  Check,
  CheckCheck,
  Wifi,
  WifiOff
} from 'lucide-react';

// --- Configuration ---
// Replace with your actual Socket Backend URL (e.g., http://localhost:3001)
const SOCKET_SERVER_URL = 'http://localhost:3001';

// --- Sub-Components ---

const ContactItem = ({ name, lastMessage, time, active, onClick, avatarColor }) => (
  <div 
    onClick={onClick}
    className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors mb-2
      ${active ? 'bg-blue-50 border-l-4 border-[#1e7e9e]' : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${avatarColor}`}>
      {name.charAt(0)}
    </div>
    <div className="ml-4 flex-1 overflow-hidden">
      <div className="flex justify-between items-center">
        <h4 className={`font-semibold text-sm ${active ? 'text-[#1e7e9e]' : 'text-slate-700'}`}>{name}</h4>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
    </div>
  </div>
);

const MessageBubble = ({ text, time, isMe, status }) => (
  <div className={`flex w-full mb-4 ${isMe ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm relative ${
      isMe 
        ? 'bg-[#1e7e9e] text-white rounded-br-none' 
        : 'bg-white text-slate-800 border border-gray-100 rounded-bl-none'
    }`}>
      <p className="text-sm leading-relaxed">{text}</p>
      <div className={`flex items-center justify-end gap-1 mt-1 ${isMe ? 'text-blue-100' : 'text-gray-400'}`}>
        <span className="text-[10px]">{time}</span>
        {isMe && (
          <span>
            {status === 'sent' && <Check size={12} />}
            {status === 'read' && <CheckCheck size={12} />}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ChatScreen = () => {
  // --- State ---
  const [activeChat, setActiveChat] = useState(1);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  
  // Ref to keep track of the socket instance
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // --- Socket.io Connection Logic ---
  useEffect(() => {
    // 1. Initialize Connection
    socketRef.current = io(SOCKET_SERVER_URL, {
      transports: ['websocket'], // Force WebSocket (optional but recommended)
      query: { userId: 'my_user_id' } // Send auth token or user ID here
    });

    // 2. Setup Event Listeners
    const socket = socketRef.current;

    socket.on('connect', () => {
      console.log("Connected to WebSocket Server:", socket.id);
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log("Disconnected");
      setIsConnected(false);
    });

    // 3. Listen for Incoming Messages
    socket.on('receive_message', (newMessage) => {
      console.log("New message received:", newMessage);
      setMessages((prev) => [...prev, { ...newMessage, isMe: false }]);
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // --- Auto-scroll ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Handle Send ---
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const messageData = {
      id: Date.now(),
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      chatId: activeChat,
      senderId: 'my_user_id',
    };

    // 1. Emit to Server
    if (socketRef.current) {
      socketRef.current.emit('send_message', messageData);
    }

    // 2. Optimistic UI Update (Show immediately for the sender)
    setMessages((prev) => [...prev, { ...messageData, isMe: true, status: 'sent' }]);
    setInputText('');
  };

  return (
    <div className="flex relative pb-[9.75rem] h-screen bg-gray-100 font-sans overflow-hidden">
      
      {/* Sidebar (Contacts) */}
      <div className="hidden md:flex flex-col w-80 bg-white border-r border-gray-200">
        <div className="p-6 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">Messages</h2>
            {/* Connection Status Indicator */}
            <div title={isConnected ? "Server Connected" : "Disconnected"} className="flex items-center">
               {isConnected ? <Wifi size={20} className="text-green-500"/> : <WifiOff size={20} className="text-red-500"/>}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" 
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
          <ContactItem 
            name="Alice Johnson" 
            lastMessage="Just realized the resolution..." 
            time="10:33 AM" 
            active={activeChat === 1}
            onClick={() => setActiveChat(1)}
            avatarColor="bg-cyan-600"
          />
          {/* Add more contacts here */}
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Header */}
        <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">A</div>
            <div>
              <h3 className="font-bold text-slate-800">Alice Johnson</h3>
              <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} block`}></span> 
                {isConnected ? 'Online' : 'Reconnecting...'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <button className="p-2 hover:bg-gray-100 rounded-full"><Phone size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><Video size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {messages.length === 0 && (
             <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                No messages yet. Start the conversation!
             </div>
          )}
          
          {messages.map((msg, index) => (
            <MessageBubble 
              key={index} 
              text={msg.text} 
              time={msg.time} 
              isMe={msg.isMe} 
              status={msg.status}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200">
            <button type="button" className="p-2 text-gray-400 hover:text-cyan-600"><Smile size={24} /></button>
            <button type="button" className="p-2 text-gray-400 hover:text-cyan-600"><Paperclip size={24} /></button>
            
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent focus:outline-none text-slate-700 placeholder-gray-400 px-2"
            />
            
            <button 
              type="submit" 
              disabled={!inputText.trim() || !isConnected}
              className={`p-3 rounded-xl transition-all ${
                inputText.trim() && isConnected
                  ? 'bg-[#1e7e9e] text-white shadow-md hover:bg-cyan-700' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;