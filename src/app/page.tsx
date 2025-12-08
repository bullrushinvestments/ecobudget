import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoBudget',
  description: 'A personal finance app that integrates AI-driven climate impact analysis and budgeting for individuals who want to manage their finances while reducing their carbon footprint.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoBudget</h1>
      <p className="mt-4 text-lg">A personal finance app that integrates AI-driven climate impact analysis and budgeting for individuals who want to manage their finances while reducing their carbon footprint.</p>
    </main>
  )
}
