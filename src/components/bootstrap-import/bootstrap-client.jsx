'use client'

import { useEffect } from "react"
export default function BootstrapClient() {
  useEffect(() => {
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return null
}