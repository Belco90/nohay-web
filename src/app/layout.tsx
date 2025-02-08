import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
	title: 'No hay',
	description: 'Muy pronto...',
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
		<html lang="es">
			<body className={`${geistFont.className} antialiased`}>
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
			</body>
		</html>
	)
}
