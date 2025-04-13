import { motion } from 'framer-motion';

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex items-center space-x-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-6xl font-bold text-acprimary-500"
        >
          a
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
          className="text-6xl font-bold text-acprimary-500"
        >
          c
        </motion.div>
      </div>
    </div>
  );
} 