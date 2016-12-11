import { expect } from 'chai'
import binary_search from './index'

describe('binary_search', () => {
  it('should return the index of the found value', () => {
    var index = binary_search([1,2,4,15,28,99], 15)
    expect(index).to.equal(3)
  })

  it('should return -1 if value is not found', () => {
    var index = binary_search([1,2,4,15,28,99], 1337)
    expect(index).to.equal(-1)
  })
})