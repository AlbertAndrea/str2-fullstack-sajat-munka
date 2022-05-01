const generateItems = require('../src/generateItems')

test('generateItems call callback count of items times', () => {
  const mockCallback = jest.fn( )
  //const mockCallback = jest.fn(x => x * 2)
  const arr = [1, 2]
  //const actual = generateItems(arr, mockCallback)
  //const expected = [2, 4]
  //expect(actual).toEqual(expected)
  generateItems(arr, mockCallback)
  expect(mockCallback).toHaveBeenCalledTimes(2) 
  //expect(mockCallback.mock.results[0].value).toBe(2)
  //expect(mockCallback.mock.results[1].value).toBe(4)
})