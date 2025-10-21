import { useEffect, useRef } from 'react';
export function BikePathBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect: move at 0.3x scroll speed
        bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="fixed inset-0 w-full h-full bg-[#2a2a2a] overflow-hidden" style={{
    zIndex: -1
  }}>
      <div ref={bgRef} className="absolute inset-0 w-full" style={{
      height: '200%',
      willChange: 'transform'
    }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}>
          <defs>
            {/* Bike lane pattern that repeats */}
            <pattern id="bikePattern" x="0" y="0" width="100%" height="400" patternUnits="userSpaceOnUse">
              {/* Asphalt base */}
              <rect width="100%" height="400" fill="#2a2a2a" />
              {/* Left lane edge */}
              <line x1="20%" y1="0" x2="20%" y2="400" stroke="#555555" strokeWidth="2" />
              {/* Center dashed line */}
              <line x1="50%" y1="0" x2="50%" y2="50" stroke="#dddddd" strokeWidth="3" strokeDasharray="40 40" />
              <line x1="50%" y1="100" x2="50%" y2="150" stroke="#dddddd" strokeWidth="3" />
              <line x1="50%" y1="200" x2="50%" y2="250" stroke="#dddddd" strokeWidth="3" />
              <line x1="50%" y1="300" x2="50%" y2="350" stroke="#dddddd" strokeWidth="3" />
              {/* Right bike lane edge */}
              <line x1="80%" y1="0" x2="80%" y2="400" stroke="#555555" strokeWidth="2" />
              {/* Bike lane dashed line */}
              <line x1="70%" y1="0" x2="70%" y2="400" stroke="#888888" strokeWidth="2" strokeDasharray="20 20" />
              {/* Bike symbols in the bike lane
              <g transform="translate(1150, 80)">
                <path d="M -8,-12 L 0,-20 L 8,-12 M 0,-20 L 0,-8 M -6,-8 L 6,-8 M -10,0 A 10,10 0 1,0 10,0 A 10,10 0 1,0 -10,0 M -3,0 A 3,3 0 1,0 3,0 A 3,3 0 1,0 -3,0" fill="none" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g transform="translate(1150, 280)">
                <path d="M -8,-12 L 0,-20 L 8,-12 M 0,-20 L 0,-8 M -6,-8 L 6,-8 M -10,0 A 10,10 0 1,0 10,0 A 10,10 0 1,0 -10,0 M -3,0 A 3,3 0 1,0 3,0 A 3,3 0 1,0 -3,0" fill="none" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g> */}
            </pattern>
          </defs>
          {/* Apply the pattern */}
          <rect width="100%" height="100%" fill="url(#bikePattern)" />
        </svg>
      </div>
    </div>;
}