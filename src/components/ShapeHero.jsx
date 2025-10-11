/**
 * @description: Shape Hero (no text, custom grid background)
 * @version: 1.0.2
 * @date: 2025-10-09
 * @license: MIT
 */

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  borderRadius = 16,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          style={{ borderRadius }}
          className={cn(
            "absolute inset-0",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
            "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
            "after:rounded-[inherit]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ShapeHero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 🌌 Custom Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#0f172a",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      {/* 🌈 Animated Gradient Shapes */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <ElegantShape
          delay={0.3}
          width={300}
          height={500}
          rotate={-8}
          borderRadius={24}
          gradient="from-indigo-500/[0.25] dark:from-indigo-500/[0.35]"
          className="left-[-15%] top-[-10%]"
        />

        <ElegantShape
          delay={0.5}
          width={600}
          height={200}
          rotate={15}
          borderRadius={20}
          gradient="from-rose-500/[0.25] dark:from-rose-500/[0.35]"
          className="right-[-20%] bottom-[-5%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={300}
          rotate={24}
          borderRadius={32}
          gradient="from-violet-500/[0.25] dark:from-violet-500/[0.35]"
          className="left-[-5%] top-[40%]"
        />

        <ElegantShape
          delay={0.6}
          width={250}
          height={100}
          rotate={-20}
          borderRadius={12}
          gradient="from-amber-500/[0.25] dark:from-amber-500/[0.35]"
          className="right-[10%] top-[5%]"
        />

        <ElegantShape
          delay={0.7}
          width={400}
          height={150}
          rotate={35}
          borderRadius={16}
          gradient="from-emerald-500/[0.25] dark:from-emerald-500/[0.35]"
          className="right-[-10%] top-[45%]"
        />

        <ElegantShape
          delay={0.2}
          width={200}
          height={200}
          rotate={-25}
          borderRadius={28}
          gradient="from-blue-500/[0.25] dark:from-blue-500/[0.35]"
          className="left-[20%] bottom-[10%]"
        />

        <ElegantShape
          delay={0.8}
          width={150}
          height={80}
          rotate={45}
          borderRadius={10}
          gradient="from-purple-500/[0.25] dark:from-purple-500/[0.35]"
          className="left-[40%] top-[15%]"
        />

        <ElegantShape
          delay={0.9}
          width={450}
          height={120}
          rotate={-12}
          borderRadius={18}
          gradient="from-teal-500/[0.25] dark:from-teal-500/[0.35]"
          className="left-[25%] top-[60%]"
        />
      </div>

      {/* Optional soft overlay for smoother blending */}
      <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-[#020617]/80 pointer-events-none z-20" />
    </div>
  );
}
