    import React, { useState } from 'react';

    const SignupPage = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agreeToTerms: false
    });

    // State for selected role (defaulting to 'tenant' as per image)
    const [selectedRole, setSelectedRole] = useState('tenant');

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { ...formData, role: selectedRole });
        alert(`Account created for: ${formData.email} as a ${selectedRole}`);
    };

    // Data for Roles to make rendering cleaner
    const roles = [
        {
        id: 'tenant',
        title: "I'm a Tenant",
        description: "Looking for a property to rent. Get verified, build your LLHARScore, and access exclusive listings.",
        features: ["AI-powered property matching", "Build rental credibility", "Secure payment processing"],
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
        },
        {
        id: 'owner',
        title: "I'm an Owner",
        description: "List your property and find verified tenants. Automate contracts, payments, and management.",
        features: ["Access verified tenant pool", "Automated property management", "AI property valuations"],
        icon: (
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
        },
        {
        id: 'agency',
        title: "I'm an Agency",
        description: "Manage multiple properties and clients with ease. Access powerful tools to streamline rental processes.",
        features: ["Manage multiple properties", "Access tenant and owner insights", "Bulk listing management"],
        icon: (
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        )
        }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 via-blue-50 to-white flex items-center justify-center p-4 md:p-8">
        
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 items-start">
            
            {/* LEFT COLUMN: Sign Up Form */}
            <div className="w-full lg:w-5/12 bg-white rounded-3xl shadow-xl p-8 lg:p-10 sticky top-4">
            
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 L30 10 L10 30 Z" fill="#0ea5e9" />
                <path d="M30 30 L10 30 L30 10 Z" fill="#0284c7" opacity="0.8"/>
                </svg>
                <h1 className="text-2xl font-bold text-sky-600 tracking-wide uppercase">LLHAR</h1>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-500 mb-8">Join the future of real estate</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Input with Floating Label on Border */}
                <div className="relative">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="peer w-full border border-sky-500 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
                <div className="absolute top-3 left-4 text-sky-500 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-semibold text-sky-600">
                    Email Address
                </label>
                </div>

                {/* Password Input with Floating Label on Border */}
                <div className="relative">
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className="peer w-full border border-sky-500 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
                <div className="absolute top-3 left-4 text-sky-500 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-semibold text-sky-600">
                    Password
                </label>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-xs font-medium text-gray-400 uppercase tracking-widest">OR</span>
                <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <p className="text-sm font-semibold text-gray-700 mb-3">Continue with</p>

                {/* Social Icons Grid */}
                <div className="grid grid-cols-4 gap-4">
                {/* Google */}
                <button type="button" className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    </button>
                    {/* Apple */}
                    <button type="button" className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.67-.89 1.48.16 2.6.76 3.23 1.77-2.8 1.43-2.34 5.33.6 6.54-.53 1.47-1.3 3.12-2.58 4.81zm-2.06-14.7c.61-1.01.48-2.31 0-3.32-1.01.29-2.28.8-2.93 1.95-.58 1.04-.45 2.28 0 3.28 1.05-.18 2.3-.9 2.93-1.91z" />
                    </svg>
                    </button>
                    {/* Facebook */}
                    <button type="button" className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    </button>
                    {/* Email */}
                    <button type="button" className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    </button>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center">
                <input
                    id="terms"
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-500">
                    I accept the <a href="#" className="text-sky-500 hover:text-sky-600 font-medium">Terms & Conditions</a>
                </label>
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.01]"
                >
                Create Account
                </button>

                {/* Footer Links */}
                <div className="text-center space-y-4">
                <a href="#" className="block text-sm font-bold text-sky-600 hover:text-sky-700">
                    Continue As Guest
                </a>
                <p className="text-sm text-gray-500">
                    Already have an account? <a href="#" className="font-bold text-sky-600 hover:text-sky-700">Sign In</a>
                </p>
                </div>
            </form>
            </div>

            {/* RIGHT COLUMN: Role Selection */}
            <div className="w-full lg:w-7/12 pt-4">
            
            <div className="inline-block px-3 py-1 bg-sky-100 text-sky-600 text-xs font-semibold rounded-full mb-4">
                Select Your Role
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose how you'll be using LLHAR</h2>
            <p className="text-gray-500 text-sm mb-6">
                Tailor your experience with dashboards and tools designed for every kind of real-estate journey.
            </p>

            <div className="space-y-4">
                {roles.map((role) => (
                <div
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`relative group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-200 ${
                    selectedRole === role.id
                        ? 'bg-sky-50 border-sky-500 shadow-md'
                        : 'bg-white border-transparent shadow-sm hover:shadow-md'
                    }`}
                >
                    {/* Selection Checkmark Circle (Visible only when selected) */}
                    {selectedRole === role.id && (
                    <div className="absolute top-4 right-4 text-sky-500">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    )}

                    <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div className={`p-3 rounded-xl flex items-center justify-center transition-colors ${
                        selectedRole === role.id ? 'bg-sky-500' : 'bg-gray-100'
                    }`}>
                        {/* Render Icon with color change based on selection if needed, 
                            here reusing the logic inside the map to swap icon colors would be complex 
                            so I stuck to the icons defined in data but we can style the container */}
                        {React.cloneElement(role.icon, { className: `w-6 h-6 ${selectedRole === role.id ? 'text-white' : 'text-gray-500'}` })}
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{role.title}</h3>
                        <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                        {role.description}
                        </p>
                        
                        {/* Bullet Points */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {role.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-600 font-medium">
                            <svg className="w-3.5 h-3.5 mr-1 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Bottom Alert / Confirmation */}
            <div className="mt-6 bg-sky-100 border border-sky-200 rounded-lg p-3 flex items-center gap-2 text-sm text-sky-800">
                <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Role selected: <span className="font-bold capitalize">{selectedRole}</span></span>
            </div>

            </div>

        </div>
        </div>
    );
    };

    export default SignupPage;