import objectorarray from './'

describe('objectorarray', () => {
  it('Those should be true', () => {
    expect(objectorarray({})).toBe(true)
    expect(objectorarray([])).toBe(true)
    expect(objectorarray(Object.create({}))).toBe(true)
    expect(objectorarray(Object.create(Object.prototype))).toBe(true)
    expect(objectorarray(Object.create(null))).toBe(true)
    expect(objectorarray(new Foo)).toBe(true)

    function Foo (bar) {
      this.bar = bar
    }
  })

  it('Those should be false', () => {
    expect(objectorarray()).toBe(false)
    expect(objectorarray(function () {})).toBe(false)
    expect(objectorarray(1)).toBe(false)
    expect(objectorarray(/foo/)).toBe(false)
    expect(objectorarray(null)).toBe(false)
    expect(objectorarray(undefined)).toBe(false)
  })
})
