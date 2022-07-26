export const USERS = [
  {
    age      : 27,
    avatar   : 'https://reqres.in/img/faces/7-image.jpg',
    firstName: 'Michael',
    id       : 1,
    lastName : 'Lawson'
  },
  {
    age      : 28,
    avatar   : 'https://reqres.in/img/faces/8-image.jpg',
    firstName: 'Lindsay',
    id       : 2,
    lastName : 'Ferguson'
  },
  {
    age      : 19,
    avatar   : 'https://reqres.in/img/faces/9-image.jpg',
    firstName: 'Tobias',
    id       : 3,
    lastName : 'Funke'
  },
  {
    age      : 20,
    avatar   : 'https://reqres.in/img/faces/10-image.jpg',
    firstName: 'Byron',
    id       : 4,
    lastName : 'Fields'
  },
  {
    age      : 34,
    avatar   : 'https://reqres.in/img/faces/11-image.jpg',
    firstName: 'George',
    id       : 5,
    lastName : 'Edwards'
  },
  {
    age      : 18,
    avatar   : 'https://reqres.in/img/faces/12-image.jpg',
    firstName: 'Rachel',
    id       : 6,
    lastName : 'Howell'
  }
]

export const getGifts = () => {
  const gifts = 'bici coche pelota _playstation bici _coche peluche coche bici'.split(' ')
                      .filter(e => !e.startsWith('_'))
                      .reduce((acumulador: any, elemento:string)=>{
                        acumulador[elemento] = (acumulador[elemento] || 0) + 1;
                        return acumulador
                    },{});
  // your code here

  return gifts
}
