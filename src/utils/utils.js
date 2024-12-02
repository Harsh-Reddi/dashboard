import io from 'socket.io-client'

export const overrideStyle = {
    display: 'flex',
    margin : '0 24px',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center'
  }

  export const socket = io('https://backend-91y0.onrender.com')
