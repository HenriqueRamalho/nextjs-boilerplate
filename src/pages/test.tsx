import { render } from '@testing-library/react'

import IndexPage from '.'

describe('index page', () => {
  it('should render the heading', () => {
    render(<IndexPage />)
  })
})
