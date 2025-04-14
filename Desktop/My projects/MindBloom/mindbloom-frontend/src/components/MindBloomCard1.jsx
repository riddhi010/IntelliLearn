import { motion } from "framer-motion";

const MindBloomCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="fixed bottom-10 right-10 max-w-lg p-6 bg-white shadow-2xl rounded-3xl border border-gray-200 text-gray-800 space-y-4"
    >
      <h3 className="text-2xl font-extrabold text-blue-700">
        What is MindBloom? 💡
      </h3>
      <p className="text-lg leading-relaxed">
        MindBloom is your personal mental health companion! 🌱  
        It helps you track your mood, check emotional patterns,  
        and provides a safe space to talk anonymously.  
        Take charge of your well-being today! ✨
      </p>
    </motion.div>
  );
};

export default MindBloomCard;
