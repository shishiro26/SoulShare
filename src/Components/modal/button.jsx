import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./myModal";

function Button() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
        onClick={() => (modalOpen ? close() : open())}
      >
        Add Item
      </motion.button>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default Button;
