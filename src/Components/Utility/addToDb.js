const getStoredReadList =() =>{
   //read-list
   const storedListStr =localStorage.getItem('read-list');
   if(storedListStr){
    const storedList =JSON.parse(storedListStr);
    return storedList;
   }
   else{
     return [];
   }
}

const addToStoredReadList =(id) =>{
   const storedList = getStoredReadList();
   if(storedList.includes(id)){

    // allready exists.do not add it
    console.log(id,'already exists in the read list')
   }
   else{
     storedList.push(id);
     const storedListStr = JSON.stringify(storedList);
     localStorage.setItem('read-list',storedListStr);
   }
}

const addToStoredWishList = (id)=>{
    if(storedWishList.includes(id)){

        // allready exists.do not add it
        console.log(id,'already exists in the read list')
       }
       else{
        storedWishList.push(id);
         const storedWishList = JSON.stringify(storedWishList);
         localStorage.setItem('Wish-list',storedWishList);
       }
}

export { addToStoredReadList,addToStoredWishList, getStoredReadList}