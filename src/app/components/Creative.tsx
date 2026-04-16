import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import giftBasket from "figma:asset/48315edc9be0e96e6149d33a3fe19acd1da79c47.png";
import wineGlasses from "figma:asset/4e0173e83ea76e48b112d6778f7273d8643cea1e.png";
import sunflowerCandle from "figma:asset/6f6b36c40b35f0725b8fa97be9ce865514a8a837.png";
import purpleCake from "figma:asset/d7e28abf91ba1c1f15bf879ce952c43014d94c47.png";
import blueberryCandle from "figma:asset/a656586deeda80f768392adbd30fbf610b1bd1dc.png";
import candyCandle from "figma:asset/4c8e3fa9751ab13445c0fe8b04bb094d5d723e60.png";
import redRoses from "figma:asset/ba1cf1d91770ecff11bef4bbfc4a09fcfdc1e44e.png";
import journalPurpose from "figma:asset/d1e8f6c5ea38f967b0a0782226f34605cbd05774.png";
import journalPassions from "figma:asset/4d20c458e8b1eb0c4df1061427adb729dab0e37f.png";
import mangaSketch from "figma:asset/a4ada0d494d57b186c25f777b7ff20457ce59acf.png";
import narutoSplit from "figma:asset/ca1682f32f41e7d905ee85bde9e877f03c82019e.png";
import tanjiroSketch from "figma:asset/081aab239821c260747338b13ded2ee73050db5c.png";
import babyShower from "figma:asset/682a52ae305d4d0fc76db90cf5c238e3c2a20db4.png";
import snoopyCandle from "figma:asset/b1ac13acfcc3d85bf7baf491f9d7667bec19ff92.png";
import parfaitCandle from "figma:asset/c6fa95e34368fc2fc495cd8315dac560474fa2ee.png";

interface CreativeProps {
  isDark: boolean;
}

const polaroids = [
  {
    id: 1,
    src: sunflowerCandle,
    caption: "Sunday pour session",
    rotate: -4,
    tape: true,
    tapeAngle: -2,
  },
  {
    id: 2,
    src: purpleCake,
    caption: "Birthday Bliss Cake Candle",
    rotate: 2.5,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 3,
    src: giftBasket,
    caption: "Wrapped with love",
    rotate: -1.5,
    tape: true,
    tapeAngle: 1.5,
  },
  {
    id: 4,
    src: blueberryCandle,
    caption: "Blueberry dreams",
    rotate: 3,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 5,
    src: candyCandle,
    caption: "Candy shop batch",
    rotate: -2.5,
    tape: true,
    tapeAngle: -1,
  },
  {
    id: 6,
    src: redRoses,
    caption: "Red & gold for her",
    rotate: 1.5,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 7,
    src: mangaSketch,
    caption: "Quick portrait, 20 mins",
    rotate: -3.5,
    tape: true,
    tapeAngle: 2,
  },
  {
    id: 8,
    src: wineGlasses,
    caption: "Painted for a wedding",
    rotate: 2,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 9,
    src: journalPurpose,
    caption: "Morning pages",
    rotate: -1,
    tape: true,
    tapeAngle: -2.5,
  },
  {
    id: 10,
    src: narutoSplit,
    caption: "Two sides, one page",
    rotate: 3.5,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 11,
    src: babyShower,
    caption: "Baby shower batch",
    rotate: -2,
    tape: true,
    tapeAngle: 1,
  },
  {
    id: 12,
    src: snoopyCandle,
    caption: "Snoopy ♡",
    rotate: 1,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 13,
    src: journalPassions,
    caption: "Passions, penned",
    rotate: -3,
    tape: true,
    tapeAngle: -1.5,
  },
  {
    id: 14,
    src: tanjiroSketch,
    caption: "Tanjiro, smiling",
    rotate: 2.5,
    tape: false,
    tapeAngle: 0,
  },
  {
    id: 15,
    src: parfaitCandle,
    caption: "Lavender Dellight Candle",
    rotate: -1.5,
    tape: true,
    tapeAngle: 2,
  },
];

function PolaroidCard({ p, isDark }: { p: (typeof polaroids)[0]; isDark: boolean }) {
  return (
    <div
      className="relative flex-shrink-0 mx-3 cursor-pointer group"
      style={{
        width: "160px",
        transform: `rotate(${p.rotate}deg)`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) translateY(-22px) scale(1.35)";
        (e.currentTarget as HTMLDivElement).style.zIndex = "20";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = `rotate(${p.rotate}deg)`;
        (e.currentTarget as HTMLDivElement).style.zIndex = "1";
      }}
    >
      {/* Washi tape */}
      {p.tape && (
        <div
          className="absolute -top-[14px] left-1/2 z-10"
          style={{
            transform: `translateX(-50%) rotate(${p.tapeAngle}deg)`,
            width: "48px",
            height: "18px",
            background: isDark
              ? "rgba(244,160,192,0.30)"
              : "rgba(232,105,154,0.20)",
            borderRadius: "2px",
          }}
        />
      )}

      {/* Polaroid frame */}
      <div
        style={{
          padding: "9px 9px 38px 9px",
          background: isDark ? "#e8e5dc" : "#ffffff",
          boxShadow: isDark
            ? "0 12px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.04)"
            : "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)",
        }}
      >
        {/* Photo */}
        <div
          className="aspect-square overflow-hidden"
          style={{ width: "142px", height: "142px", background: isDark ? "#d8d5cb" : "#f3f4f6" }}
        >
          <ImageWithFallback
            src={p.src}
            alt={p.caption}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption */}
        <p
          className="text-center mt-2.5 text-[10px] leading-snug px-1"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontStyle: "italic",
            color: isDark ? "#8a8579" : "#9ca3af",
          }}
        >
          {p.caption}
        </p>
      </div>
    </div>
  );
}

export function Creative({ isDark }: CreativeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Duplicate for seamless loop
  const loopItems = [...polaroids, ...polaroids];

  return (
    <section
      id="creative"
      className={`py-24 md:py-28 overflow-hidden ${
        isDark ? "bg-[#0d0c10]" : "bg-[#faf9f7]"
      }`}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)"
            : "radial-gradient(rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header — constrained */}
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#E8699A]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase text-[#E8699A]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Outside Work
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Not everything I make
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E8699A, #C2547C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              lives on a screen.
            </span>
          </h2>

          <p
            className={`text-sm max-w-md leading-relaxed ${
              isDark ? "text-white/45" : "text-gray-400"
            }`}
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Candles, sketches, gift baskets — the things I make just because
            they bring me joy.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee ribbon — full bleed ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-12 md:w-24 lg:w-[120px]"
          style={{
            background: isDark
              ? "linear-gradient(to right, #0d0c10 0%, transparent 100%)"
              : "linear-gradient(to right, #faf9f7 0%, transparent 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-12 md:w-24 lg:w-[120px]"
          style={{
            background: isDark
              ? "linear-gradient(to left, #0d0c10 0%, transparent 100%)"
              : "linear-gradient(to left, #faf9f7 0%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          style={{ cursor: "default", overflow: "visible" }}
        >
          <div
            className="flex items-center"
            style={{
              animation: "marquee-scroll 40s linear infinite",
              width: "max-content",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
            }}
          >
            {loopItems.map((p, i) => (
              <PolaroidCard key={`${p.id}-${i}`} p={p} isDark={isDark} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className={`text-center text-xs mt-12 px-6 ${
          isDark ? "text-white/40" : "text-gray-400"
        }`}
        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
      >
        there's more where that came from —{" "}
        <a
          href="https://www.instagram.com/mrhavens.co?igsh=cGNiNm5jZmcxcWRq&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors duration-200"
          style={{ color: "#E8699A" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C2547C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#E8699A")}
        >
          <span style={{ fontStyle: "italic" }}>@mrhavens.co</span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.p>

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}