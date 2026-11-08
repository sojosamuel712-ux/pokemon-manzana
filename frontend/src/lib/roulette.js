export const rouletteCoins = [
  { id: 'bronze', label: 'Bronce', icon: '●' },
  { id: 'silver', label: 'Plata', icon: '●' },
  { id: 'gold', label: 'Oro', icon: '●' },
  { id: 'diamond', label: 'Diamante', icon: '◆' },
]

export const coinExchanges = [
  { source: 'bronze', target: 'silver', rate: 4 },
  { source: 'silver', target: 'gold', rate: 3 },
  { source: 'gold', target: 'diamond', rate: 2 },
]

const rouletteWheelColors = ['#f6d45b', '#e9674d', '#74b5d3', '#8fc578', '#d58fb0', '#8a9ed0']

export const getRouletteSlices = (entries) => {
  const totalWeight = entries.reduce((total, entry) => total + Number(entry.probability || 1), 0)
  let angle = 0
  return entries.map((entry, index) => {
    const start = angle
    angle += (Number(entry.probability || 1) / totalWeight) * 360
    return { ...entry, start, end: angle, midpoint: (start + angle) / 2, color: rouletteWheelColors[index % rouletteWheelColors.length] }
  })
}

export const getRouletteRotation = (slices, selectedId, currentRotation) => {
  const selectedSlice = slices.find((slice) => String(slice.id) === String(selectedId))
  if (!selectedSlice) return currentRotation + 1800
  const remainder = ((360 - selectedSlice.midpoint - (currentRotation % 360)) % 360 + 360) % 360
  return currentRotation + 1800 + remainder
}
