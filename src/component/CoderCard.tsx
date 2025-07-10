'use client'; // This directive is typically for Next.js App Router client components

import { Box, Typography } from '@mui/material'; // Import Box and Typography from MUI

// You might define a global keyframe for blinking cursor if not already in your CSS
// Or manage it with a pseudo-element if using Styled components for the Typography
// For simplicity in this direct conversion, we'll assume a global CSS or Tailwind equivalent for 'blink' effect.
// If you truly want to replicate 'blink' in MUI, you'd define a keyframe in a global stylesheet
// or use a styled component. For now, it's just a class name.

// Example of a global CSS for blink (if you want to include it, put it in your global styles)
/*
@keyframes blink-animation {
  50% { opacity: 0; }
}
.blink {
  animation: blink-animation 1s steps(1, start) infinite;
}
*/

const CoderCard = () => {
    return (
        <Box
            className="coder-card" // Keeping a class name for potential global styles/animations like 'blink'
            sx={{
                mt: 4,
                order: { xs: 1, lg: 2 }, // Equivalent to order-1 lg:order-2
                position: 'relative',
                borderRadius: '8px', // rounded-lg
                border: '1px solid',
                borderColor: '#1b2c68a0', // border-[#1b2c68a0]
                background: 'linear-gradient(to right, #0d1224, #0a0d37)', // from-[#0d1224] to-[#0a0d37]
                overflow: 'hidden', // Ensure gradients don't overflow corners
            }}
        >
            {/* Top gradient border */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    '& > div': { // Apply styles to direct children divs
                        height: '1px',
                        width: '100%',
                    },
                }}
            >
                <Box sx={{ background: 'linear-gradient(to right, transparent, #EC4899, #8B5CF6)' }} /> {/* from-transparent via-pink-500 to-violet-600 */}
                <Box sx={{ background: 'linear-gradient(to right, #8B5CF6, transparent)' }} /> {/* from-violet-600 to-transparent */}
            </Box>

            {/* Header with traffic lights */}
            <Box sx={{ px: { xs: 2, lg: 4 }, py: 2.5 }}> {/* px-4 lg:px-8 py-5 */}
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}> {/* space-x-2 */}
                    <Box sx={{ height: 12, width: 12, borderRadius: '50%', backgroundColor: '#F87171' }} /> {/* h-3 w-3 rounded-full bg-red-400 */}
                    <Box sx={{ height: 12, width: 12, borderRadius: '50%', backgroundColor: '#FB923C' }} /> {/* h-3 w-3 rounded-full bg-orange-400 */}
                    <Box sx={{ height: 12, width: 12, borderRadius: '50%', backgroundColor: '#BEF264' }} /> {/* h-3 w-3 rounded-full bg-green-200 */}
                </Box>
            </Box>

            {/* Code Area */}
            <Box
                sx={{
                    overflow: 'hidden',
                    borderTop: '2px solid #312E81', // border-t-[2px] border-indigo-900
                    px: { xs: 2, lg: 4 }, // px-4 lg:px-8
                    py: { xs: 2, lg: 4 }, // py-4 lg:py-8
                }}
            >
                <Typography
                    component="code" // Render as <code> tag
                    sx={{
                        fontFamily: 'monospace', // font-mono
                        fontSize: { xs: '0.75rem', md: '0.875rem', lg: '1rem' }, // text-xs md:text-sm lg:text-base
                        display: 'block', // Ensure code lines break
                        whiteSpace: 'pre-wrap', // Allows wrapping but respects pre-formatting
                    }}
                >
                    {/* Using spans for colored tokens, similar to your Tailwind approach */}
                    <Box className="blink"> {/* Apply blink class if defined globally */}
                        <Typography component="span" sx={{ mr: 1, color: '#EC4899' }}>const</Typography> {/* text-pink-500 */}
                        <Typography component="span" sx={{ mr: 1, color: 'white' }}>coder</Typography> {/* text-white */}
                        <Typography component="span" sx={{ mr: 1, color: '#EC4899' }}>=</Typography> {/* text-pink-500 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{'{'}</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: 'white' }}>name:</Typography> {/* ml-4 lg:ml-8 text-white */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{`'`}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>H Dirie</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{`',`}</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box sx={{ ml: { xs: 2, lg: 4 }, mr: 1 }}> {/* ml-4 lg:ml-8 mr-2 */}
                        <Typography component="span" sx={{ color: 'white' }}>skills:</Typography> {/* text-white */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{`['`}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>React</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>NextJS</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>Redux</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>Express</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>NestJS</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>MySql</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>MongoDB</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>Docker</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"', '"}</Typography> {/* text-gray-400 */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>AWS</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{"'],"}</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: 'white' }}>hardWorker:</Typography> {/* ml-4 lg:ml-8 text-white */}
                        <Typography component="span" sx={{ color: '#FB923C' }}>true</Typography> {/* text-orange-400 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>,</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: 'white' }}>quickLearner:</Typography> {/* ml-4 lg:ml-8 text-white */}
                        <Typography component="span" sx={{ color: '#FB923C' }}>true</Typography> {/* text-orange-400 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>,</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: 'white' }}>problemSolver:</Typography> {/* ml-4 lg:ml-8 text-white */}
                        <Typography component="span" sx={{ color: '#FB923C' }}>true</Typography> {/* text-orange-400 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>,</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: '#4CAF50' }}>hireable:</Typography> {/* text-green-400 (adjusted slightly from original for a common green) */}
                        <Typography component="span" sx={{ color: '#FB923C' }}>function</Typography> {/* text-orange-400 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{'() {'}</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 4, lg: 8 }, mr: 1, color: '#FB923C' }}>return</Typography> {/* ml-8 lg:ml-16 text-orange-400 */}
                        <Typography component="span" sx={{ color: '#9CA3AF' }}>{`(`}</Typography> {/* text-gray-400 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 6, lg: 12 }, color: '#00BCD4' }}>this.</Typography> {/* ml-12 lg:ml-24 text-cyan-400 */}
                        <Typography component="span" sx={{ mr: 1, color: 'white' }}>hardWorker</Typography> {/* text-white */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>&amp;&amp;</Typography> {/* text-amber-300 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 6, lg: 12 }, color: '#00BCD4' }}>this.</Typography> {/* ml-12 lg:ml-24 text-cyan-400 */}
                        <Typography component="span" sx={{ mr: 1, color: 'white' }}>problemSolver</Typography> {/* text-white */}
                        <Typography component="span" sx={{ color: '#FCD34D' }}>&amp;&amp;</Typography> {/* text-amber-300 */}
                    </Box>

                    <Box>
                        <Typography component="span" sx={{ ml: { xs: 6, lg: 12 }, color: '#00BCD4' }}>this.</Typography> {/* ml-12 lg:ml-24 text-cyan-400 */}
                        <Typography component="span" sx={{ mr: 1, color: 'white' }}>skills.length</Typography> {/* text-white */}
                        <Typography component="span" sx={{ mr: 1, color: '#FCD34D' }}>&gt;=</Typography> {/* text-amber-300 */}
                        <Typography component="span" sx={{ color: '#FB923C' }}>5</Typography> {/* text-orange-400 */}
                    </Box>

                    <Box><Typography component="span" sx={{ ml: { xs: 4, lg: 8 }, mr: 1, color: '#9CA3AF' }}>{`);`}</Typography></Box> {/* ml-8 lg:ml-16 text-gray-400 */}
                    <Box><Typography component="span" sx={{ ml: { xs: 2, lg: 4 }, color: '#9CA3AF' }}>{`};`}</Typography></Box> {/* ml-4 lg:ml-8 text-gray-400 */}
                    <Box><Typography component="span" sx={{ color: '#9CA3AF' }}>{`};`}</Typography></Box> {/* text-gray-400 */}
                </Typography>
            </Box>
        </Box>
    );
};

export default CoderCard;