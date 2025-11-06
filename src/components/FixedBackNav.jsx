import React from 'react'
import { Link } from 'react-router-dom'

// Fixed bottom-left back navigation for consistent placement across pages
export default function FixedBackNav({ parentTo, parentLabel }) {
  return (
    <div className="fixed left-4 bottom-4 z-50 pointer-events-none sm:left-6 sm:bottom-6">
      <div className="flex flex-col gap-2 pointer-events-auto">
        {parentTo && parentLabel && (
          <Link
            to={parentTo}
            aria-label={`Back to ${parentLabel}`}
            className="btn-outline px-3 py-2 text-sm md:text-base inline-flex items-center gap-2"
          >
            ← Back to {parentLabel}
          </Link>
        )}
        <Link
          to="/"
          aria-label="Back to Main Page"
          className="btn-outline px-3 py-2 text-sm md:text-base inline-flex items-center gap-2"
        >
          ← Back to Main Page
        </Link>
      </div>
    </div>
  )
}