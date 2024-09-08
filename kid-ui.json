import React, { useState } from 'react';
import { Book, Gamepad, Music, Camera, Calculator, Headphones, BookOpen, Settings, X, Shuffle, Search, Globe, PenTool, Clock } from 'lucide-react';

const KiddixiaUI = () => {
  const [currentSection, setCurrentSection] = useState('main');
  const [currentLesson, setCurrentLesson] = useState(null);

  const navigateTo = (section) => {
    setCurrentSection(section);
    setCurrentLesson(null);
  };

  const startLesson = (lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-200 to-purple-200 p-4 flex flex-col relative">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold text-purple-600">Kiddixia</h1>
      </header>
      
      {currentSection === 'main' && (
        <>
          <div className="flex-grow grid grid-cols-4 gap-4 mb-4">
            <AppIcon icon={<Book color="#10b981" />} label="Learn" onClick={() => navigateTo('learn')} />
            <AppIcon icon={<Gamepad color="#3b82f6" />} label="Games" onClick={() => navigateTo('games')} />
            <AppIcon icon={<Music color="#8b5cf6" />} label="Music" />
            <AppIcon icon={<Camera color="#ef4444" />} label="Camera" />
            <AppIcon icon={<Calculator color="#6366f1" />} label="Math" />
            <AppIcon icon={<BookOpen color="#f59e0b" />} label="Library" />
            <AppIcon icon={<Headphones color="#ec4899" />} label="Audiobooks" />
            <AppIcon icon={<Settings color="#64748b" />} label="Settings" />
          </div>
          
          <footer className="bg-white rounded-t-3xl p-4 shadow-lg">
            <div className="flex justify-around">
              <AppIcon icon={<Book size={32} color="#10b981" />} label="Learn" onClick={() => navigateTo('learn')} />
              <AppIcon icon={<Gamepad size={32} color="#3b82f6" />} label="Play" onClick={() => navigateTo('games')} />
              <AppIcon icon={<BookOpen size={32} color="#f59e0b" />} label="Read" />
              <AppIcon icon={<Headphones size={32} color="#ec4899" />} label="Listen" />
            </div>
          </footer>
        </>
      )}

      {currentSection === 'games' && (
        <GameSection onClose={() => navigateTo('main')} />
      )}

      {currentSection === 'learn' && (
        <LearnSection onClose={() => navigateTo('main')} onSelectLesson={startLesson} />
      )}

      {currentLesson && (
        <LessonScreen lesson={currentLesson} onClose={() => setCurrentLesson(null)} />
      )}
    </div>
  );
};

const AppIcon = ({ icon, label, onClick }) => (
  <button 
    className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/30 transition-all duration-200"
    onClick={onClick}
  >
    <div className="mb-1">{icon}</div>
    <span className="text-xs font-medium text-gray-700">{label}</span>
  </button>
);

const GameSection = ({ onClose }) => (
  <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold text-purple-600 mb-8">Choose a Game!</h2>
    <div className="grid grid-cols-2 gap-6">
      <GameButton label="Snake and Ladder" color="bg-green-400" icon={<Shuffle size={48} />} />
      <GameButton label="Find the Person" color="bg-yellow-400" icon={<Search size={48} />} />
      <GameButton label="Puzzle" color="bg-pink-400" icon={<Gamepad size={48} />} />
      <GameButton label="Memory" color="bg-blue-400" icon={<BookOpen size={48} />} />
    </div>
    <CloseButton onClose={onClose} />
  </div>
);

const LearnSection = ({ onClose, onSelectLesson }) => (
  <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold text-purple-600 mb-8">What do you want to learn?</h2>
    <div className="grid grid-cols-2 gap-6">
      <LessonButton label="Math" color="bg-blue-400" icon={<Calculator size={48} />} onClick={() => onSelectLesson('math')} />
      <LessonButton label="English" color="bg-green-400" icon={<PenTool size={48} />} onClick={() => onSelectLesson('english')} />
      <LessonButton label="History" color="bg-yellow-400" icon={<Clock size={48} />} onClick={() => onSelectLesson('history')} />
      <LessonButton label="Geography" color="bg-pink-400" icon={<Globe size={48} />} onClick={() => onSelectLesson('geography')} />
    </div>
    <CloseButton onClose={onClose} />
  </div>
);

const GameButton = ({ label, color, icon }) => (
  <button 
    className={`${color} hover:opacity-90 text-white font-bold py-6 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105 w-40 h-40`}
  >
    {icon}
    <span className="mt-2 text-xl text-center">{label}</span>
  </button>
);

const LessonButton = ({ label, color, icon, onClick }) => (
  <button 
    className={`${color} hover:opacity-90 text-white font-bold py-6 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105 w-40 h-40`}
    onClick={onClick}
  >
    {icon}
    <span className="mt-2 text-xl text-center">{label}</span>
  </button>
);

const CloseButton = ({ onClose }) => (
  <button 
    onClick={onClose}
    className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
  >
    <X size={24} className="mr-2" />
    Close
  </button>
);

const LessonScreen = ({ lesson, onClose }) => {
  const lessonContent = {
    math: {
      title: "Math Lesson",
      content: "Let's learn about addition and subtraction!",
    },
    english: {
      title: "English Lesson",
      content: "Today we'll explore the alphabet and simple words.",
    },
    history: {
      title: "History Lesson",
      content: "Discover ancient civilizations and their fascinating stories.",
    },
    geography: {
      title: "Geography Lesson",
      content: "Let's explore continents, countries, and natural wonders!",
    },
  };

  const { title, content } = lessonContent[lesson];

  return (
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold text-purple-600 mb-8">{title}</h2>
      <div className="text-xl mb-8 text-center">{content}</div>
      <CloseButton onClose={onClose} />
    </div>
  );
};

export default KiddixiaUI;
