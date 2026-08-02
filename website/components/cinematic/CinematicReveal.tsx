'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type CinematicRevealProps = {
children: React.ReactNode;
delay?: number;
};

export default function CinematicReveal({
children,
delay = 0,
}: CinematicRevealProps) {
const ref = useRef<HTMLDivElement | null>(null);
const isInView = useInView(ref, {
once: true,
margin: '-10% 0px',
});

return (
<motion.div
ref={ref}
initial={{
opacity: 0,
y: 48,
scale: 0.98,
filter: 'blur(12px)',
}}
animate={
isInView
? {
opacity: 1,
y: 0,
scale: 1,
filter: 'blur(0px)',
}
: {}
}
transition={{
duration: 1,
delay,
ease: [0.22, 1, 0.36, 1],
}}
>
{children}
</motion.div>
);
}
