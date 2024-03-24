'use client';
import { SessionProvider } from 'next-auth/react'
export default function AuthProviderComponent({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}