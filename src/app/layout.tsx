import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'
import { ThemeToggle } from '@/app/ThemeToggle'
import { ThemeProvider } from '@/app/theme-provider'

export const metadata: Metadata = {
	title: 'No hay',
	description: 'Muy pronto...',
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	colorScheme: 'light dark',
}

const geistFont = Geist({
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${geistFont.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ThemeToggle />
					<div className="min-h-screen flex items-center justify-center bg-background text-foreground transition-colors">
						{children}
					</div>
					<footer className="fixed bottom-4 w-full text-center text-sm text-muted-foreground">
						Creado por{' '}
						<a
							href="https://mario.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground hover:underline transition-colors"
						>
							Mario
						</a>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	)
}
