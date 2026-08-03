'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function CameraDirector({
children,
}: {
children: React.ReactNode;
}) {
const { scrollYProgress } = useScroll();

const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08]);
const rotateX = useTransform(scrollYProgress, [0, 0.2], [0, 4]);
const rotateY = useTransform(scrollYProgress, [0, 0.2], [0, -2]);
const y = useTransform(scrollYProgress, [0, 0.2], [0, 30]);

return (
<motion.div
className='h-full w-full'
style={{
scale,
rotateX,
rotateY,
y,
transformPerspective: 1400,
transformStyle: 'preserve-3d',
}}
>
{children}
</motion.div>
);
}
