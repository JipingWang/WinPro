
function loadMore(limit) {
  if (limit> 0){
	  const list = document.querySelector('ul[data-hook="product-list-wrapper"]')
	  if (list) {
		console.log('list: ', list.childElementCount)
	  } else {
		console.warn('list: undefined')
		return
	  }

	  const btn = document.querySelector('button[data-hook="load-more-button"]')
	  if (btn) {
		btn.click()
		setTimeout(()=>loadMore(limit-1), 5000)
	  } else {
		console.warn('not found: Load More')
		return
	  }  
  } else{
    console.warn('limit')
    return
  }


}
