var res=[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      
    }]
  
  //   //for loop
    for(let i=0;i<res.length;i++){
        console.log(res[i].id,res[i].title);  
    }
  
  //output
  // 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  // 2 'qui est esse'
  // 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
  // 4 'eum et est occaecati'
  
  //   //for in loop
    for(let i in res){
        console.log(res[i].id,res[i].title);
    }
  
  //output
  // 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  // 2 'qui est esse'
  // 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
  // 4 'eum et est occaecati'
  //   // for of
    for(let rag of res){
        console.log(rag.id,rag.title)
    }
  
  //output
  // 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  // 2 'qui est esse'
  // 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
  // 4 'eum et est occaecati'
  
  //for each
  res.forEach(rag=>console.log(rag.id,rag.title));
  
  //output
  // 1 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  // 2 'qui est esse'
  // 3 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
  // 4 'eum et est occaecati'