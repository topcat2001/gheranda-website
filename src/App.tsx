import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink as RouterNavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import { YogaTours } from './components/YogaTours';
import { PastTours } from './components/PastTours';
import { Home } from './pages/Home';
import { TeacherTraining } from './pages/TeacherTraining';
import { Testimonials } from './pages/Testimonials';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#faf7f2] flex flex-col">
        <nav className="fixed w-full z-50 bg-[#faf7f2]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-24 items-center">
              <div className="flex items-center">
                <Link to="/">
                  <Logo className="h-20 xl:h-20 lg:h-18" />
                </Link>
              </div>
              
              <div className="hidden lg:flex space-x-8">
                <RouterNavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  Home
                </RouterNavLink>
                <RouterNavLink
                  to="/teacher-training"
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  Teacher Training
                </RouterNavLink>
                <RouterNavLink
                  to="/yoga-tours"
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  Yoga Tours
                </RouterNavLink>
                <RouterNavLink
                  to="/past-tours"
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  Past Tours/Trainings
                </RouterNavLink>
                <RouterNavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  Testimonials
                </RouterNavLink>
                <RouterNavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  About
                </RouterNavLink>
                <RouterNavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'} transition-colors text-lg font-medium`
                  }
                >
                  Contact
                </RouterNavLink>
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-yellow-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-[#faf7f2]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <RouterNavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  Home
                </RouterNavLink>
                <RouterNavLink
                  to="/teacher-training"
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  Teacher Training
                </RouterNavLink>
                <RouterNavLink
                  to="/yoga-tours"
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  Yoga Tours
                </RouterNavLink>
                <RouterNavLink
                  to="/past-tours"
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  Past Tours/Trainings
                </RouterNavLink>
                <RouterNavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  Testimonials
                </RouterNavLink>
                <RouterNavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  About
                </RouterNavLink>
                <RouterNavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block px-3 py-2 ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                    } transition-colors text-lg font-medium`
                  }
                >
                  Contact
                </RouterNavLink>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher-training" element={<TeacherTraining />} />
            <Route path="/yoga-tours" element={<YogaTours />} />
            <Route path="/past-tours" element={<PastTours />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;