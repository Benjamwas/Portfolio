import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Hexagon, User } from 'lucide-react';
interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  suggestions?: string[];
}
const faqs: {
  keywords: string[];
  answer: string;
  followUp?: string[];
}[] = [
{
  keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
  answer:
  "Hello. Welcome to Nexora Systems. We're here to help answer your questions about our services, process, and more. What would you like to know?",
  followUp: [
  'What services do you offer?',
  'How does your process work?',
  'How can I start a project?']

},
{
  keywords: [
  'service',
  'offer',
  'what do you do',
  'capabilities',
  'help with'],

  answer:
  'We offer six core services:\n\n• **Custom Web Applications** — Full-stack React & Node.js apps\n• **Business Systems** — School, booking & admin platforms\n• **Automation & Workflows** — API integrations & tools like n8n\n• **AI-Powered Solutions** — Smart recommendations & learning systems\n• **Data Analysis & Dashboards** — Actionable insights & reporting\n• **UI/UX Design** — Conversion-focused interfaces\n\nWould you like details on any specific service?',
  followUp: [
  'Tell me about AI solutions',
  'What about automation?',
  'How much does it cost?']

},
{
  keywords: [
  'ai',
  'artificial intelligence',
  'machine learning',
  'smart',
  'intelligent'],

  answer:
  'Our AI solutions include personalized learning systems, smart recommendation engines, intelligent chatbots, and predictive analytics. We integrate with OpenAI and other leading AI providers to build platforms that learn and adapt to your users.',
  followUp: ['Can you show me examples?', 'How does your process work?']
},
{
  keywords: ['automat', 'workflow', 'n8n', 'zapier', 'integrat'],
  answer:
  'We help businesses eliminate manual, repetitive tasks by building custom automation workflows. We use tools like n8n, custom API connectors, and trigger-based systems to connect your existing tools and streamline operations.',
  followUp: ['What services do you offer?', 'How can I start a project?']
},
{
  keywords: [
  'price',
  'cost',
  'budget',
  'how much',
  'pricing',
  'rate',
  'charge',
  'afford'],

  answer:
  'Our pricing depends on the scope and complexity of each project. We offer flexible engagement models:\n\n• **Fixed-price projects** for well-defined scopes\n• **Retainer agreements** for ongoing development\n• **Discovery workshops** starting from a consultation\n\nThe best way to get an accurate estimate is to schedule a free consultation with our team.',
  followUp: ['How can I start a project?', 'How long does a project take?']
},
{
  keywords: [
  'process',
  'how do you work',
  'methodology',
  'approach',
  'steps'],

  answer:
  'We follow a proven 4-step process:\n\n1. **Discovery** — We dive deep into your business challenges and goals\n2. **Design** — We create wireframes, prototypes, and system architecture\n3. **Development** — We build using modern, scalable technologies\n4. **Deployment** — We test, deploy, and provide ongoing support\n\nEach phase includes regular check-ins to keep you in the loop.',
  followUp: ['How long does a project take?', 'How can I start a project?']
},
{
  keywords: [
  'timeline',
  'how long',
  'duration',
  'time',
  'deadline',
  'turnaround'],

  answer:
  'Project timelines vary based on complexity:\n\n• **Simple websites** — 2-4 weeks\n• **Business systems** — 6-12 weeks\n• **Complex platforms with AI** — 3-6 months\n\nWe always provide a detailed timeline during the Discovery phase so you know exactly what to expect.',
  followUp: ['How can I start a project?', 'What services do you offer?']
},
{
  keywords: [
  'start',
  'begin',
  'get started',
  'contact',
  'reach',
  'book',
  'consult',
  'project'],

  answer:
  "Starting a project is easy! Here's how:\n\n1. **Visit our Contact page** and fill out the form with your project details\n2. **Schedule a free 30-minute consultation** with our technical team\n3. We'll follow up with a proposal and timeline\n\nYou can also email us directly at hello@nexorasystems.com. We typically respond within 24 hours.",
  followUp: ['What services do you offer?', 'How much does it cost?']
},
{
  keywords: ['tech', 'stack', 'technology', 'react', 'node', 'database'],
  answer:
  "We work with a modern, battle-tested stack:\n\n• **Frontend** — React.js, Tailwind CSS, Framer Motion\n• **Backend** — Node.js, Express\n• **Databases** — MySQL, SQLite, Redis\n• **Real-time** — Socket.IO\n• **AI** — OpenAI API integration\n• **Automation** — n8n, custom API connectors\n\nWe choose the best tools for each project, s, specific, needs, : ., ',: followUp, ['How does your process work?', 'Can you show me examples?']:"
},
{
  keywords: [
  'example',
  'portfolio',
  'case study',
  'project',
  'work',
  'built',
  'previous'],

  answer:
  "We've delivered impactful solutions across industries:\n\n• **Car Service Management System** — 60% efficiency improvement\n• **AI Learning Management System** — 40% reduction in dropout rates\n• **School Management System** — 70% less manual workload\n• **Consultancy Website** — 300% increase in organic traffic\n\nVisit our Projects page to explore detailed case studies for each.",
  followUp: ['How can I start a project?', 'What services do you offer?']
},
{
  keywords: ['location', 'where', 'based', 'office', 'remote'],
  answer:
  'Nexora Systems is based in San Francisco, CA. However, we work with clients globally and are fully equipped for remote collaboration. Our team uses modern project management tools to ensure seamless communication regardless of timezone.',
  followUp: ['How can I start a project?', 'How does your process work?']
},
{
  keywords: ['support', 'maintenance', 'after', 'launch', 'ongoing'],
  answer:
  'Yes! We provide post-launch support and maintenance packages to ensure your system runs smoothly. This includes bug fixes, performance monitoring, feature updates, and security patches. We can set up a retainer agreement tailored to your needs.',
  followUp: ['How much does it cost?', 'How can I start a project?']
}];

const defaultResponse: Message = {
  id: '',
  text: "I appreciate your question! I don't have a specific answer for that, but our team would love to help. You can reach us at hello@nexorasystems.com or visit our Contact page to get in touch directly.",
  sender: 'bot',
  suggestions: [
  'What services do you offer?',
  'How does your process work?',
  'How can I start a project?']

};
const welcomeMessage: Message = {
  id: 'welcome',
  text: "Hi there!  We're the Nexora assistant. We can help you learn about our services, process, pricing, and more. What would you like to know?",
  sender: 'bot',
  suggestions: [
  'What services do you offer?',
  'How does your process work?',
  'How much does it cost?']

};
function findAnswer(input: string): {
  answer: string;
  followUp?: string[];
} {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return {
        answer: faq.answer,
        followUp: faq.followUp
      };
    }
  }
  return {
    answer: defaultResponse.text,
    followUp: defaultResponse.suggestions
  };
}
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);
  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user'
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    const { answer, followUp } = findAnswer(text);
    setTimeout(
      () => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: answer,
          sender: 'bot',
          suggestions: followUp
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      },
      800 + Math.random() * 600
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };
  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      const formatted = line.
      replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').
      replace(/• /g, '<span class="text-royal dark:text-gold-400">•</span> ');
      return (
        <span
          key={i}
          dangerouslySetInnerHTML={{
            __html: formatted
          }}
          className="block" />);


    });
  };
  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen &&
        <motion.button
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{
            scale: 0,
            opacity: 0
          }}
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
          aria-label="Open chat">
          
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        }
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25
          }}
          className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900">
          
            {/* Header */}
            <div className="bg-navy-900 dark:bg-navy-800 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-royal/30 flex items-center justify-center">
                  <Hexagon className="w-5 h-5 text-gold-400 fill-gold-400/20" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Nexora Assistant
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Close chat">
              
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50 dark:bg-dark/50">
              {messages.map((msg) =>
            <div key={msg.id}>
                  <div
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                    {msg.sender === 'bot' &&
                <div className="w-7 h-7 rounded-full bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center shrink-0 mt-1">
                        <Hexagon className="w-4 h-4 text-royal dark:text-gold-500" />
                      </div>
                }
                    <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed rounded-2xl ${msg.sender === 'user' ? 'bg-navy-900 dark:bg-royal text-white rounded-br-md' : 'bg-white dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700 rounded-bl-md shadow-sm'}`}>
                  
                      {formatMessage(msg.text)}
                    </div>
                    {msg.sender === 'user' &&
                <div className="w-7 h-7 rounded-full bg-navy-900 dark:bg-royal flex items-center justify-center shrink-0 mt-1">
                        <User className="w-4 h-4 text-white" />
                      </div>
                }
                  </div>

                  {/* Suggestions */}
                  {msg.sender === 'bot' && msg.suggestions &&
              <div className="flex flex-wrap gap-2 mt-3 ml-9">
                      {msg.suggestions.map((s) =>
                <button
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-royal/30 dark:border-gold-500/30 text-royal dark:text-gold-400 hover:bg-royal/10 dark:hover:bg-gold-500/10 transition-colors font-medium">
                  
                          {s}
                        </button>
                )}
                    </div>
              }
                </div>
            )}

              {/* Typing Indicator */}
              {isTyping &&
            <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Hexagon className="w-4 h-4 text-royal dark:text-gold-500" />
                  </div>
                  <div className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5 items-center h-5">
                      <span
                    className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
                    style={{
                      animationDelay: '0ms'
                    }} />
                  
                      <span
                    className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
                    style={{
                      animationDelay: '150ms'
                    }} />
                  
                      <span
                    className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
                    style={{
                      animationDelay: '300ms'
                    }} />
                  
                    </div>
                  </div>
                </div>
            }

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
            onSubmit={handleSubmit}
            className="px-4 py-3 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-700 shrink-0">
            
              <div className="flex items-center gap-2">
                <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-royal dark:focus:ring-gold-500 focus:border-transparent transition-all" />
              
                <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 flex items-center justify-center hover:bg-royal dark:hover:bg-gold-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message">
                
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}