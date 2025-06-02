'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="relative">
        {/* Main loading container */}
        <div className="relative w-32 h-32">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-600/40"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Inner rotating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
              initial={{
                x: Math.cos((i * Math.PI * 2) / 8) * 50 - 6,
                y: Math.sin((i * Math.PI * 2) / 8) * 50 - 6,
              }}
            />
          ))}

          {/* Center pulsing core */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orbiting elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                rotate: 360,
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.8 + i * 0.3,
                repeat: Infinity,
                ease: 'linear',
              }}
              initial={{
                x: Math.cos((i * Math.PI * 2) / 3) * (25 + i * 8) - 4,
                y: Math.sin((i * Math.PI * 2) / 3) * (25 + i * 8) - 4,
              }}
            />
          ))}
        </div>

        {/* Loading text with staggered animation */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-1">
            {'Loading'.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1 mt-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-600 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
