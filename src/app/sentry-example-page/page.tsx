'use client'

import React from 'react'

export default function page() {
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error('Sentry Frontend Error')
      }}
    >
      Throw error
    </button>
  )
}
