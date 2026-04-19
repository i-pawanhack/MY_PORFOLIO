import { motion } from 'motion/react';

interface RobotProps {
  displayText?: string;
  isScanning?: boolean;
  beamTarget?: 'floor' | 'name' | 'portrait';
  projectedImageUrl?: string;
}

export default function Robot({ 
  displayText = "", 
  isScanning = false, 
  beamTarget = 'floor',
  projectedImageUrl
}: RobotProps) {
  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isScanning ? [0.4, 0.7, 0.4] : [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: isScanning ? 1.5 : 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-accent/30 rounded-full blur-[110px]"
      />

      {/* Holographic Image Projection */}
      {projectedImageUrl && !isScanning && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute z-20 top-[-15%] pointer-events-none"
        >
          <div className="relative group">
            {/* Hologram Base Beam Effect */}
            <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-40 h-80 bg-gradient-to-t from-accent/40 via-accent/5 to-transparent blur-xl opacity-20" />
            
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotateY: [-5, 5, -5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-[0_0_50px_rgba(0,240,255,0.15)] group-hover:border-accent/40 transition-colors duration-500 bg-black"
            >
              {/* Image with Holographic Overlay and Simulated Portrait Blur */}
              <div className="relative aspect-[3/4] w-48 overflow-hidden brightness-110">
                {/* Background Layer: Fully Blurred */}
                <img 
                  src={projectedImageUrl} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 blur-md scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Foreground Layer: Focused with radial mask */}
                <img 
                  src={projectedImageUrl} 
                  alt="Holographic Portrait" 
                  className="relative w-full h-full object-cover opacity-90"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 70%)',
                  }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Cyan Tint Overlay */}
                <div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none" />
                
                {/* Scanning Lines */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(0,240,255,0.08)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite]" />
                
                {/* Glitch Overlay */}
                <motion.div 
                  animate={{ opacity: [0, 0.1, 0, 0.05, 0], x: [0, 2, -2, 1, 0] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 bg-accent/20 pointer-events-none"
                />
              </div>

              {/* Holographic Frame Details */}
              <div className="absolute top-2 left-2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <div className="w-8 h-1 bg-accent/20 rounded" />
              </div>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-accent/60 tracking-tighter">
                REF_IMG_01
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Main Robot SVG */}
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: isScanning ? [-5, 5, -5] : [-15, 15, -15],
          rotate: isScanning ? [-1, 1, -1] : [-3, 3, -3]
        }}
        transition={{
          duration: isScanning ? 2 : 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full h-full drop-shadow-[0_20px_60px_rgba(0,240,255,0.2)]"
      >
        {/* Head */}
        <motion.path
          d="M60 70C60 58.9543 68.9543 50 80 50H120C131.046 50 140 58.9543 140 70V110C140 121.046 131.046 130 120 130H80C68.9543 130 60 121.046 60 110V70Z"
          fill="#050505"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="2"
        />

        {/* Eye Visor */}
        <path
          d="M72 72H128V88H72V72Z"
          fill="#0a0a0a"
          stroke="var(--color-accent)"
          strokeOpacity="0.3"
        />
        
        {/* Visor Content - Dynamic Text Reflection */}
        <defs>
          <clipPath id="visorClip">
            <rect x="74" y="74" width="52" height="12" />
          </clipPath>
          
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="nameBeamGradient" x1="100%" y1="0%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Projection Effects */}
        {!isScanning && (displayText || projectedImageUrl) && (
          <>
            {/* Eye Emitters Glow */}
            <motion.circle 
              cx={beamTarget === 'name' ? 80 : 85} 
              cy="80" r="3" 
              fill="var(--color-accent)" 
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.6, 1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
            <motion.circle 
              cx={beamTarget === 'name' ? 110 : 115} 
              cy="80" r="3" 
              fill="var(--color-accent)" 
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.6, 1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />

            {/* Light Beam */}
            <motion.path
              d={beamTarget === 'name' 
                ? "M80 80 L-1000 400 L-1000 -200 L120 80 Z" 
                : beamTarget === 'portrait'
                ? "M80 60 L20 -300 L180 -300 L120 60 Z"
                : "M75 80 L20 230 L180 230 L125 80 Z"
              }
              fill={beamTarget === 'name' ? "url(#nameBeamGradient)" : "url(#beamGradient)"}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: beamTarget === 'name' ? [0.2, 0.5, 0.2] : [0.3, 0.6, 0.3],
                scaleX: beamTarget === 'name' ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 0.15, repeat: Infinity }}
              className="pointer-events-none origin-right"
            />
            
            {/* Holographic Floor Projection (Only if targeting floor) */}
            {beamTarget === 'floor' && displayText && (
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ellipse 
                  cx="100" cy="220" rx="90" ry="20" 
                  fill="var(--color-accent)" fillOpacity="0.1" 
                  stroke="var(--color-accent)" strokeWidth="0.5" strokeOpacity="0.2" 
                />
                <motion.text
                  x="100"
                  y="223"
                  textAnchor="middle"
                  fill="var(--color-accent)"
                  className="font-mono font-bold tracking-[0.4em] uppercase"
                  style={{ fontSize: '11px', filter: 'drop-shadow(0 0 10px var(--color-accent))' }}
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    filter: ['drop-shadow(0 0 5px var(--color-accent))', 'drop-shadow(0 0 15px var(--color-accent))', 'drop-shadow(0 0 5px var(--color-accent))']
                  }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                  {displayText}
                </motion.text>
                
                {/* Scanline passing over floor text */}
                <motion.rect 
                  x="20" y="215" width="160" height="1" 
                  fill="var(--color-accent)" fillOpacity="0.3"
                  animate={{ y: [215, 230, 215] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.g>
            )}
          </>
        )}

        <g clipPath="url(#visorClip)">
          {isScanning ? (
             <motion.g
               animate={{ x: [-60, 60] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             >
                <rect x="0" y="74" width="20" height="12" fill="var(--color-accent)" fillOpacity="0.5" />
             </motion.g>
          ) : (
             <g>
               <motion.text
                  key={displayText}
                  x="100"
                  y="83"
                  textAnchor="middle"
                  fill="var(--color-accent)"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className="font-bold uppercase tracking-tighter text-[7px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    scale: 1,
                    x: displayText.length > 8 ? [5, -5, 5] : 0 
                  }}
                  transition={{ 
                    opacity: { duration: 0.1, repeat: Infinity },
                    x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
               >
                  {displayText}
               </motion.text>
             </g>
          )}
        </g>

        {/* Digital Eyes Overlay */}
        {!isScanning && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <rect x="80" y="75" width="10" height="8" rx="2" fill="var(--color-accent)" fillOpacity="0.2" />
            <rect x="110" y="75" width="10" height="8" rx="2" fill="var(--color-accent)" fillOpacity="0.2" />

            <motion.rect
              x="82" y="77" width="6" height="4"
              fill="var(--color-accent)"
              style={{ filter: 'drop-shadow(0 0 3px var(--color-accent))' }}
              animate={{ height: [4, 0.8, 4] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
            />
            <motion.rect
              x="112" y="77" width="6" height="4"
              fill="var(--color-accent)"
              style={{ filter: 'drop-shadow(0 0 3px var(--color-accent))' }}
              animate={{ height: [4, 0.8, 4] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        )}

        <line x1="100" y1="50" x2="100" y2="30" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
        <motion.circle
          cx="100" cy="25" r="4"
          fill="var(--color-accent)"
          animate={{ 
            scale: isScanning ? [1, 2, 1] : [1, 1.4, 1],
            opacity: isScanning ? [0.6, 1, 0.6] : [0.4, 0.8, 0.4]
          }}
          transition={{ duration: isScanning ? 0.5 : 2, repeat: Infinity }}
        />

        {isScanning && (
          <motion.path
            d="M100 25 L40 230 L160 230 Z"
            fill="var(--color-accent)"
            fillOpacity="0.15"
            animate={{ opacity: [0.1, 0.3, 0.1], scaleX: [1, 1.3, 1] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          />
        )}

        <rect x="90" y="130" width="20" height="10" fill="#1A1A1A" stroke="white" strokeWidth="1" />
        <path
          d="M50 142C50 136.477 54.4772 132 60 132H140C145.523 132 150 136.477 150 142V180H50V142Z"
          fill="#0D0D0D"
          stroke="white"
          strokeWidth="2"
        />

        <rect x="70" y="145" width="60" height="25" rx="4" fill="#1A1A1A" stroke="white" strokeOpacity="0.2" />
        <motion.circle 
          cx="80" cy="155" r="3" 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
          fill="#ffffff" 
        />
        
        <motion.rect x="90" y="152" width="20" height="2" fill="white" animate={{ width: isScanning ? [5, 30, 15] : [20, 20] }} transition={{ repeat: Infinity, duration: 1.5 }} />
        <motion.rect x="90" y="158" width="25" height="2" fill="white" animate={{ width: isScanning ? [30, 10, 25] : [25, 25] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }} />
      </motion.svg>
    </div>
  );
}
