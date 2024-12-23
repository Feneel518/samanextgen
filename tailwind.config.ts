import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1200px',
  		xl: '1400px'
  	},
  	extend: {
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)',
  				'sans-serif'
  			],
  			oswald: [
  				'var(--font-oswald)',
  				'sans-serif'
  			]
  		},
  		colors: {
  			'sama-background': '#09090B',
  			'sama-primary': '#4AD4E4',
  			'sama-secondary': '#293A69'
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				lg: '2rem'
  			}
  		},
  		gap: {
  			'18': '4.5rem'
  		},
  		inset: {
  			'18': '4.5rem'
  		},
  		height: {
  			'18': '4.5rem'
  		},
  		padding: {
  			'18': '4.5rem'
  		},
  		rotate: {
  			'135': '135deg',
  			'225': '225deg',
  			'270': '270deg',
  			'315': '315deg'
  		},
  		keyframes: {
  			'cursor-blink': {
  				'0%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'cursor-blink': 'cursor-blink 1s step-start infinite',
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
