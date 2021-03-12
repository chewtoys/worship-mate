import { screen } from '@testing-library/react'

import { renderUI } from '~jest-utils'

import { SongTable } from './SongTable'

it('displays a song', () => {
  renderUI(
    <SongTable
      songs={[
        {
          slug: 'amazing-grace',
          title: 'Amazing Grace',
          artist: 'John Newton',
          themes: ['Grace', 'Comfort'],
          recommendedKey: 'E',
          timeSignature: [4, 4] as [number, number],
          bpm: 64,
        },
      ]}
    />,
  )

  expect(screen.getByText('Amazing Grace')).toBeVisible()
})
