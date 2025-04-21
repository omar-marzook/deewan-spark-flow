
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				deewan: {
					'primary': '#21A17C',    // Updated primary green as per guideline
					'secondary': '#3565B2',  // Updated blue, stronger than old
					'dark': '#222A32',       // Updated dark, modern
					'lightgray': '#DEE2E6',
					'light': '#F8F9FA',
					'accent': '#F6C43A',     // Vibrant yellow (unchanged)
					'gray': '#63656D'        // Adjusted medium gray
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Gilroy', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Gilroy', 'Poppins', 'sans-serif'],
			},
			keyframes: {
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
                float: {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-20px)',
                  },
                },
                'rotate-y': {
                  '0%': {
                    transform: 'rotateY(0deg)',
                  },
                  '100%': {
                    transform: 'rotateY(360deg)',
                  },
                },
                'float-subtle': {
                  '0%, 100%': {
                    transform: 'translateY(0) rotate(0)',
                  },
                  '50%': {
                    transform: 'translateY(-8px) rotate(2deg)',
                  },
                },
                'morph-blob': {
                  '0%, 100%': {
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  },
                  '25%': {
                    borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
                  },
                  '50%': {
                    borderRadius: '40% 60% 60% 40% / 70% 30% 50% 60%',
                  },
                  '75%': {
                    borderRadius: '60% 40% 50% 50% / 30% 60% 40% 80%',
                  },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
                'rotate-y': 'rotate-y 20s linear infinite',
                'float-subtle': 'float-subtle 4s ease-in-out infinite',
                'morph-blob': 'morph-blob 15s ease-in-out infinite',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
