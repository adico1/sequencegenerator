import { SequenceGenerator } from '../src/index'

describe('SequenceGenerator', () => {
  it('generate', () => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0.5
    global.Math = mockMath

    const mockDate = Object.create(global.Date)
    mockDate.now = () => 1578706932473
    global.Date = mockDate

    const sg = new SequenceGenerator(245)
    expect(sg.nextId()).toBe(3192868864)
    expect(sg.nextId()).toBe(3192868865)
    expect(sg.nextId()).toBe(3192868866)
    expect(sg.nextId()).toBe(3192868867)
    expect(sg.nextId()).toBe(3192868868)

    expect(new SequenceGenerator(-1)).toThrow(`NodeId must be between 0 and ${SequenceGenerator.maxNodeId}`)
  })
})
