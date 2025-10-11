import { useEffect, useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { assets } from "@/assets/assets";

const getDefaultCards = () => [
  {
    id: 1,
    title: "Summer Opening",
    image: assets.Pawnshop_background,
    content:
      "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
    moreimages: [assets.Enterprise, assets.Maps],
  },
  {
    id: 2,
    title: "Fashion",
    image: assets.bluebackground,
    content:
      "Explore the latest trends in fashion at our exclusive showcase, featuring renowned designers and unique styles.",
    moreimages: [assets.Jaromed_background, assets.Kansai_background],
  },
  {
    id: 3,
    title: "Gallery Art",
    image: assets.South4buildersbackground,
    content:
      "Immerse yourself in the world of art at our gallery, showcasing stunning pieces from emerging and established artists.",
    moreimages: [assets.Jaromed_background],
  },
  {
    id: 4,
    title: "Dreams",
    image: assets.Readymix_background,
    content:
      "Join us on a journey through dreams, exploring the subconscious and the art of dreaming.",
    moreimages: [assets.Jaromed_background],
  },
  {
    id: 5,
    title: "Summer Opening",
    image: assets.Jaromed_background,
    content:
      "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
    moreimages: [assets.Jaromed_background],
  },
  {
    id: 6,
    title: "Fashion",
    image: assets.buildingLogo,
    content:
      "Explore the latest trends in fashion at our exclusive showcase, featuring renowned designers and unique styles.",
    moreimages: [assets.Jaromed_background],
  },
  {
    id: 7,
    title: "Another Event",
    image: assets.bluebackground,
    content:
      "A new addition showcasing extended scroll and smooth navigation behavior.",
    moreimages: [assets.Jaromed_background],
  },
];

const smoothEasing = [0.4, 0.0, 0.2, 1];

export default function ExpandableCards({
  cards = getDefaultCards(),
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}) {
  const [internalSelected, setInternalSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollRef = useRef(null);
  const selectedCard =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  // Center scroll on load
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  // Scroll function
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Handle card click
  const handleCardClick = (id) => {
    if (selectedCard === id) {
      onSelect ? onSelect(null) : setInternalSelected(null);
    } else {
      onSelect ? onSelect(id) : setInternalSelected(id);
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  // Open modal with specific card's images
  const openModal = (card) => {
    const imgs = [card.images, ...(card.moreimages || [])].filter(Boolean);
    setModalImages(imgs);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

const nextModalImage = () => {
  setCurrentImageIndex((prev) =>
    prev === modalImages.length - 1 ? 0 : prev + 1
  );
};

const prevModalImage = () => {
  setCurrentImageIndex((prev) =>
    prev === 0 ? modalImages.length - 1 : prev - 1
  );
};


  return (
    <div className="relative flex flex-col items-center w-full gap-6 p-4">
      {/* Scroll Controls */}
      <div className="flex items-center w-full justify-between max-w-7xl">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="z-40 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className={`mx-2 flex overflow-x-auto no-scrollbar scroll-smooth w-full max-w-6xl ${className}`}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              layout
              data-card-id={card.id}
              className={`bg-background relative mr-4 h-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border shadow-lg ${cardClassName}`}
              style={{ scrollSnapAlign: "start" }}
              animate={{
                width: selectedCard === card.id ? "500px" : "200px",
              }}
              transition={{ duration: 0.5, ease: smoothEasing }}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Card Image */}
              <div className="relative h-full w-[200px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Play video"
                      className="bg-background/30 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Play className="h-5 w-5 text-white" />
                    </button>
                    <span className="text-sm font-medium">Play video</span>
                  </div>
                </div>
              </div>

              {/* Expanded Card */}
              <AnimatePresence mode="popLayout">
                {selectedCard === card.id && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "300px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: smoothEasing }}
                    className="bg-sky-700 absolute top-0 right-0 h-full"
                  >
                    <div className="flex h-full flex-col justify-between p-6">
                      <p className="text-sm mb-4 text-white">{card.content}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(card);
                        }}
                        className="bg-white text-sky-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100"
                      >
                        More Images
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="z-40 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
  {showModal && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Left arrow - OUTSIDE modal */}
      <button
        onClick={prevModalImage}
        className="absolute left-70 z-40 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      {/* Modal box */}
      <motion.div
        className="relative w-[90%] max-w-3xl rounded-xl bg-white p-6 shadow-xl z-30"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        {/* Close button always in front */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 z-50 text-gray-600 hover:text-black transition"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center justify-center">
          <img
            src={modalImages[currentImageIndex]}
            alt="Gallery"
            className="h-80 w-full rounded-lg object-cover"
          />
        </div>
      </motion.div>

      {/* Right arrow - OUTSIDE modal */}
      <button
        onClick={nextModalImage}
        className="absolute right-70 z-40 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </motion.div>
  )}
</AnimatePresence>


      {/* Hide Scrollbars */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
