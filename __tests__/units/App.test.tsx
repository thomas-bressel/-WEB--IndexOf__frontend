import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import App from '../../src/App'

describe('App component', () => {
  it('affiche le titre Indexof', () => {
    render(<App />)
    expect(screen.getByText('Indexof')).toBeInTheDocument()
  })

})
