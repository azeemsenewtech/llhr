
// import "./App.css";
// import Navbar from "./component/header";
// import Footer from "./component/footer";

// import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

// import Home from "./pages/homePage";
// import Buy from "./pages/buyPage";
// import Rent from "./pages/rentPage";
// import Detail from "./pages/buyPage/feacture/detail";
// import ContactPage from "./pages/contactPage";
// import TermsCondition from "./pages/termsCondition";
// import SellPage from "./pages/sellPage";

// // Dashboard
// import DashboardLayout from "./pages/dashboard/dashboardLayout";
// import DashboardHome from "./pages/dashboard/dashboardHome";
// import PropertyListingForm from "./pages/dashboard/listItem";
// import Properties from "./pages/dashboard/my-properties";
// import OfferPage from "./pages/dashboard/offerDashboard";
// import Contract from "./pages/dashboard/contract";
// import PaymentPage from "./pages/dashboard/paymentPage";
// import FinancialPage from "./pages/dashboard/financialPage";
// import ChatPage from "./pages/chatPage";
// import Login from "./pages/login";


// import SignupPage from "./signUp";
// import ProtectedRoute from "./protectedRoute";
// import DocumentPage from "./pages/dashboard/documentPage";
// import Chat from "./pages/chat";
// import Users from "./pages/user";


// // Public Layout Wrapper
// function PublicLayout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* LOGIN PAGE */}
//         <Route path="/login" element={<Login />} />
          
//         <Route path="/users" element={<Users />} />
//         <Route path="/chat/:id" element={<Chat />} />
//          <Route path="/signup" element={<SignupPage />} />

//         {/* PUBLIC ROUTES */}
//         <Route element={<PublicLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/buy" element={<Buy />} />
//           <Route path="/rent" element={<Rent />} />
//           <Route path="/detail" element={<Detail />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/terms" element={<TermsCondition />} />
//           <Route path="/sell" element={<SellPage />} />
//         </Route>

//         {/* PROTECTED DASHBOARD ROUTES */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<DashboardHome />} />
//           <Route path="listItem" element={<PropertyListingForm />} />
//           <Route path="my-property" element={<Properties />} />
//           <Route path="offers" element={<OfferPage />} />
//           <Route path="contracts" element={<Contract />} />
//           <Route path="payments" element={<PaymentPage />} />
//           <Route path="insights" element={<FinancialPage />} />
//           <Route path="messages" element={<ChatPage />} />
//            <Route path="documents" element={<DocumentPage />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// frontend/src/App.js
// import { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:3001");

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [user, setUser] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState({});
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // SAFE VERSION — prevents crash
//   const fetchUsers = async () => {
//     if (!user) return;

//     const res = await axios.get("http://localhost:3001/users");
//     setUsers(res.data.filter(u => u.id !== user.id));
//   };

//   // LOGIN
//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:3001/login", { email });
//       setUser(res.data.user);
//       socket.emit("join", res.data.user.id);
//     } catch {
//       const reg = await axios.post("http://localhost:3001/register", { name, email });
//       setUser(reg.data.user);
//       socket.emit("join", reg.data.user.id);
//     }
//   };

//   // FETCH USERS WHEN USER LOGS IN
//   useEffect(() => {
//     if (user) {
//       fetchUsers();
//     }
//   }, [user]);

//   // Load chat history
//   const selectUser = async (u) => {
//     setSelectedUser(u);

//     const res = await axios.get(
//       `http://localhost:3001/messages/${user.id}/${u.id}`
//     );

//     setChatHistory(prev => ({
//       ...prev,
//       [u.id]: res.data
//     }));
//   };

//   // Send message
//   const sendMessage = () => {
//     if (!selectedUser || !message) return;

//     const data = {
//       senderId: user.id,
//       receiverId: selectedUser.id,
//       message
//     };

//     socket.emit("send_message", data);

//     setChatHistory(prev => ({
//       ...prev,
//       [selectedUser.id]: [...(prev[selectedUser.id] || []), data]
//     }));

//     setMessage("");
//   };

//   // Receive message
//   useEffect(() => {
//     socket.on("receive_message", ({ senderId, message }) => {
//       if (!user) return; // PREVENT NULL CRASH

//       const chatUserId =
//         senderId === user.id ? selectedUser?.id : senderId;

//       if (!chatUserId) return;

//       setChatHistory(prev => ({
//         ...prev,
//         [chatUserId]: [...(prev[chatUserId] || []), { senderId, message }]
//       }));
//     });

//     return () => socket.off("receive_message");
//   }, [selectedUser, user]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [chatHistory, selectedUser]);

//   // LOGIN UI
//   if (!user) {
//     return (
//       <div style={{ padding: 20 }}>
//         <h2>Login / Register</h2>
//         <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//         <br />
//         <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//         <br />
//         <button onClick={handleLogin}>Enter Chat</button>
//       </div>
//     );
//   }

//   // CHAT UI
//   return (
//     <div style={{ display: "flex", height: "90vh", padding: 20 }}>
//       <div style={{ width: "25%", borderRight: "1px solid gray" }}>
//          <div style={{
//       marginBottom: 20,
//       padding: 15,
//       border: "1px solid #ccc",
//       borderRadius: 6,
//       background: "#f2f2f2"
//     }}>
//       <h2 style={{ margin: 0 }}>Welcome, {user.name}</h2>
//       <p style={{ margin: 0 }}>Email: {user.email}</p>
//     </div>
//         <h3>Users</h3>
//         {users.map(u => (
//           <div
//             key={u.id}
//             onClick={() => selectUser(u)}
//             style={{
//               padding: 8,
//               marginBottom: 4,
//               cursor: "pointer",
//               background: selectedUser?.id === u.id ? "#ddd" : "#f7f7f7"
//             }}
//           >
//             {u.name}
//           </div>
//         ))}
//       </div>

//       <div style={{ flex: 1, marginLeft: 15, display: "flex", flexDirection: "column" }}>
//         <h3>Chat with: {selectedUser ? selectedUser.name : "Select a user"}</h3>

//         <div style={{ flex: 1, border: "1px solid gray", padding: 10, overflowY: "auto" }}>
//           {(selectedUser && chatHistory[selectedUser.id])?.map((m, i) => (
//             <div
//               key={i}
//               style={{
//                 textAlign: m.senderId === user.id ? "right" : "left",
//                 marginBottom: 8
//               }}
//             >
//               <b>{m.senderId === user.id ? "You" : selectedUser.name}</b>: {m.message}
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {selectedUser && (
//           <div style={{ display: "flex", marginTop: 10 }}>
//             <input
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//               onKeyDown={e => e.key === "Enter" && sendMessage()}
//               placeholder="Type message..."
//               style={{ flex: 1, marginRight: 8 }}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:3001");

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchUsers = async () => {
    if (!user) return;
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data.filter(u => u.id !== user.id));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", { email });
      setUser(res.data.user);
      socket.emit("join", res.data.user.id);
    } catch {
      const reg = await axios.post("http://localhost:3001/register", { name, email });
      setUser(reg.data.user);
      socket.emit("join", reg.data.user.id);
    }
  };

  useEffect(() => { if (user) fetchUsers(); }, [user]);

  const selectUser = async (u) => {
    setSelectedUser(u);
    const res = await axios.get(`http://localhost:3001/messages/${user.id}/${u.id}`);
    setChatHistory(prev => ({ ...prev, [u.id]: res.data }));
  };

  const sendMessage = () => {
    if (!selectedUser || !message) return;
    const data = { senderId: user.id, receiverId: selectedUser.id, message };
    socket.emit("send_message", data);
    setChatHistory(prev => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), data]
    }));
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", ({ senderId, message }) => {
      if (!user) return;
      const chatUserId = senderId === user.id ? selectedUser?.id : senderId;
      if (!chatUserId) return;
      setChatHistory(prev => ({
        ...prev,
        [chatUserId]: [...(prev[chatUserId] || []), { senderId, message }]
      }));
    });
    return () => socket.off("receive_message");
  }, [selectedUser, user]);

  useEffect(() => { scrollToBottom(); }, [chatHistory, selectedUser]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-xl shadow-md w-96">
          <h2 className="text-2xl font-bold mb-5 text-center">Login / Register</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Enter Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-1/4 bg-white flex flex-col p-5 border-r border-gray-200">
        {/* Profile */}
        <div className="bg-gray-50 p-5 rounded-xl mb-5 text-center shadow">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-gray-700">
            {user.name[0].toUpperCase()}
          </div>
          <h3 className="mt-3 font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <h3 className="font-semibold text-gray-700 mb-2">Contacts</h3>
        <div className="flex-1 overflow-y-auto">
          {users.map(u => (
            <div
              key={u.id}
              onClick={() => selectUser(u)}
              className={`p-3 mb-2 rounded-lg cursor-pointer transition ${
                selectedUser?.id === u.id
                  ? "bg-blue-100 border border-blue-300"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {u.name}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-5">
        {/* Chat Header */}
        <div className="bg-white p-4 rounded-xl mb-5 shadow font-semibold text-gray-700">
          {selectedUser ? `Chat with: ${selectedUser.name}` : "Select a user"}
        </div>

        {/* Messages */}
        <div className="flex-1 bg-white p-5 rounded-xl overflow-y-auto shadow">
          {(selectedUser && chatHistory[selectedUser.id])?.map((m, i) => (
            <div
              key={i}
              className={`mb-4 flex ${m.senderId === user.id ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] break-words ${
                  m.senderId === user.id ? "bg-blue-100 text-gray-800" : "bg-gray-100 text-gray-700"
                }`}
              >
                <div className="text-xs text-gray-500 mb-1">
                  {m.senderId === user.id ? "You" : selectedUser.name}
                </div>
                <div>{m.message}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        {selectedUser && (
          <div className="flex mt-5">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-2xl px-4 py-2 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
