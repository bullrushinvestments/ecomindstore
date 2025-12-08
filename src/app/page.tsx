import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoMindStore',
  description: 'EcoMindStore offers personalized mental health and sustainability products that cater to individuals looking for eco-friendly solutions while managing their well-being. The platform uses AI to suggest items based on user behavior, ensuring a unique and beneficial experience.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoMindStore</h1>
      <p className="mt-4 text-lg">EcoMindStore offers personalized mental health and sustainability products that cater to individuals looking for eco-friendly solutions while managing their well-being. The platform uses AI to suggest items based on user behavior, ensuring a unique and beneficial experience.</p>
    </main>
  )
}
