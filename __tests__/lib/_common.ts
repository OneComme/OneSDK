jest.mock('hacktimer',  jest.fn)
jest.mock('../../src/forcetimer',  jest.fn)
beforeAll(() => {
  Object.defineProperty(window, 'location', {
    value: new URL('http://localhost:11180/templates/basic/'),
    writable: true,
  })
  location.href = 'http://localhost:11180/templates/basic/'
  location.hostname = 'localhost'
})
afterAll(() => {
  const links = document.head.querySelectorAll('link')
  links.forEach(link => {
    document.head.removeChild(link)
  })
  const styles = document.head.querySelectorAll('style')
  styles.forEach(style => {
    document.head.removeChild(style)
  })
})
