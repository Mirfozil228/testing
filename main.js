fetch('https://randomuser.me/api/').then((res)=>res.json()).then((data)=>{
    data.results.map((value) =>{
        const div = document.createElement('div')
        const nameFirst = document.createElement('p')
        const image = document.createElement('img')
        const nameEnd = document.createElement('p')
        const number = document.createElement('p')

        nameFirst.innerHTML = value.name.first
        image.src = value.picture.large     
        nameEnd.innerHTML = value.name.last
        number.innerHTML = value.phone
        div.append(nameFirst , nameEnd , number , image)
        document.body.appendChild(div)

    })
}) 