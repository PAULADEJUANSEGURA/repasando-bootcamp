const posts = []
posts.count = 0

posts.push(
    {id: ++posts.count,
    image: 'https://img.wattpad.com/15155092764124e6999ae416dd3af8f1598ea7e5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64564b51577a4f455859473963413d3d2d313232343233373838322e3136656465386632663762306638346336323534383138343335312e6a7067?s=fit&w=720&h=720',
    text: 'John Doe no es nadie',
    user: users[0].id})

posts.push(
    {id: ++posts.count, 
    image: 'https://img.freepik.com/vector-gratis/fondo-navidad-diseno-plano-personajes_52683-48584.jpg', 
    text: 'Viva la Navidad!! Felices fiestas!!', 
    user: users[1].id})